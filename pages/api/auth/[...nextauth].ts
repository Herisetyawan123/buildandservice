import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email !== 'perdanaph@gmail.com' || password !== '12345678') {
          throw new Error('Wrong email and password');
        }
        return { id: '96', name: 'perdanaph', email: 'perdanaph@gmail.com' };
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
};
export default NextAuth(authOptions);
