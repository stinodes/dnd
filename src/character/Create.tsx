import { API, graphqlOperation } from 'aws-amplify'
import { route } from 'navi'
import { useNavigation } from 'react-navi'
import { H1, Layout } from 'stinodes-ui'
import { Page } from '../components/Page'
import { createCharacter } from '../graphql/mutations'
import { BackButton } from '../navigation/BackButton'
import { CharacterForm, FormValues } from './CharacterForm'

type Props = { campaignId: string }
export const Create = ({ campaignId }: Props) => {
  const navigation = useNavigation()

  const onSubmit = async (values: FormValues) => {
    const valuesWithId = { ...values, campaignID: campaignId }
    await API.graphql(
      graphqlOperation(createCharacter, { input: valuesWithId }),
    )
    navigation.goBack()
  }

  return (
    <Page spacing={4}>
      <Layout spacing={2} direction="row" alignItems="center">
        <BackButton href=".." />
        <H1>Add character</H1>
      </Layout>
      <CharacterForm onSubmit={onSubmit} />
    </Page>
  )
}

export default route(route => {
  const campaignId = route.params.campaignId
  return {
    view: <Create campaignId={campaignId} />,
  }
})
