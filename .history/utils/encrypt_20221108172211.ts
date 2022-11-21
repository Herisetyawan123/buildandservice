import * as hash from 'bcrypt';

type hashType = {
  hash: (password: string) => void;
  compare: (password: string, encrypt: string) => void;
};

const hashPassword: hashType = {
  hash: (password) => {
    const encrypt = hash.hashSync(password, 10);
    return encrypt;
  },
  compare: (password, encrypt) => {
    const comparePassword = hash.compareSync(password, encrypt);
    return comparePassword;
  },
};

export default hashPassword;
