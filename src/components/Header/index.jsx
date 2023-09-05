import {RiShutDownLine} from 'react-icons/ri'
import {Container, Profile, Logout} from './styles'

export function Header(){
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/fabianolxs.png" alt="" />
        <div>
          <span>Bem-vindo</span>
          <strong>Fabiano Xavier</strong>
          </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}