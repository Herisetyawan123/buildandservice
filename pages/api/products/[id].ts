// Todos
import fs from 'fs';
import nextConnect from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import formParser, { NextApiRequestMultipart } from '../../../utils/middleware/form-parser';
import supabase from '../../../utils/supabase-service';
import uploadHelpers from '../../../helpers/uploadHelpers';

// const handler = nextConnect();
// handler.use(formParser);

// handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
//   const { id } = req.query;
//   try {
//     const { data, status, error } = await supabase.from('products').select('*').eq('id', id).single();
//     if (error) {
//       return res.status(400).json({
//         message: error.message,
//       });
//     }
//     res.status(status).json({
//       message: 'Success',
//       product: data,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// handler.put(async (req: NextApiRequestMultipart, res: NextApiResponse) => {
//   const { files, fields, query } = req;
//   const formBodyNull = Object.values(fields).some((field) => field == '');
//   if (formBodyNull) {
//     return res.status(400).json({
//       message: 'Bad Request semua fields harus diisi',
//     });
//   }
//   const imageReupload = Object.entries(files).length !== 0;
//   if (!imageReupload) {
//     delete fields['thumbnail'];
//   }
//   const { id, imgUrl } = query;
//   console.log(id);
//   if (imageReupload) {
//     const { filepath, mimetype, size } = files.thumnail;
//     if (size > 5 * 1024 * 1024) {
//       return res.status(400).json({
//         message: 'Bad Request [file terlalu besar]',
//       });
//     }
//     if (mimetype != 'image/jpeg' || mimetype != 'image/png' || mimetype != 'image/jpg') {
//       return res.status(400).json({
//         message: 'Bad Request [format file harus berupa => image/jpeg or image/png or image/jpg]',
//       });
//     }
//   }
//   res.status(200).json({
//     message: 'Oke jalan',
//   });
// });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default handler;
