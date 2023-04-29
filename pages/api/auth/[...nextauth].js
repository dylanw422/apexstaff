import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

const scopes = ['identify', 'guilds', 'guilds.members.read'].join(' ')

export const authOptions = {
  callbacks: {
    async jwt({ token, account, profile }) {
        if (account) {
            token.accessToken = account.access_token
            token.id = profile.id
        }
        return token
    },
    async session({ session, token, user }) {
        session.accessToken = token.accessToken
        session.user.id = token.id
        /*await fetch('https://discord.com/api/users/@me/guilds/1081469674807640144/member', {
            headers: {
                Authorization: `Bearer ${session.accessToken}`,
                "Content-Type": 'application/json'
            }
        }).then(res => res.json()).then(data => session.user.guild = data)*/

        return session
    }
  },
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {params: {scope: scopes}}
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)