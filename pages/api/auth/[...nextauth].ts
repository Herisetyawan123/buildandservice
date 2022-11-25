import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import TwitterProvider from 'next-auth/providers/twitter';
import supabase from '../../../utils/supabase-service';
import hashPassword from '../../../utils/encrypt';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const { data, status, error } = await supabase
          .from('profiles')
          .select('email, password')
          .eq('email', email)
          .single();
        if (error) {
          throw new Error('Email is not exist');
        }
        const comparePassword = hashPassword.compare(password, data.password);
        if (!comparePassword) {
          throw new Error('Wrong password');
        }
        return { data, status } as any;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      version: '2.0',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  secret: "asdkjviu3yr38qpyr9yaesofj983ropdsoodjf3298r937990f"
};
export default NextAuth(authOptions);
