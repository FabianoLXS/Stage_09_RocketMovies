import { FiPlus } from "react-icons/fi"
import { Container, Brand, Content, NewNote, HomeTitle } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Note } from "../../components/Note"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Header></Header>

      <Content>

      <HomeTitle>
        <h2>Meus Filmes</h2>

      <NewNote to="/new">
        <FiPlus />
        Adicionar filme
      </NewNote>

      </HomeTitle>

        <Section title="minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" },
              ],
            }}
          />
        </Section>
      </Content>
    </Container>
  )
}
