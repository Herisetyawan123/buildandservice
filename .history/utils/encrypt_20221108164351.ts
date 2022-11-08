import * as hash from '@types/bcryptjs';

type hashType = {
  hash: (password: string) => void;
  compare: (password: string, encrypt: string) => void;
};

const hashPassword: hashType = {
  hash: (password) => {
    const encrypt = hash.hashSync(password);
    return encrypt;
  },
  compare: (password, encrypt) => {
    const comparePassword = hash.compareSync(password, encrypt);
    return comparePassword;
  },
};

export default hashPassword;
