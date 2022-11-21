import bcrypt, { compare } from 'bcryptjs';

type hashType = {
  hash: (password: string) => void;
  compare: (password: string, encrypt: string) => void;
};

const hashPassword: hashType = {
  hash: (password) => {
    const encrypt = bcrypt.hashSync(password);
    return encrypt;
  },
  compare: (password, encrypt) => {
    const comparePassword = bcrypt.compareSync(password, encrypt);
    return comparePassword;
  },
};
