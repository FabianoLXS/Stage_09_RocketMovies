import {RiShutDownLine} from 'react-icons/ri'
import {Container, Profile, Logout, Search} from './styles'
import { Input } from "../../components/Input"

export function Header(){
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/fabianolxs.png" alt="" />
        <div>
          <span>Bem-vindo</span>
          <strong>Fabiano Xavier</strong>
        </div>
      </Profile>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}