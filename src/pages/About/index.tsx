import Intro from '../../components/Intro/intro.tsx'; 
import Footer from '../../components/Footer/footer.tsx';
import Navbar from '../../components/Navbar/navbar.tsx';
import { motion } from 'framer-motion';
import MenuCard from '../../components/MenuCard/menucard.tsx';
import './about.scss';

const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: -50, 
    },
    visible: {
      opacity: 1,
      y: 0,
    }
};

export default function About() {
    return (
        <div className="page">
            <Navbar />
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                transition={{ 
                    ease: "easeOut", 
                    type: "spring", 
                    stiffness: 80,   
                    delay: 0.2,      
                    duration: 2.5    
                }}  
                className="page__content"
            >
                <Intro />
                <div className="page__menu">
                    <div className="page__section-title">O que encontrar por aqui</div>
                    <div className="page__section-subtitle">Minha contribuições e como posso te ajudar</div>
                    <div className="page__cards">
                        <MenuCard 
                            title="Conteúdos"
                            description="Conteúdos originais produzidos por mim e uma curadoria de conteúdos que já me ajudaram"
                            link="/conteudos"
                            icon="content"
                        />
                        <MenuCard 
                            title="Produtos"
                            description="Vezes que coloquei a mão na massa para construir produtos digitais que resolvem alguma dor"
                            link="/produtos"
                            icon="products"
                        />
                        <MenuCard 
                            title="Construa Comigo"
                            description="Gostaria de ajuda de um Product Manager experiente, sem ter que contratar um Full Time?"
                            link="/construacomigo"
                            icon="build"
                        />
                        <MenuCard 
                            title="Agenda"
                            description="Horários disponíveis para um call comigo. Aceito somente após contato prévio"
                            link="/agenda"
                            icon="calendar"
                        />
                    </div>
                </div>
            </motion.div>
            <Footer />
        </div>
    );
}