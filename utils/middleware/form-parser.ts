import formidable from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';
import type { Files, Fields } from 'formidable';

export type NextApiRequestMultipart = NextApiRequest & {
  files: Files;
  fields: Fields;
};

export default async function formParser(req: NextApiRequest, res: NextApiResponse, next: NextHandler) {
  const contentType = req.headers['content-type'];
  if (contentType && contentType.indexOf('multipart/form-data') !== -1) {
    const form = new formidable.IncomingForm({
      keepExtension: true,
    });
    form.parse(req, (err, fields, files) => {
      if (Object.entries(files).length === 0) {
        return res.status(400).json({
          message: 'Masukkan foto',
        });
      }
      if (!err) {
        (req as NextApiRequestMultipart).files = files;
        (req as NextApiRequestMultipart).fields = fields;
        next();
      }
    });
  } else {
    next();
  }
}
