
import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
    <section>
        <Titulo fontSize={16}> Sobre Mim </Titulo>
        <Paragrafo tipo="secundario">
            Olá! Sou uma entusiasta da tecnologia e uma recém-chegada ao mundo do desenvolvimento front-end.
            Com um forte interesse em HTML, CSS e JavaScript, estou sempre explorando novas tecnologias e 
            padrões de design para desenvolver sites elegantes e funcionais. Além do código, sou entusiasta de UX/UI.
        </Paragrafo>
        <GithubSecao>
        <img src="https://github-readme-streak-stats.herokuapp.com?user=anameneiro&theme=radical&mode=weekly" alt="github"/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=anameneiro&layout=compact&langs_count=7&theme=dracula" alt="github"/>
        </GithubSecao>
    </section>
)

export default Sobre