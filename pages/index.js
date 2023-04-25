import Head from 'next/head'
import { Flex, Text, Heading, Button, Image } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home() {
  const{ data: session } = useSession()
  const [userURL, setUserURL] = useState('')
  console.log(session)
  //bgColor='#5865f2'
  
  //checks roles for next page
  async function goToDash() {
    if (session.user.guild.roles.includes('1090105757271339198')) {
      window.location.href='/alpha'
    }
  }
  

  return (
    <>
      <Head>
        <title>Apex Dashboard</title>
        <meta name="description" content="For Apex Staff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w='100%' h='100vh'>
        <Flex bgImage='/apexbright.png' bgPos='center' bgSize='cover' direction='column' align='center' bgColor='#F8FBFD' w='35%' h='100%'>
        </Flex>
        <Flex align='center' direction='column' w='65%' h='100%'>
          <Flex w='85%' h='8%' align='center' justify='flex-end'>
            {session ? 
              <Flex align='center'>
                <Text mr='5%'>{session.user.name}</Text> 
                <Button onClick={() => signOut()}>Sign Out</Button> 
              </Flex>
            : null}
          </Flex>
          <Flex h='84%' justify='center' align='center' direction='column'>
            <Heading size='2xl'>Apex Dashboard</Heading>
            {session ? <Button onClick={() => goToDash()} mt='5%'>Continue To Dashboard</Button> : <Button onClick={() => signIn('discord')} mt='5%' bgColor='#5865F2' color='white' _hover={{ bgColor: '#9da4f7'}}>Sign In With Discord</Button> }
          </Flex>
          <Flex h='7%' align='flex-end' justify='center'>
              <Text color='gray'>All Rights Reserved © Apex Labs 2023</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
