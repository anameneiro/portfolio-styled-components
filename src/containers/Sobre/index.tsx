
import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
    <section>
        <Titulo fontSize={16}> Sobre Mim </Titulo>
        <Paragrafo tipo="secundario">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, cum quidem debitis expedita beatae architecto obcaecati totam maiores, suscipit deleniti pariatur animi unde voluptas provident? Eum debitis sunt beatae sint.</Paragrafo>
        <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=anameneiro&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" alt="github"/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=anameneiro&layout=compact&langs_count=7&theme=dracula" alt="github"/>
        </GithubSecao>
    </section>
)

export default Sobre