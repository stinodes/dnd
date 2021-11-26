import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { route } from 'navi'
import { Campaign } from '../API'
import { listCampaigns } from '../graphql/queries'
import { Page } from '../components/Page'
import { Card, Flex, H1, H3, Icon } from 'stinodes-ui'
import { ButtonLink } from '../components/ButtonLink'
import { Link } from 'react-navi'
import styled from '@emotion/styled'

const CardLink = styled(Card.withComponent(Link))`
  text-decoration: none;
`

export const CampaignOverview = ({ campaigns }: { campaigns: Campaign[] }) => {
  console.log(campaigns)
  return (
    <Page spacing={3}>
      <Flex justifyContent="space-between">
        <H1>Campaigns</H1>
        <ButtonLink href="/create-campaign" size="small">
          Create
        </ButtonLink>
      </Flex>
      {campaigns.map(campaign => (
        <CardLink
          bg="lights.4"
          border
          shadow
          p={2}
          justifyContent="space-between"
          href={`/campaigns/${campaign.id}`}
          key={campaign.id}>
          <H3 textDecoration="none">{campaign.name}</H3>
          <Icon icon="arrow-right" color="darks.4" />
        </CardLink>
      ))}
    </Page>
  )
}

export default route(async () => {
  const { data } = (await API.graphql(
    graphqlOperation(listCampaigns, { owner: 'test' }),
  )) as GraphQLResult<{ listCampaigns: { items: Campaign[] } }>

  return {
    data: {
      hamburger: true,
    },
    view: <CampaignOverview campaigns={data?.listCampaigns?.items || []} />,
  }
})
