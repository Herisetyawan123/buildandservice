import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../utils/supabase-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'GET') {
    const data = await supabase.from('profiles').select('*');
    return res.status(200).json(data);
  }
}
