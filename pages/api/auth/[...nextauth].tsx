import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/google'
import clientPromise from '../../../lib/mongodb'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: '/home',
  },
  session: {
    strategy: 'jwt',
  },
})
