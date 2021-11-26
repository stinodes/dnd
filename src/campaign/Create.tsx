import { Form, Formik } from 'formik'
import { route } from 'navi'
import { Button, Flex, H1 } from 'stinodes-ui'
import { Page } from '../components/Page'
import { FormTextField } from '../components/FormikFields'
import { API, graphqlOperation } from 'aws-amplify'
import { createCampaign } from '../graphql/mutations'
import { useNavigation } from 'react-navi'
import { BackButton } from '../navigation/BackButton'

const FForm = Flex.withComponent(Form)

export const CreateCampaign = () => {
  const initialValues = { name: '' }
  const navigation = useNavigation()
  const onSubmit = async (values: { name: string }) => {
    await API.graphql(
      graphqlOperation(createCampaign, { input: { ...values, owner: 'test' } }),
    )
    navigation.navigate('/campaigns')
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <FForm flex={1}>
          <Page spacing={3}>
            <Flex alignItems="center">
              <BackButton href="/campaigns" />
              <H1>Create a campaign</H1>
            </Flex>
            <FormTextField name="name" label="Campaign name" />
            <Button loading={isSubmitting} type="submit">
              Let's delve!
            </Button>
          </Page>
        </FForm>
      )}
    </Formik>
  )
}

export default route({
  view: <CreateCampaign />,
})
