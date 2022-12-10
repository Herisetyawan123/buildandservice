import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import supabase from '../../../utils/supabase-service';

const handler = nextConnect();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { type } = req.body;
  console.log(type);
  try {
    if (type == '') {
      return res.status(400).json({
        message: "Bad Request!! Field doesn't be ommitted",
      });
    }
    const { error, status } = await supabase.from('categories').insert({ type });
    if (error) {
      return res.status(status).json({
        message: error.message,
      });
    }
    return res.status(status).json({
      message: 'Success',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data, error, status } = await supabase.from('categories').select('*');
    if (error) {
      return res.status(status).json({
        message: error.message,
      });
    }
    return res.status(status).json({
      message: 'Success',
      categories: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { type } = req.body;
  try {
    const findCategory = await supabase.from('categories').select('id').eq('id', id).single();
    if (!findCategory) {
      return res.status(404).json({
        message: 'Data not found',
      });
    }
    const { data, error } = await supabase.from('categories').update({ type }).eq('id', id);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(200).json({
      message: 'Success',
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
});

handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const findCategory = await supabase.from('categories').select('id').eq('id', id).single();
    if (findCategory.error) {
      return res.status(404).json({
        message: 'Data not found',
      });
    }
    const { data, error } = await supabase.from('categories').delete().eq('id', id);
    console.log(error);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(200).json({
      message: 'Success',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
});

export const config = {
  api: {
    bodyParser: true,
  },
};

export default handler;
