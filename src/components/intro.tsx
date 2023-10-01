import profilePic from '/profile-pic.svg';
import linkedinLogo from '/linkedin-icon.svg';
import githubLogo from '/github-icon.svg';

import './intro.css';

function Intro() {
    return(
        <div className ="intro">
            <img src={profilePic} className="profile-pic"></img>
            <h1 className="name">Alan Dias</h1>
            <h2 className="subtitle">Eu adoro construir produtos digitais de impacto</h2>
            <div className="social-logos">
                <img src={linkedinLogo} className="social-logo"></img>
                <img src={githubLogo} className="social-logo"></img>
            </div>
            <div className="paper">
            Oi! 👋 Me chamo Alan, sou natural de Fortaleza, CE, Brasil e atuo profissionalmente como Product Manager construindo o futuro da educação de tecnologia na betrybe.com.<br/><br/>

Sou formado no ITA, e profissionalmente tenho mais de 5 anos de experiência construindo start ups em que a tecnologia é alavanca para resultados. <br/><br/>

Tenho experiência com todo o fluxo de construção de produtos digitais: Desde a descoberta, ideação e priorização até a execução e validação de experiências digitais de qualidade e que geram impacto no negócio.
            </div>
        </div>
    );
}

export default Intro;