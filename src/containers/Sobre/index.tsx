import Titulo from "../../components/titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"


const Sobre = () => (
  <section>
  <Titulo fontSize={16}>Sobre mim</Titulo>
  <Paragrafo tipo='secundario'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sint doloribus laudantium adipisci facilis cumque incidunt sed aliquid, at assumenda velit omnis aut minus ipsum suscipit, ex veritatis? Facere, ut?
  </Paragrafo>
  <GithubSecao>
  <img src="https://github-readme-stats.vercel.app/api?username=PinkGenjo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" alt="GitHub stats for PinkGenjo"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=PinkGenjo&layout=compact&langs_count=7&theme=dracula" alt="Top languages used by PinkGenjo"/>
  </GithubSecao>
</section>
)

export default Sobre