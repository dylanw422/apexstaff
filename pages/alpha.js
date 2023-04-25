import { useSession, signIn, signOut } from "next-auth/react"
import { Flex, Text, Heading, Button, Image } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Alpha from "@/components/Alpha"

// {session ? session.user.guild.roles.includes('1094476893547397130') ? <Alpha /> : <Text>401: Unauthorized</Text> : <Text>You're Not Signed In. Go <a style={{textDecoration: 'underline'}} href='/'>Home</a></Text>}

export default function AlphaDashboard() {
    const { data: session } = useSession()
    return (
        <> 
            <Alpha />
        </>
    )
}