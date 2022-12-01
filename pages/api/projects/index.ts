import fs from 'fs';
import nextConnect from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../utils/supabase-service';
import formParser, { NextApiRequestMultipart } from '../../../utils/middleware/form-parser';
import uploadHelpers from '../../../helpers/uploadHelpers';

const handler = nextConnect();
handler.use(formParser);
// Post request Project
handler.post(async (req: NextApiRequestMultipart, res: NextApiResponse) => {
  try {
    const { files, fields } = req;
    if (Object.values(files).length === 0) {
      return res.status(400).json({
        message: 'Bad Request Foto harus dimasukkan',
      });
    }
    if (Object.values(fields).some((field) => field === '')) {
      return res.status(400).json({
        message: 'Bad Request!! Semua field harus diisi',
      });
    }
    const { filepath, mimetype, size } = files.srs;
    if (size > 3 * 1024 * 1024) {
      return res.status(400).json({
        message: 'Ukuran file terlalu besar',
      });
    }
    if (mimetype != 'application/pdf') {
      return res.status(400).json({
        message: 'File harus berekstensi .pdf',
      });
    }
    const fileName = `project-${new Date().getTime()}`;
    const rawData = fs.readFileSync(filepath);
    const { data: uploadsrs, error: errorupload } = await uploadHelpers.uploadFileSrs(rawData, fileName, mimetype);
    if (errorupload) {
      return res.status(400).json({
        message: errorupload.message,
      });
    }
    const {
      data: request,
      error: errorCreate,
      status,
    } = await supabase.from('request_projects').insert({
      ...fields,
      srs: 'https://nymvxvireoklhrifvggx.supabase.co/storage/v1/object/public/system-request/' + uploadsrs.path,
    });
    if (errorCreate) {
      return res.status(status).json({
        message: errorCreate.message,
      });
    }
    return res.status(status).json({
      message: 'Success',
      data: request,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    // get data by id
    if (id) {
      const { data, error, status } = await supabase.from('request_projects').select('*').eq('id', id).single();
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
    // get all data request_projects
    const { data, error, status, statusText } = await supabase.from('request_projects').select('*');
    if (error) {
      return res.status(status).json({
        statusText,
        message: error.message,
      });
    }
    res.status(status).json({ request_projects: data });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

handler.put(async (req: NextApiRequestMultipart, res: NextApiResponse) => {
  const { fields } = req;
  const { id } = req.query;
  try {
    const { data: findProject } = await supabase.from('request_projects').select('id').eq('id', id).single();
    if (!findProject) {
      return res.status(404).json({
        message: 'Data not found',
      });
    }
    if (Object.values(fields).some((field) => field == '')) {
      return res.status(400).json({
        message: 'Bad Request semua fields harus diisi',
      });
    }
    const { data, error, status } = await supabase
      .from('request_projects')
      .update({ ...fields })
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
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
