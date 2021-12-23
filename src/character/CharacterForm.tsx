import { Form, Formik } from 'formik'
import { useState } from 'react'
import { Button, Card, Col, Flex, H3, Layout, Row } from 'stinodes-ui'
import { CreateCharacterInput } from '../API'
import {
  FormTextAreaField,
  FormTextField,
  SubmitButton,
} from '../components/FormikFields'

export type FormValues = Omit<CreateCharacterInput, 'campaignID'>
type Props = {
  onSubmit: (values: FormValues) => any
  initialValues?: FormValues
}

export const CharacterForm = ({
  onSubmit,
  initialValues: initialValuesProp,
}: Props) => {
  const [showAdvanced, setShowAdvanced] = useState(false)

  const initialValues: FormValues = initialValuesProp || {
    name: '',
  }

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues || {}}>
      <Form>
        <Layout spacing={3}>
          <FormTextField label="Name" name="name" />
          <Row>
            <Col width={1 / 3}>
              <FormTextField size="small" label="Race" name="race" />
            </Col>
            <Col width={1 / 3}>
              <FormTextField size="small" label="Gender" name="gender" />
            </Col>
            <Col width={1 / 3}>
              <FormTextField size="small" label="Job" name="job" />
            </Col>
          </Row>
          <FormTextAreaField size="small" label="Notes" name="notes" />
          {showAdvanced && (
            <Card p={3} bg="lights.2" flexDirection="column">
              <Layout spacing={3}>
                <H3>Appearance</H3>
                <Row>
                  <Col width={1 / 3}>
                    <FormTextField
                      size="small"
                      label="Age"
                      name="appearance.age"
                    />
                  </Col>
                  <Col width={1 / 3}>
                    <FormTextField
                      size="small"
                      label="Height"
                      name="appearance.height"
                    />
                  </Col>
                  <Col width={1 / 3}>
                    <FormTextField
                      size="small"
                      label="Body type"
                      name="appearance.bodyType"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col width={1 / 3}>
                    <FormTextField
                      size="small"
                      label="Hairstyle"
                      name="appearance.hairStyle"
                    />
                  </Col>
                  <Col width={1 / 3}>
                    <FormTextField
                      size="small"
                      label="Haircolor"
                      name="appearance.hairColor"
                    />
                  </Col>
                </Row>
                <FormTextField
                  size="small"
                  label="Features"
                  name="appearance.features"
                />
                <H3>Characteristics</H3>
                <Row>
                  <Col width={1 / 3}>
                    <FormTextField
                      size="small"
                      label="Alignment"
                      name="appearance.alignment"
                    />
                  </Col>
                  <Col width={1 / 3}>
                    <FormTextField
                      size="small"
                      label="Personality"
                      name="appearance.personality"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col width={1 / 3}>
                    <FormTextField
                      size="small"
                      label="Flaws"
                      name="appearance.flaws"
                    />
                  </Col>
                  <Col width={1 / 3}>
                    <FormTextField
                      size="small"
                      label="Goals"
                      name="appearance.goals"
                    />
                  </Col>
                </Row>
                <FormTextAreaField
                  size="small"
                  label="Relationships"
                  name="appearance.relationships"
                />
              </Layout>
            </Card>
          )}
          <Button
            onClick={() => setShowAdvanced(b => !b)}
            size="small"
            bg="lights.0"
          >
            {showAdvanced ? 'Hide' : 'Show'} Advanced Options
          </Button>
          <Flex>
            <SubmitButton>Save</SubmitButton>
          </Flex>
        </Layout>
      </Form>
    </Formik>
  )
}
