import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Burger Builder">
        <Container>
            <Title>
                Burger Builder <Badge>2020</Badge>
            </Title>
            <P>
                A web application that provides users to make customized burgers
                and place order for the same.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://burger-builder11.web.app/">
                        https://burger-builder11.web.app/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, Redux, Firebase</span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/burger-cover.png" alt="burger" />
            <WorkImage src="/images/works/burger_01.png" alt="burger" />
            <WorkImage src="/images/works/burger_02.png" alt="burger" />
        </Container>
    </Layout>
)

export default Work
