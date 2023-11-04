import Navbar from '../../components/Navbar/navbar.tsx';
import { motion } from 'framer-motion';
import Article from '../../components/Article/article.tsx';
import articlesData from '../../data/articles.json';
import Footer from '../../components/Footer/footer.tsx';
import MenuCard from '../../components/MenuCard/menucard.tsx';

type ArticleProps = {
    title: string;
    description: string;
    publishedDate: string;
    externalLink: string;
    slug: string;
    thumbnail: string;
};

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

export default function ContentPage () {

    return(
        <div className="content-page">
            <Navbar />
            <motion.div 
                className = "content-page__content"
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
                >
                <div className = "content-wrapper">
                    <div className = "title">Artigos</div>
                    <div className = "subtitle">Textos originais sobre meus aprendizados</div>
                    <div className =" articles">
                        {articlesData.map((article:ArticleProps) => (
                        <Article key={article.title} {...article} />
                        ))}
                    </div>
                </div>
                <div className = "content-wrapper">
                    <div className = "title">Curadoria</div>
                    <div className = "subtitle">Textos, vídeos e livros que eu já consumi e recomendo</div>
                    <MenuCard 
                        title="Bookmarks"
                        description="Minha lista de conteúdos que recomendo, separados por diferentes áreas do conhecimento"
                        link="/bookmarks"
                    />
                </div>
                <Footer />
            </motion.div>
        </div>
    );
}