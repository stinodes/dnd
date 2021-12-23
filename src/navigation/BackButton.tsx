import { useNavigation } from 'react-navi'
import { Button, Icon } from 'stinodes-ui'
import { ButtonLink } from '../components/ButtonLink'

export const BackButton = ({ href }: { href?: string }) => {
  const navigation = useNavigation()

  const buttonProps = { size: 'circle' as 'circle', bg: 'lights.4' }
  const icon = <Icon icon="arrow-left" color="primary" fontSize={20} />

  if (href)
    return (
      <ButtonLink {...buttonProps} href={href}>
        {icon}
      </ButtonLink>
    )

  return (
    <Button {...buttonProps} onClick={navigation.goBack}>
      {icon}
    </Button>
  )
}
