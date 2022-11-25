import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../utils/supabase-service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
    const { name, description, price, discount, category_id, thumbnail } = req.body;
    if (!name && !price && !thumbnail) {
      return res.status(400).json({
        message: 'Data harus diisi',
      });
    }
    const { data, error, status, statusText } = await supabase.from('products').insert({
      name,
      description,
      price,
      discount,
      category_id,
      thumbnail,
    });
    if (error) {
      return res.status(status).json({ statusText, message: error.message });
    }
    return res.status(status).json({ message: 'Success', data });
  }
}
