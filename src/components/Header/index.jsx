import {RiShutDownLine} from 'react-icons/ri'
import {Container, Profile, Logout, Search, Brand} from './styles'
import { Input } from "../../components/Input"

export function Header(){
  return (
    <Container>
      <Brand><h1>RocketMovies</h1></Brand>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Profile to="/profile">
        <div>
          <strong>Fabiano Xavier</strong>
          <Logout>
          <span>sair</span>
          </Logout>
        </div>
        <img src="https://github.com/fabianolxs.png" alt="" />
      </Profile>

    </Container>
  )
}