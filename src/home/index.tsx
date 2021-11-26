import { route } from 'navi'
import { Flex, H1, Layout, Text } from 'stinodes-ui'
import { ButtonLink } from '../components/ButtonLink'
import { Page } from '../components/Page'

export const Home = () => (
  <Layout flex={1}>
    <Flex bg="primary">
      <Page pt={0} direction="row" bg="primary" py={6}>
        <Layout flex={1}>
          <H1 color="lights.4">Dungeon Notes</H1>
          <Text color="lights.4">Ease your delving pains</Text>
        </Layout>
        <ButtonLink
          href="/create-campaign"
          bg="lights.4"
          important
          color="primary">
          Create a campaign
        </ButtonLink>
      </Page>
    </Flex>
    <Page pt={0}>
      <Layout py={3}>
        <Text fontSize={20}>
          Take notes and keep up to date with your own campaign.
        </Text>
      </Layout>
      <Layout py={3} alignItems="flex-end">
        <Text fontSize={20}>
          Track and generate NPCs to populate your living world.
        </Text>
      </Layout>
      <Layout py={3}>
        <Text fontSize={20}>
          Share your creations with friends and players, who are totally taking
          their own notes.
        </Text>
      </Layout>
    </Page>
  </Layout>
)

export default route({
  data: { hideNavigation: true },
  view: <Home />,
})
