import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { route } from 'navi'
import { Campaign } from '../API'
import { getCampaign } from '../graphql/queries'
import { Page } from '../components/Page'
import { H1, H4, Layout, Paragraph, Text } from 'stinodes-ui'
import { BackButton } from '../navigation/BackButton'
import { ButtonLink } from '../components/ButtonLink'

export const CampaignDetail = ({ campaign }: { campaign: void | Campaign }) => {
  if (!campaign) return null

  return (
    <Page spacing={4}>
      <Layout direction="row">
        <BackButton href="/campaigns" />
        <Layout>
          <H4>Campaign</H4>
          <Layout spacing={2} direction="row" alignItems="center">
            <H1>{campaign.name}</H1>
            <Text>By {campaign.owner}</Text>
          </Layout>
        </Layout>
      </Layout>
      {!campaign.characters?.items.length && !campaign.locations?.items.length && (
        <Paragraph textAlign="center" color="darks.4">
          Your campaign is empty right now
        </Paragraph>
      )}

      <ButtonLink href={`/campaigns/${campaign.id}/add-location`} size="small">
        Add a location
      </ButtonLink>
      <ButtonLink href={`/campaigns/${campaign.id}/add-character`} size="small">
        Add a character
      </ButtonLink>
    </Page>
  )
}

export default route(async route => {
  const id = route.params.id

  const { data } = (await API.graphql(
    graphqlOperation(getCampaign, { id }),
  )) as GraphQLResult<{ getCampaign: Campaign }>

  return {
    view: <CampaignDetail campaign={data?.getCampaign} />,
  }
})
