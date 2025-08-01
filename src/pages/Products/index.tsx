import Navbar from '../../components/Navbar/navbar.tsx';
import { motion } from 'framer-motion';
import MenuCard from '../../components/MenuCard/menucard.tsx';
import Footer from '../../components/Footer/footer.tsx';
import './products.scss';

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

export default function ProductsPage() {
    return (
        <div className="page">
            <Navbar />
            <motion.div 
                className="page__content"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div 
                    className="page__header"
                    variants={itemVariants}
                >
                    <h1 className="page__title">
                        Meus <span className="page__title-accent">Produtos</span>
                    </h1>
                    <p className="page__subtitle">
                        Conheça os produtos que desenvolvi do zero, design e código.
                    </p>
                </motion.div>

                <motion.div 
                    className="page__grid"
                    variants={containerVariants}
                >
                    <MenuCard 
                        title="chatQL"
                        description="Espaço de trabalho para criar e organizar consultas em SQL com IA. Feito para PMs e Data Analysts."
                        link="https://www.chatql.space"
                        isExternalLink
                        image="chatql-screenshot.png"
                    />
                    <MenuCard 
                        title="Maromba AI"
                        description="Crie treinos personalizados, acompanhe seu progresso e mude sua relação com a academia com o MarombaAI. Inteligência Artificial para o seu treino."
                        link="https://www.marombaai.com"
                        isExternalLink
                        image="marombaai-screenshot.png"
                    />
                    <MenuCard 
                        title="dralorraine.com"
                        description="Website para divulgar serviços e produtos da Dra Lorraine, R1 de Dermato da UNICAMP e minha querida esposa"
                        link="https://www.dralorraine.com"
                        isExternalLink
                        image="dralorraine-screenshot.png"
                    />
                    <MenuCard 
                        title="TabTasks"
                        description="ToDo list to help you focus on what you should accomplish in each browser tab"
                        link="https://chromewebstore.google.com/detail/tab-tasks/eomncdpohliglfgmlbjhcphdlcaohnll"
                        isExternalLink
                        image="tabtasks-sreenshot.png"
                    />
                </motion.div>
            </motion.div>
            <Footer />
        </div>
    );
}
