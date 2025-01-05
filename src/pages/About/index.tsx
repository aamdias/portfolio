import Intro from '../../components/Intro/intro.tsx'; 
import Footer from '../../components/Footer/footer.tsx';
import Navbar from '../../components/Navbar/navbar.tsx';
import { motion } from 'framer-motion';
import MenuCard from '../../components/MenuCard/menucard.tsx';
import FeaturedGrid from '../../components/FeaturedGrid/featuredgrid.tsx';
import { Link } from 'react-router-dom';
import articles from '../../data/articles.json';
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
    const latestArticles = articles.slice(0, 2);

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
                <div className="page__bio-section">
                    <h2 className="page__bio-title">Sobre mim</h2>
                    <div className="page__bio-subtitle">Um pouco da minha história</div>
                    <div className="page__bio-content">
                        <p>
                            Oi! 👋 Me chamo <span className="highlight">Alan</span>, sou natural de Fortaleza, CE, Brasil e atuo profissionalmente como <span className="highlight">Product Manager</span> redesenhando a forma como advogados interagem com informação jurídica no <a href="https://www.jusbrasil.com.br" target="_blank" rel="noopener noreferrer" className="text-link">Jusbrasil</a>
                        </p>
                        <p>
                            Sou <span className="highlight">formado no ITA</span>, e profissionalmente tenho mais de <span className="highlight">5 anos de experiência</span> construindo Produtos Digitais em Start Ups em que a tecnologia é alavanca para resultados
                        </p>
                        <p>
                            Pessoalmente, atualmente moro em Campinas, SP, e quando não estou construindo produtos digitais, provavelmente estou com pessoas queridas, tocando música 🎶, fazendo esportes como tênis 🎾 e corrida 👟, estudando 📚 ou viajando 🛬
                        </p>
                        <p>
                            <span className="highlight">Boas-vindas ao meu espaço na internet!</span>
                        </p>
                    </div>
                </div>

                <div className="page__featured-section">
                    <h2 className="page__featured-title">Conteúdos em Destaque</h2>
                    <div className="page__featured-subtitle">
                        Curadoria de conteúdos e artigos que escrevo sobre produtos digitais
                    </div>
                    <FeaturedGrid>
                        <Link to="/bookmarks" className="page__bookmarks-card" style={{ flex: "0 0 100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div>
                                <h3>Bookmarks</h3>
                                <p>Uma curadoria dos melhores conteúdos que já consumi sobre produtos digitais, negócios e tecnologia</p>
                            </div>
                            <div className="page__featured-cta" style={{ color: "#6B7280", justifyContent: "flex-start" }}>
                                <span>Ver mais →</span>
                            </div>
                        </Link>
                        {latestArticles.map((article) => (
                            <MenuCard 
                                key={article.slug}
                                title={article.title}
                                description={article.description}
                                link={`/artigos/${article.slug}`}
                            />
                        ))}
                    </FeaturedGrid>
                    <div className="page__featured-cta">
                        <Link to="/conteudos">Ver todos os conteúdos</Link>
                    </div>
                </div>

                <div className="page__featured-section">
                    <h2 className="page__featured-title">Produtos em Destaque</h2>
                    <div className="page__featured-subtitle">
                        Produtos digitais que desenvolvi do zero, do design ao código
                    </div>
                    <FeaturedGrid>
                        <MenuCard 
                            title="Maromba AI"
                            description="Crie treinos personalizados, acompanhe seu progresso e mude sua relação com a academia com o MarombaAI. Inteligência Artificial para o seu treino."
                            link="https://www.marombaai.com"
                            isExternalLink
                            image="maromba-ai-screenshot.png"
                        />
                        <MenuCard 
                            title="dralorraine.com"
                            description="Website para divulgar serviços e produtos da Dra Lorraine, R1 de Dermato da UNICAMP e minha querida esposa"
                            link="https://www.dralorraine.com"
                            isExternalLink
                            image="dralorraine-screenshot.png"
                        />
                    </FeaturedGrid>
                    <div className="page__featured-cta">
                        <Link to="/produtos">Ver todos os produtos</Link>
                    </div>
                </div>

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