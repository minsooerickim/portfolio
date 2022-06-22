import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../../../lib/mongodb'

export default async function auth(req, res) {
  return await NextAuth(req, res, {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        profile(profile: {
          sub: string
          name: string
          given_name: string
          family_name: string
          email: string
          picture: string
        }) {
          return {
            id: profile.sub,
            name: profile.name,
            firstname: profile.given_name,
            lastname: profile.family_name,
            email: profile.email,
            image: profile.picture,
          }
        },
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        },
        from: process.env.EMAIL_FROM,
      }),
    ],
    callbacks: {
      async session({ session, user }: any) {
        session.user.firstname = String(user.name.first)
        session.user.lastname = String(user.name.last)
        session.user.id = user.id
        return session
      },
    },
    pages: {
      verifyRequest: '/verify-signin',
      newUser: '/',
    },
    secret: process.env.SECRET,
  })
}

// first and last name attributes are available for GoogleProfile
// -- https://github.com/nextauthjs/next-auth/blob/main/packages/next-auth/src/providers/google.ts
