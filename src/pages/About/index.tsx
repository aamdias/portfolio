import Intro from '../../components/Intro/intro.tsx'; 
import Article from '../../components/Article/article.tsx';
import Footer from '../../components/Footer/footer.tsx';
import articlesData from '../../data/articles.json';
import Navbar from '../../components/Navbar/navbar.tsx';

type ArticleProps = {
    title: string;
    description: string;
    publishedDate: string;
    externalLink: string;
    thumbnail: string;
};

export default function About () {
    return(
        <>
            <Navbar />
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
        </>
    );
}