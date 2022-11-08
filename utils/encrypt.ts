import bcrypt from 'bcrypt';

type hashType = {
  hash: (password: string) => void;
  compare: (password: string, encrypt: any) => void;
};

const hashPassword: hashType = {
  hash: (password) => {
    const encrypt = bcrypt.hashSync(password, 10);
    return encrypt;
  },
  compare: (password, encrypt) => {
    const comparePassword = bcrypt.compareSync(password, encrypt);
    return comparePassword;
  },
};

export default hashPassword;
