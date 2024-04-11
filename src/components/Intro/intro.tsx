import profilePic from '/new-profile-pic.png';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { useEffect,useState } from 'react';
import { Blurhash } from 'react-blurhash';

import './intro.scss';

function Intro() {

    const [isImageLoaded,setImageLoaded] = useState(false);

    useEffect(()=>{
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        }
        img.src = profilePic;
    },[profilePic])

    const [isScreenWidthLarge, setIsScreenWidthLarge] = useState(window.innerWidth > 540);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenWidthLarge(window.innerWidth > 540);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div className ="intro">
            <div className="profile-pic-container" style={{display: isImageLoaded ? 'none': 'inline'}}>
                <Blurhash 
                        hash="Lj9S-,uhPWo_tTjXRkafNHj]xCW="
                        width={isScreenWidthLarge? 148: 120}
                        height={isScreenWidthLarge? 148: 120}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                />
            </div>
            <div className="profile-pic-container" style={{display:isImageLoaded?'inline':'none'}}>
                <img src={profilePic} alt="Profile of Alan Dias" loading="lazy" className="profile-pic"></img>
            </div>
            <h1 className="name_title">Alan Dias</h1>
            <h2 className="subtitle">Entusiasta de empreendedorismo, tecnologia e eeducação. Adoro construir produtos digitais que fazem a diferença</h2>
            <div className="social-logos">
                <a href="https://www.linkedin.com/in/alan-dias-7b7a0913a/" target="_blank">
                    <BsLinkedin className="social-logo"/>
                </a>
                <a href="https://github.com/aamdias/" target="_blank">
                    <BsGithub className="social-logo"/>
                </a>
            </div>
            <div className="paper">
            Oi! 👋 Me chamo <span className="highlight">Alan</span>, sou natural de Fortaleza, CE, Brasil e atuo profissionalmente como <span className="highlight">Product Manager</span> redesenhando a forma como usamos tecnologia para integir com informação jurídica na <a href="https://www.jusbrasil.com.br" target="_blank" className="text-link">Jusbrasil</a><br/><br/>

Sou <span className="highlight">formado no ITA</span>, e profissionalmente tenho mais de <span className="highlight">5 anos de experiência</span> construindo Produtos Digitais em Start Ups em que a tecnologia é alavanca para resultados <br/><br/>

Pessoalmente, atualmente moro em Campinas, SP, e quando não estou construindo produtos digitais, provavelmente estou com pessoas queridas, tocando música 🎶, fazendo esportes como tênis 🎾 e corrida 👟, estudando 📚 ou viajando 🛬 <br/><br/>

<span className="highlight"> Boas-vindas ao meu espaço na internet!</span>
            </div>
        </div>
    );
}

export default Intro;
