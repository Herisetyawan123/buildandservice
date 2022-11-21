import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_TOKEN;
const supabase = createClient(supabaseUrl as string, supabaseKey as string);

export default supabase;
