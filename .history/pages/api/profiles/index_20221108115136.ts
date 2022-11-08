import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../utils/supabase-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      const { data, error, status } = await supabase
        .from('profile')
        .select('*');
      if (error) {
        return res.status(status).json({ message: error });
      }
      return res.status(200).json(data);
    case 'POST':
      return res.status(201).json({ message: 'Success' });
  }
}
