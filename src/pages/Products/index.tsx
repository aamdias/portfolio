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
                        title="aamdias.com"
                        description="Esse site que você está navegando teve design e código feito do zero por mim, fique à vontade de usar ele como inspiração"
                        link="https://github.com/aamdias/portfolio"
                    />
                </div>
                <Footer />
            </motion.div>
        </div>
    );
}