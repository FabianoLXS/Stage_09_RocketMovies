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