import profilePic from '/new-profile-pic.png';
import linkedinLogo from '/linkedin-icon.svg';
import githubLogo from '/github-icon.svg';

import './intro.scss';

function Intro() {
    return(
        <div className ="intro">
            <img src={profilePic} alt="Profile of Alan Dias" className="profile-pic"></img>
            <h1 className="name">Alan Dias</h1>
            <h2 className="subtitle">Entusiasta de empreendedorismo, educação e tecnologia. Adoro construir produtos digitais que fazem a diferença</h2>
            <div className="social-logos">
                <a href="https://www.linkedin.com/in/alan-dias-7b7a0913a/" target="_blank">
                    <img src={linkedinLogo} className="social-logo"></img>
                </a>
                <a href="https://github.com/aamdias/" target="_blank">
                <img src={githubLogo} className="social-logo"></img>
                </a>
            </div>
            <div className="paper">
            Oi! 👋 Me chamo <span className="highlight">Alan</span>, sou natural de Fortaleza, CE, Brasil e atuo profissionalmente como <span className="highlight">Product Manager</span> construindo o futuro da educação de tecnologia na <a href="https://www.betrybe.com" target="_blank" className="text-link">Trybe</a><br/><br/>

Sou <span className="highlight">formado no ITA</span>, e profissionalmente tenho mais de <span className="highlight">5 anos de experiência</span> construindo start ups em que a tecnologia é alavanca para resultados <br/><br/>

Tenho experiência com todo o fluxo de construção de produtos digitais: Desde a descoberta, ideação e priorização até a execução e validação de experiências digitais de qualidade e que geram impacto no negócio <br/><br/>

Pessoalmente, atualmente moro em Campinas, SP, e quando não estou construindo produtos digitais, provavelmente estou com pessoas queridas, tocando música 🎶, fazendo esportes como tênis 🎾 e corrida 👟, estudando 📚 ou viajando 🛬 <br/><br/>

<span className="highlight"> Boas-vindas ao meu espaço na internet!</span>
            </div>
        </div>
    );
}

export default Intro;