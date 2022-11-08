import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../utils/supabase-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      const { data, error, status } = await supabase
        .from('profiles')
        .select('*');
      if (error) {
        return res.status(status).json({ message: error });
      }
      return res.status(200).json(data);
    case 'POST':
      const { username, full_name, password } = req.body;
      console.log(username);
      return res.status(201).json({ Message: 'Success' });
  }
}
