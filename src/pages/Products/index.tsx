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
                            title="dralorraine.com"
                            description="Site da dermatologista Lorraine Souza: consulta em Campinas e videoconsulta, tratamentos e conteúdo para médicos."
                            link="https://www.dralorraine.com"
                            isExternalLink
                            image="dralorraine-screenshot.png"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <MenuCard
                            title="Convoca"
                            description="Todos os concursos públicos do Brasil em um só lugar, com busca e filtros por órgão, cargo, estado e banca."
                            link="https://useconvoca.com.br"
                            isExternalLink
                            image="convoca-screenshot.png"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <MenuCard
                            title="Lume"
                            description="Fotografe o rótulo e entenda a garrafa: o vinho conferido em fontes reais e explicado em português simples."
                            link="https://lumewines.app"
                            isExternalLink
                            image="lume-screenshot.png"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
            <Footer />
        </div>
    );
}
