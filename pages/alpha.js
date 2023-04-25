import { useSession, signIn, signOut } from "next-auth/react"
import { Flex, Text, Heading, Button, Image } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Alpha from "@/components/Alpha"
import { getSession } from "next-auth/react"

// {session ? session.user.guild.roles.includes('1090105757271339198') ? <Alpha /> : <Text>401: Unauthorized</Text> : <Text>You're Not Signed In</Text>}

export default function AlphaDashboard() {
    return (
        <>
           <Alpha />
        </>
    )
}