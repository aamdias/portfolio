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
            duration: 0.5
        }
    }
};

export default function ContentPage() {
    return (
        <div className="page">
            <Navbar />
            <motion.div 
                className="page__content"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.section className="page__section" variants={containerVariants}>
                    <motion.div 
                        className="page__header"
                        variants={itemVariants}
                    >
                        <h1 className="page__title">
                            Meus <span className="page__title-accent">Conteúdos</span>
                        </h1>
                        <p className="page__subtitle">
                            Conteúdos sobre tecnologia, produto e empreendedorismo. Registro de alguns aprendizados no caminho.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="page__articles"
                        variants={containerVariants}
                    >
                        {articlesData.map((article: ArticleProps) => (
                            <motion.div key={article.slug} variants={itemVariants}>
                                <Article {...article} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                <motion.section className="page__section" variants={containerVariants}>
                    <motion.div 
                        className="page__header"
                        variants={itemVariants}
                    >
                        <h1 className="page__title">Curadoria</h1>
                        <p className="page__subtitle">
                            Textos, vídeos e livros que eu já consumi e recomendo
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants}>
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