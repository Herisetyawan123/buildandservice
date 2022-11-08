import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../utils/supabase-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'GET') {
    const { data, error, status } = await supabase.from('profile').select('*');
    if (error) {
      return res.status(status).json({ message: error });
    }
    return res.status(200).json(data);
  }
}
