import supabase from '../utils/supabase-service';

export default async function uploadImageProduct(file: Buffer, filename: string, typefile: string) {
  const { data, error } = await supabase.storage.from('thumbnail').upload(filename, file, {
    contentType: typefile,
    upsert: true,
  });
  return { data, error };
}
