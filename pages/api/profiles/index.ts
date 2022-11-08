import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../utils/supabase-service';
import hashPassword from '../../../utils/encrypt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'GET') {
    const { data, error, status } = await supabase.from('profiles').select('*');
    if (error) {
      return res.status(status).json({ message: error });
    }
    return res.status(200).json(data);
  } else if (req.method == 'POST') {
    const { username, full_name, email, password } = req.body;
    const saltPassword = hashPassword.hash(password);
    const result = await supabase
      .from('profiles')
      .insert({ username, full_name, email, password: saltPassword });
    return res.status(201).json({ result });
  }
}
