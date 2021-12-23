import { Form, Formik } from 'formik'
import { Flex, Layout } from 'stinodes-ui'
import { CreateLocationInput } from '../API'
import {
  FormTextAreaField,
  FormTextField,
  SubmitButton,
} from '../components/FormikFields'

export type FormValues = Omit<CreateLocationInput, 'campaignID'>
type Props = {
  onSubmit: (values: FormValues) => any
  initialValues?: FormValues
}

export const LocationForm = ({
  onSubmit,
  initialValues: initialValuesProp,
}: Props) => {
  const initialValues: FormValues = initialValuesProp || {
    name: '',
  }

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues || {}}>
      <Form>
        <Layout spacing={3}>
          <FormTextField label="Name" name="name" />
          <FormTextAreaField label="Notes" name="notes" />
          <Flex>
            <SubmitButton>Save</SubmitButton>
          </Flex>
        </Layout>
      </Form>
    </Formik>
  )
}
