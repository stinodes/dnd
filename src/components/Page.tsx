import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Flex, Layout } from 'stinodes-ui'

export const Page = (
  props: { children: ReactNode } & ComponentPropsWithoutRef<typeof Layout>,
) => (
  <Flex flex={1} justifyContent="center">
    <Layout
      maxWidth={960}
      flex={1}
      width={1}
      px={{ sm: 3, lg: 4 }}
      pt={{ sm: 3, lg: 4 }}
      {...props}
    />
  </Flex>
)
