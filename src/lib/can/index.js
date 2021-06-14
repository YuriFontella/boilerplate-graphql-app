import { useSession } from 'next-auth/client'

const rules = {
  admin: {
    rule: ['charts', 'cats']
  }
}

const check = (props) => {

  const [session] = useSession()

  if (!session)
    return false

  const permissions = rules[session.role]

  if (!permissions)
    return false

  else if (permissions.rule.includes(props.rule))
    return true

  return false
}

const Can = (props) => {
  return check(props) ? props.yes() : props.no()
}

Can.defaultProps = {
  yes: () => null,
  no: () => null
}

export default Can