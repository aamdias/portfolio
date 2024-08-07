import Navbar from '../../components/Navbar/navbar.tsx';
import { motion } from 'framer-motion';
import MenuCard from '../../components/MenuCard/menucard.tsx';
import Footer from '../../components/Footer/footer.tsx';

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

export default function ProductsPage () {
    return(
        <div className="products-page">
            <Navbar />
            <motion.div 
                className = "products-page__content"
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
                    <div className = "title">Produtos</div>
                    <div className = "subtitle">Soluções prontas, feitas do zero, por mim</div>
                    <MenuCard 
                        title="Maromba AI"
                        description="Nunca mais fique parado na academia. Criador de exercícios para academia com IA"
                        link="https://www.marombaai.com"
                    />
                    <MenuCard 
                        title="dralorraine.com"
                        description="Website para divulgar serviços e produtos da Dra Lorraine, R1 de Dermato da UNICAMP e minha querida esposa"
                        link="https://www.dralorraine.com"
                    />
                    <MenuCard 
                        title="Jamflow"
                        description="App to help musicians choose what to play next and engage with their audience"
                        link="https://www.jamflow.io"
                    />
                    <MenuCard 
                        title="TabTasks"
                        description="ToDo list to help you focus on what you should accomplish in each browser tab"
                        link="https://chromewebstore.google.com/detail/tab-tasks/eomncdpohliglfgmlbjhcphdlcaohnll"
                    />
                </div>
                <Footer />
            </motion.div>
        </div>
    );
}
