import fs from 'fs';
import nextConnect from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../utils/supabase-service';
import formParser, { NextApiRequestMultipart } from '../../../utils/middleware/form-parser';
import uploadHelpers from '../../../helpers/uploadHelpers';

const handler = nextConnect();
handler.use(formParser);
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    // get data by id
    if (id) {
      const { data, error, status, statusText } = await supabase.from('products').select('*').eq('id', id).single();
      if (error) {
        return res.status(status).json({
          message: error.message,
        });
      }
      return res.status(status).json({
        message: 'Success',
        product: data,
      });
    }
    // get all data products
    const { data, error, status, statusText } = await supabase.from('products').select('*');
    if (error) {
      return res.status(status).json({
        statusText,
        message: error.message,
      });
    }
    res.status(status).json({ products: data });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

handler.post(async (req: NextApiRequestMultipart, res: NextApiResponse) => {
  const { files, fields } = req;
  try {
    const formbodyNull = Object.values(fields).some((field) => field === '');
    if (formbodyNull) {
      return res.status(400).json({
        message: 'Bad Request semua fields harus diisi',
      });
    }
    if (Object.entries(files).length === 0) {
      return res.status(400).json({
        message: 'Masukkan foto',
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
    let { data, error } = await uploadHelpers.uploadImageProduct(rawData, fileName, mimetype);
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

handler.put(async (req: NextApiRequestMultipart, res: NextApiResponse) => {
  console.log('ok');
  const { files, fields, query } = req;
  const imageReupload = Object.entries(files).length !== 0;
  if (!imageReupload) {
    delete fields['thumbnail'];
  }
  if (Object.values(fields).some((field) => field == '')) {
    return res.status(400).json({
      message: 'Bad Request semua fields harus diisi',
    });
  }
  const { id, imgUrl } = query;
  console.log(imgUrl);
  if (imageReupload) {
    const { data, error: removeImageError } = await uploadHelpers.deleteImage(imgUrl as string);
    console.log(removeImageError);
    if (removeImageError) {
      return res.status(400).json({
        message: 'gagal',
      });
    }
  }
  console.log('ok2');
  const { filepath, mimetype, size } = files.thumbnail;
  if (size > 1 * 1024 * 1024) {
    return res.status(400).json({
      message: 'Bad Request [file terlalu besar]',
    });
  }
  if (mimetype != 'image/jpeg' && mimetype != 'image/png' && mimetype != 'image/jpg') {
    return res.status(400).json({
      message: 'Bad Request [format file harus berupa => image/jpeg or image/png or image/jpg]',
    });
  }
  const fileName = `products-${new Date().getTime()}`;
  const rawData = fs.readFileSync(filepath);
  const { data: uploadImage, error: uploadImageError } = await uploadHelpers.uploadImageProduct(rawData, fileName, mimetype);
  if (uploadImageError) {
    return res.status(400).json({
      message: 'Gagal upload image',
    });
  }
  const { data, error, status } = await supabase
    .from('products')
    .update({
      ...fields,
      thumbnail: 'https://nymvxvireoklhrifvggx.supabase.co/storage/v1/object/public/thumbnail/' + uploadImage.path,
    })
    .eq('id', id);
  if (error) {
    return res.status(status).json({
      message: error.message,
    });
  }
  return res.status(200).json({
    message: 'Success',
    data,
  });
});

handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { data, error } = await supabase.from('products').delete().eq('id', id);
  if (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
  return res.status(200).json({
    message: 'Success',
    data,
  });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
