import bcryptjs from '@types/bcryptjs';

type hashType = {
  hash: (password: string) => void;
  compare: (password: string, encrypt: string) => void;
};

const hashPassword: hashType = {
  hash: (password) => {
    const encrypt = bcryptjs.hashSync(password);
    return encrypt;
  },
  compare: (password, encrypt) => {
    const comparePassword = bcryptjs.compareSync(password, encrypt);
    return comparePassword;
  },
};

export default hashPassword;
