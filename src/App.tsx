import Intro from './components/Intro/intro.tsx';
import Article from './components/Article/article.tsx';
import Footer from './components/Footer/footer.tsx';
import articlesData from './data/articles.json';

function App() {

  return (
    <>
      <Intro />
      <div className = "content-wrapper">
        <div className = "subtitle">Gosto de escrever sobre meus aprendizados. Dá uma olhada:</div>
        <div className =" articles">
          {articlesData.map((article) => (
            <Article key={article.title} {...article} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
