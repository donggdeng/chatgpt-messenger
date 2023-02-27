import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SERCET,
    })
    // ...add more providers here
  ],

  secret: process.env.AUTH_SECRET,

  debug: process.env.NODE_ENV !== "production"
}

export default NextAuth(authOptions)