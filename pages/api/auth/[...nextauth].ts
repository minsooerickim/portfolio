import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../../../lib/mongodb'

export default async function auth(req, res) {
    return await NextAuth(req, res, {
      adapter: MongoDBAdapter(clientPromise),
      providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET
        }),
        EmailProvider({
          server: {
            host: process.env.EMAIL_SERVER_HOST,
            port: process.env.EMAIL_SERVER_PORT,
            auth: {
              user: process.env.EMAIL_SERVER_USER,
              pass: process.env.EMAIL_SERVER_PASSWORD
            }
          },
          from: process.env.EMAIL_FROM
        }),
      ],
      callbacks: {
        async signIn({ user, account, profile }) {
          if (account.provider === 'google') {
            // first and last name attributes are available for GoogleProfile
            // -- https://github.com/nextauthjs/next-auth/blob/main/packages/next-auth/src/providers/google.ts
            user.name = {
              first: String(profile.given_name),
              last: String(profile.family_name)
            }
          }
          return true
        },
        async session({ session, user }) {
          session.user.uid = user.uid
          session.user.gid = user.gid
          session.user.name = user.name
          return session
        },
      },
      pages: {
        verifyRequest: '/verify-signin', // Used for check email page
        newUser: '/' // Redirect new users to apply (replace to '/' when apps close)
      },
      secret: process.env.SECRET
    })
  }

// first and last name attributes are available for GoogleProfile
// -- https://github.com/nextauthjs/next-auth/blob/main/packages/next-auth/src/providers/google.ts