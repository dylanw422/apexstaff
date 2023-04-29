import { useSession, signIn, signOut } from "next-auth/react"
import { Flex, Text, Heading, Button, Image } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Alpha from "@/components/Alpha"

// {session ? discord.roles.includes('1094476893547397130') ? <Alpha /> : <Text>You do not have access to this page.</Text> : <Text>You're Not Signed In. Go <a href='/'>Home</a></Text>}

export default function AlphaDashboard() {
    const { data: session } = useSession()
    const [discordData, setDiscordData] = useState()
    console.log(session)

    async function getDiscordData() {
        await fetch('https://discord.com/api/users/@me/guilds/1081469674807640144/member', {
            headers: {
                Authorization: `Bearer ${session.accessToken}`,
                "Content-Type": 'application/json'
            }
        }).then(res => res.json()).then(data => setDiscordData(data));
    }
    
    useEffect(() => {
        if (session) {
            getDiscordData();
        }
    }, [session])

    return (
        <> 
            {session ? discordData.roles.includes('1094476893547397130') ? <Alpha /> : <Text>You do not have access to this page.</Text> : <Text>You're Not Signed In. Go <a href='/'>Home</a></Text>}
        </>
    )
}