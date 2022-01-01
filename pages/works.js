import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbChipp from '../public/images/works/chipp-cover.png'
import thumbStocksent from '../public/images/works/stocksent-cover.png'
import thumbBurgerBuilder from '../public/images/works/burger-cover.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="chipp"
            title="Chipp"
            thumbnail={thumbChipp}
          >
            A Crowdfunding Platform where fundraisers can create and
            keep track of the donation campaigns.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="stocksent"
            title="StockSent"
            thumbnail={thumbStocksent}
          >
            A Web App for getting market sentiment and performing technical analysis
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="burgerbuilder"
            title="Burger Builder"
            thumbnail={thumbBurgerBuilder}
          >
            A web application that provides users to make customized burgers
            and place order for the same.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
