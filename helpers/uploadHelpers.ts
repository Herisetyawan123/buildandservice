import supabase from '../utils/supabase-service';

const uploadHelpers = {
  uploadImageProduct: async (file: Buffer, filename: string, typefile: string) => {
    const { data, error } = await supabase.storage.from('thumbnail').upload(filename, file, {
      contentType: typefile,
      upsert: true,
    });
    return { data, error };
  },
  deleteImage: async (imgUrl: string) => {
    console.log(imgUrl);
    const { data, error } = await supabase.storage.from('thumbnail').remove([imgUrl]);

    return { data, error };
  },
};

export default uploadHelpers;
