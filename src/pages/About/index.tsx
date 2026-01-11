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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
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
                    duration: 0.6
                }}
                className="page__content"
            >
                <Intro />

                {/* About Section */}
                <section className="section">
                    <div className="section__header">
                        <h2 className="section__title">Sobre mim</h2>
                    </div>
                    <div className="section__bio">
                        <p>
                            Me chamo <strong>Alan</strong>, sou natural de Fortaleza, CE, Brasil e atuo profissionalmente construindo a <strong>Vetto AI</strong>, onde conectamos pessoas talentosas de países emergentes com projetos de AI globais.
                        </p>
                        <p>
                            Sou <strong>formado no ITA</strong>, e profissionalmente tenho mais de <strong>5 anos de experiência</strong> construindo Produtos Digitais em Start Ups em que a tecnologia é alavanca para resultados.
                        </p>
                        <p>
                            Pessoalmente, atualmente moro em Campinas, SP. Quando não estou construindo produtos digitais, provavelmente estou com pessoas queridas, tocando música, praticando tênis ou corrida, estudando ou viajando.
                        </p>
                        <p>
                            <strong>Boas-vindas ao meu espaço na internet!</strong>
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <motion.section
                    className="section"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="section__header">
                        <h2 className="section__title">Conteúdos</h2>
                    </div>
                    <FeaturedGrid>
                        <Link to="/bookmarks" className="featured-card">
                            <div className="featured-card__content">
                                <h3 className="featured-card__title">Bookmarks</h3>
                                <p className="featured-card__description">
                                    Uma curadoria dos melhores conteúdos sobre produtos digitais, negócios e tecnologia
                                </p>
                            </div>
                            <span className="featured-card__link">Ver curadoria</span>
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
                    <div className="section__cta">
                        <Link to="/conteudos" className="section__cta-link">
                            Ver todos os conteúdos
                        </Link>
                    </div>
                </motion.section>

                {/* Products Section */}
                <motion.section
                    className="section"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="section__header">
                        <h2 className="section__title">Produtos</h2>
                    </div>
                    <FeaturedGrid>
                        <MenuCard
                            title="Maromba AI"
                            description="Crie treinos personalizados e acompanhe seu progresso com inteligência artificial"
                            link="https://www.marombaai.com"
                            isExternalLink
                            image="marombaai-screenshot.png"
                        />
                        <MenuCard
                            title="dralorraine.com"
                            description="Website para divulgar serviços e produtos da Dra Lorraine"
                            link="https://www.dralorraine.com"
                            isExternalLink
                            image="dralorraine-screenshot.png"
                        />
                        <MenuCard
                            title="chatQL"
                            description="Espaço de trabalho para criar e organizar consultas em SQL com IA"
                            link="https://www.chatql.space"
                            isExternalLink
                            image="chatql-screenshot.png"
                        />
                    </FeaturedGrid>
                    <div className="section__cta">
                        <Link to="/produtos" className="section__cta-link">
                            Ver todos os produtos
                        </Link>
                    </div>
                </motion.section>

                {/* Work With Me Section */}
                <motion.section
                    className="section section--highlight"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="section__header">
                        <h2 className="section__title">Trabalhe comigo</h2>
                    </div>
                    <div className="section__grid">
                        <MenuCard
                            title="Serviços"
                            description="Gostaria de ajuda de um Product Manager experiente?"
                            link="/construacomigo"
                        />
                        <MenuCard
                            title="Agenda"
                            description="Horários disponíveis para um call comigo"
                            link="/agenda"
                        />
                    </div>
                </motion.section>
            </motion.div>
            <Footer />
        </div>
    );
}
