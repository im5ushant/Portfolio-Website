import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="StockSent">
    <Container>
      <Title>
        StockSent <Badge>2021</Badge>
      </Title>
      <P>
        A web app primarily used for getting market sentiment by running
        analysis on recent tweets and news articles.
      </P>
      <P>
        Embedded TradingView API to enable stock graphs and technical analysis
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/im5ushant/stocksent">
          https://github.com/im5ushant/stocksent <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Flask, NLTK, Tweepy, Google News API, TradingView</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/stocksent-cover.png" alt="stocksent" />
      <WorkImage src="/images/works/stocksent_01.png" alt="stocksent" />
      <WorkImage src="/images/works/stocksent_02.png" alt="stocksent" />
    </Container>
  </Layout>
)

export default Work
