import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Chipp">
    <Container>
      <Title>
        Chipp <Badge>2021</Badge>
      </Title>
      <P>
        A full-stack crowdfunding platform where fundraisers can create and
        keep track of the donation campaigns.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.chipp.co.in/">
          https://www.chipp.co.in/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Node.js, MongoDB, Express, Digital Ocean, Nginx</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/chipp-cover.png" alt="chipp" />
      <WorkImage src="/images/works/chipp_03.png" alt="chipp" />
      <WorkImage src="/images/works/chipp_01.png" alt="chipp" />
      <WorkImage src="/images/works/chipp_02.png" alt="chipp" />
    </Container>
  </Layout>
)

export default Work
