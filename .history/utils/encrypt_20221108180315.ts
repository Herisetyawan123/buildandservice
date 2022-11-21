import bcrypt from 'bcrypt';

type hashType = {
  hash: (password: string) => void;
  compare: (password: string, encrypt: string) => void;
};

const hashPassword: hashType = {
  hash: (password) => {
    const encrypt = bcrypt.hashSync(password, 10);
    return encrypt;
  },
  compare: (password, encrypt) => {
    bcrypt.compareSync(password, encrypt);
    return true;
  },
};

export default hashPassword;