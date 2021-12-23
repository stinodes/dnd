import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { route } from 'navi'
import { Campaign } from '../API'
import { Page } from '../components/Page'
import { H1, Icon, Layout, Text } from 'stinodes-ui'
import { BackButton } from '../navigation/BackButton'
import { useCurrentRoute } from 'react-navi'
import { ButtonLink } from '../components/ButtonLink'

const query = `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      id
      name
      owner
    }
  }
`

export const CampaignDetail = () => {
  const route = useCurrentRoute()
  const campaign: void | Campaign = route.data

  if (!campaign) return null

  return (
    <Page spacing={4}>
      <Layout spacing={2} direction="row" alignItems="center">
        <BackButton href="/campaigns" />
        <H1>{campaign.name}</H1>
        <Text>By {campaign.owner}</Text>
      </Layout>
      <Layout direction="row" spacing={2}>
        <ButtonLink size="small" href="create-location">
          <Icon icon="plus" mr={2} />
          Location
        </ButtonLink>
      </Layout>
    </Page>
  )
}

export default route(async route => {
  const id = route.params.campaignId
  const { data } = (await API.graphql(
    graphqlOperation(query, { id }),
  )) as GraphQLResult<{ getCampaign: Campaign }>

  return { data: data?.getCampaign, view: <CampaignDetail /> }
})
