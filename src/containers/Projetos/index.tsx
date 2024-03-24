import Projeto from "../../components/Projeto";
import Titulo from "../../components/Titulo";

import {Lista} from './styles'

const projetos = [

    {
        titulo: 'Ebac Sports',
        paragrafo: 'React e Redux',
        linkgithub: 'https://github.com/anameneiro/ebac_sports',
        linkhospedagem: 'https://ebac-sports-six.vercel.app/'
    },
    {
        titulo: 'Inova Soluções Industriais',
        paragrafo: ' Html, CSS e JavaScript',
        linkgithub: 'https://github.com/anameneiro/inova',
        linkhospedagem: 'https://inova-sigma.vercel.app/',
    },
    {
        titulo: 'Origem & Essência',
        paragrafo:'Html, CSS e JavaScript',
        linkgithub: 'https://github.com/anameneiro/origemEessencia',
        linkhospedagem: 'https://origemeessencia.vercel.app/',
    },
    {
        titulo: 'Calculadora de IMC',
        paragrafo: 'React',
        linkgithub: 'https://github.com/anameneiro/calculadora-imc',
        linkhospedagem: 'https://calculadoraimc-sigma.vercel.app/'
    },
    {
        titulo: 'SugarCake',
        paragrafo: 'Html, CSS e JavaScript',
        linkgithub: 'https://github.com/anameneiro/sugarcake',
        linkhospedagem: 'https://sugarcake.vercel.app/'
    },
    {
        titulo: 'Clone Disney+',
        paragrafo: 'Html, SASS, Gulp, JavaScript e metodologia BEM',
        linkgithub: 'https://github.com/anameneiro/clone_disneyplus',
        linkhospedagem: 'https://aninhaclonedisneyplus.vercel.app/'
    },
    {
        titulo: 'Ebac tech talks',
        paragrafo: 'Html, SASS, parcel, JavaScript',
        linkgithub: 'https://github.com/anameneiro/ebac_tech_talks',
        linkhospedagem: 'https://ebac-tech-talks-nanedaz.vercel.app/'
    },
    {
        titulo: 'Guardiões da galáxia',
        paragrafo: 'HTML, SASS, Gulp e JavaScript',
        linkgithub: 'https://github.com/anameneiro/guardioesdagalaxia',
        linkhospedagem: 'https://guardioesdagalaxia.vercel.app/'
    },
    {
        titulo: 'Sorteador',
        paragrafo: 'HTML, SASS, Grunt e JavaScript',
        linkgithub: 'https://github.com/anameneiro/sorteadorgrunt',
        linkhospedagem: 'https://sorteadorgrunt-mu.vercel.app/'
    }
]

const Projetos = () => (
    <section>
        < Titulo fontSize={16}>Projetos</Titulo>
        <Lista>
                {projetos.map((t) => (
                    <li key={t.titulo}>
                        <Projeto
                            titulo={t.titulo}
                            paragrafo={t.paragrafo}
                            linkgithub={t.linkgithub}
                            linkhospedagem={t.linkhospedagem}
                        />
                    </li>
                ))}
            
        </Lista>
    </section>
)

export default Projetos