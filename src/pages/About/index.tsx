import Intro from '../../components/Intro/intro.tsx'; 
import Article from '../../components/Article/article.tsx';
import Footer from '../../components/Footer/footer.tsx';
import articlesData from '../../data/articles.json';
import Navbar from '../../components/Navbar/navbar.tsx';
import { motion } from 'framer-motion';

type ArticleProps = {
    title: string;
    description: string;
    publishedDate: string;
    externalLink: string;
    thumbnail: string;
};

const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: -10, // Optional: Adding a slight move upwards
    },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

export default function About () {
    return(
        <div className= "aboutcontainer">
            <Navbar />
            <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ 
                ease: "linear",
                type: "spring", 
                stiffness: 100,
                duration: 1 }}  
            className="about"
            >
            <Intro />
            <div className = "content-wrapper">
                <div className = "title">Artigos</div>
                <div className = "subtitle">Gosto de escrever sobre meus aprendizados. Dá uma olhada:</div>
                <div className =" articles">
                    {articlesData.map((article:ArticleProps) => (
                    <Article key={article.title} {...article} />
                    ))}
                </div>
            </div>
            <Footer />
            </motion.div>
        </div>
    );
}