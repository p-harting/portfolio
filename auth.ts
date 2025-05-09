import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    signIn({ user, account, profile, email, credentials }) {
      if (user?.email === "pascalharting98@gmail.com") {
        return true
      } else return "/"
    }
  }
})