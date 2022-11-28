import fs from 'fs';
import nextConnect from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../utils/supabase-service';
import formParser, { NextApiRequestMultipart } from '../../../utils/middleware/form-parser';
import uploadImageProduct from '../../../helpers/uploadHelpers';

const handler = nextConnect();
handler.use(formParser);
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data, error, status, statusText } = await supabase.from('products').select('*');
    if (error) {
      return res.status(status).json({
        statusText,
        message: error.message,
      });
    }
    res.status(status).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

handler.post(async (req: NextApiRequestMultipart, res: NextApiResponse) => {
  const { files, fields } = req;
  // console.log(Object.entries(files).length);
  try {
    const formbodyNull = Object.values(fields).some((field) => field === '');
    if (formbodyNull) {
      return res.status(400).json({
        message: 'Field harus diisi',
      });
    }
    const { size, filepath, mimetype } = files.thumbnail;
    if (size > 5 * 1024 * 1024) {
      return res.status(400).json({
        message: 'File terlalu besar, maksimal ukuran file adalah 5MB',
      });
    }
    const fileName = `products-${new Date().getTime()}`;
    const rawData = fs.readFileSync(filepath);
    let { data, error } = await uploadImageProduct(rawData, fileName, mimetype);
    const product = await supabase.from('products').insert({
      ...fields,
      thumbnail: 'https://nymvxvireoklhrifvggx.supabase.co/storage/v1/object/public/thumbnail/' + data.path,
    });
    if (error) {
      return res.status(400).json({
        message: error,
      });
    }
    res.status(201).json({
      product: product.data,
      message: 'Success',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server error',
    });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
