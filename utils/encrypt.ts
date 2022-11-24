import bcrypt from 'bcrypt';



const hashPassword = {
  hash: (password : string) => {
    const encrypt = bcrypt.hashSync(password, 10);
    return encrypt;
  },
  compare: (password: string, encrypt: string) => {
    const comparePassword = bcrypt.compareSync(password, encrypt);
    return comparePassword;
  },
};

export default hashPassword;
