import styled from '@emotion/styled'
import { Link as _Link } from 'react-navi'
import { Text } from 'stinodes-ui'

export const Link = styled(Text.withComponent(_Link))`
  text-decoration: none;
`
Link.defaultProps = { color: 'primary' }
