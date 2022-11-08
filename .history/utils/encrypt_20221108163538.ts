import { hashSync, compareSync } from 'bcryptjs';

type hashType = {
  hash: (password: string) => void;
  compare: (password: string, encrypt: string) => void;
};

const hashPassword: hashType = {
  hash: (password) => {
    const encrypt = hashSync(password);
    return encrypt;
  },
  compare: (password, encrypt) => {
    const comparePassword = compareSync(password, encrypt);
    return comparePassword;
  },
};

export default hashPassword;
