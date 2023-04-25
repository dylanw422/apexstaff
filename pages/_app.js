import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/theme.js'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  ) 
}
