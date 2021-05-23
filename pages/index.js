import Head from 'next/head'
import {
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daksh Kulshrestha</title>
        <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
      </Head>
      <Flex justifyContent="center" alignItems="center" p={20}>
        <Flex direction="row">
          <Text fontFamily="Inter" mt={20} fontSize={30}>
            Hi, I am <Heading>Daksh Kulshrestha</Heading> and I am a full stack developer.
            I love build & ship software. I use Javascript as my primary language.
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
