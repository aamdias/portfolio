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
            duration: 0.4
        }
    }
};

export default function ProductsPage() {
    return (
        <div className="products-page">
            <Navbar />
            <motion.div
                className="products-page__content"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div
                    className="products-page__header"
                    variants={itemVariants}
                >
                    <h1 className="products-page__title">Produtos</h1>
                    <p className="products-page__subtitle">
                        Conheça os produtos que desenvolvi do zero, design e código.
                    </p>
                </motion.div>

                <motion.div
                    className="products-page__grid"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <MenuCard
                            title="Maromba AI"
                            description="Crie treinos personalizados e acompanhe seu progresso com inteligência artificial."
                            link="https://www.marombaai.com"
                            isExternalLink
                            image="marombaai-screenshot.png"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <MenuCard
                            title="dralorraine.com"
                            description="Website para divulgar serviços e produtos da Dra Lorraine."
                            link="https://www.dralorraine.com"
                            isExternalLink
                            image="dralorraine-screenshot.png"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <MenuCard
                            title="chatQL"
                            description="Espaço de trabalho para criar e organizar consultas em SQL com IA. Feito para PMs e Data Analysts."
                            link="https://www.chatql.space"
                            isExternalLink
                            image="chatql-screenshot.png"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
            <Footer />
        </div>
    );
}
