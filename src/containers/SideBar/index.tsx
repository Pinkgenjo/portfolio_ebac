import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/titulo"
import { Descricao, BotaoTema, SidebarContainer } from "./styles"

type Props = {
  trocaTema: () => void
}

const SideBar = (props: Props) => (
  <aside>
    <SidebarContainer>
    <Avatar/>
    <Titulo fontSize={20}>Emerson Ferreira</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>Emerson Ferreira</Paragrafo>
    <Descricao tipo="principal" fontSize={12}>Estudante de Programação</Descricao>
    <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
    </aside>
)

export default SideBar