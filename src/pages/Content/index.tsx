import Navbar from '../../components/Navbar/navbar.tsx';
import { motion } from 'framer-motion';
import Article from '../../components/Article/article.tsx';
import articlesData from '../../data/articles.json';
import Footer from '../../components/Footer/footer.tsx';
import MenuCard from '../../components/MenuCard/menucard.tsx';
import './content.scss';

type ArticleProps = {
    title: string;
    description: string;
    publishedDate: string;
    externalLink: string;
    slug: string;
    thumbnail: string;
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
};

export default function ContentPage() {
    return (
        <div className="content-page">
            <Navbar />
            <motion.div
                className="content-page__content"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.section className="content-page__section" variants={containerVariants}>
                    <motion.div
                        className="content-page__header"
                        variants={itemVariants}
                    >
                        <h1 className="content-page__title">Conteúdos</h1>
                        <p className="content-page__subtitle">
                            Conteúdos sobre tecnologia, produto e empreendedorismo. Registro de alguns aprendizados no caminho.
                        </p>
                    </motion.div>

                    <motion.div
                        className="content-page__grid"
                        variants={containerVariants}
                    >
                        {articlesData.map((article: ArticleProps) => (
                            <motion.div key={article.slug} variants={itemVariants}>
                                <Article {...article} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                <motion.section className="content-page__section" variants={containerVariants}>
                    <motion.div
                        className="content-page__header"
                        variants={itemVariants}
                    >
                        <h2 className="content-page__section-title">Curadoria</h2>
                        <p className="content-page__subtitle">
                            Textos, vídeos e livros que eu já consumi e recomendo
                        </p>
                    </motion.div>

                    <motion.div className="content-page__single-card" variants={itemVariants}>
                        <MenuCard
                            title="Bookmarks"
                            description="Minha lista de conteúdos que recomendo, separados por diferentes áreas do conhecimento"
                            link="/bookmarks"
                        />
                    </motion.div>
                </motion.section>
            </motion.div>
            <Footer />
        </div>
    );
}
