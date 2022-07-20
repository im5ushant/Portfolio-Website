import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello there!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sushant Dev Singh
          </Heading>
          <p>Full Stack Developer | Web3 Enthusiast</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/sushant.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I am a full-stack developer based in India with a
          passion for building digital services/products. I have a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code and having an MVP approach, scalability in mind.
        </Paragraph>
        <Paragraph>
          These days I am scratching the surface of Web3 and open to projects related to the same.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Kanpur, India.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Started with B.Tech. in Computer Science Engineering at Manipal University Jaipur
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Interned at Xandora (Freelancing Firm)
        </BioSection>
        <BioSection>
          <BioYear>2022 (Jan-May)</BioYear>
          SDE Intern at Thrillophilia
        </BioSection><BioSection>
          <BioYear>2022 (July-Present)</BioYear>
          Software Developer at Peak (peak.ai)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Playing guitar, singing, gym, exploring new tech. 
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/im5ushant" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @im5ushant
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/sushant_dev_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @sushant_dev_
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/im5ushant/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @im5ushant
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/im5ushant" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @im5ushant
              </Button>
            </Link>
          </ListItem>
        </List>
        
      </Section>
    </Container>
  </Layout>
)

export default Home
