import { useField } from 'formik'
import { ReactNode } from 'react'
import { FieldProps, InputProps, TextField } from 'stinodes-ui'

type Props = FieldProps & InputProps & { children: ReactNode }

export const FormTextField = (props: Props) => {
  const [field, meta] = useField(props.name)

  return (
    <TextField
      {...field}
      {...props}
      error={(meta.touched && meta.error) || props.error}
    />
  )
}
