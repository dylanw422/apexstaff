import Head from 'next/head'
import { Flex, Text, Heading, Button, Image, Stack, Input, Textarea, Select } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

export default function Alpha() {
    const [reference, setReference] = useState()
    const [project, setProject] = useState('')
    const [holdTime, setHoldTime] = useState('')
    const [entryPrice, setEntryPrice] = useState('')
    const [description, setDescription] = useState('')
    const [caller, setCaller] = useState('')
    const [links, setLinks] = useState('')

    useEffect(() => {
        setReference(Math.floor(Math.random() * 10000000))
    }, [])

    let params = {
        username: "Apex Alpha",
        embeds: [{
            title: project,
            thumbnail: {
                url: "https://cdn.discordapp.com/attachments/1068274739732287520/1098495867780075560/IMG_2306.png"
            },
            fields: [
                {
                    name: "Hold Time: ",
                    value: holdTime,
                    inline: true
                },
                {
                    name: "Entry Price: ",
                    value: entryPrice,
                    inline: true
                },
                {
                    name: "Info",
                    value: description
                }
            ],
            description: `Caller: <@${caller}> \n ${links}`,
            image: {
                url: "https://cdn.discordapp.com/attachments/1068274739732287520/1098495868279210047/Apex_Labs_twitter_banner_with_logo_buysell7.png"
            },
            footer: {
                text: `Reference #: ${reference}`
            }
        }]
    }

    async function sendWebhook(data) {
        await fetch('https://discord.com/api/webhooks/1098839909042749510/8w0PFouvAGJQhGSQxNMsBDF5Bo-uxIjTdDODWInj8t9lhseOyBAxV-vK_FENjEFbLZu6', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <>
            <Head>
                <title>Apex Alpha</title>
                <meta name="description" content="For Apex Alpha Callers" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Flex w='100%' h='100vh' direction='column' justify='center' align='center'>
                <Flex w='20%' direction='column' align='center' justify='space-evenly'>
                    <Heading mb='5%'>Apex Alpha Form</Heading>
                    <Stack w='100%' spacing={6}>
                            <Input onChange={(e) => setProject(e.target.value)} placeholder='Name of Project' />
                            <Input onChange={(e) => setHoldTime(e.target.value)} placeholder='Hold Time Estimate' />
                            <Input onChange={(e) => setEntryPrice(e.target.value)} placeholder='Entry Price' />
                            <Textarea onChange={(e) => setDescription(e.target.value)} resize='none' placeholder='Description'/>
                            <Select onChange={(e) => setCaller(e.target.value)} placeholder='Alpha Caller'>
                                <option value='668652608982089729'>Notice</option>
                                <option value='513560912750313478'>NatoshiNakamoto</option>
                            </Select>
                            <Input disabled value={'ReferenceID: ' + reference}></Input>
                            <Input onChange={(e) => setLinks(e.target.value)} placeholder='Links'></Input>
                    </Stack>
                    <Button onClick={() => sendWebhook(params)} mt='5%'>Submit</Button>
                </Flex>
            </Flex>
        </>
    )
}