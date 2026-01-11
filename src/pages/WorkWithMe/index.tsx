import servicesData from '../../data/services.json';
import Footer from '../../components/Footer/footer.tsx';
import Navbar from '../../components/Navbar/navbar.tsx';
import Service from '../../components/Service/service.tsx';
import { FaCopy } from 'react-icons/fa';
import { useState } from 'react';
import copy from 'clipboard-copy';
import { motion } from 'framer-motion';
import './workwithme.scss';

type ServiceProps = {
    title: string;
    description: string;
    availableSlots: string;
    price: string;
    externalLink: string;
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
            duration: 0.4
        }
    }
};

export default function WorkWithMe() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        copy('adias7882@gmail.com')
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            });
    };

    return (
        <div className="workwithme-page">
            <Navbar />
            <motion.div
                className="workwithme-page__content"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.section className="workwithme-page__section" variants={containerVariants}>
                    <motion.div
                        className="workwithme-page__header"
                        variants={itemVariants}
                    >
                        <h1 className="workwithme-page__title">Trabalhe comigo</h1>
                        <p className="workwithme-page__subtitle">
                            Gostaria de ajuda de um Product Manager experiente, sem ter que contratar um full-time?
                        </p>
                    </motion.div>

                    <motion.div
                        className="workwithme-page__services"
                        variants={containerVariants}
                    >
                        {servicesData.map((service: ServiceProps) => (
                            <motion.div key={service.title} variants={itemVariants}>
                                <Service {...service} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                <motion.section className="workwithme-page__section" variants={containerVariants}>
                    <motion.div
                        className="workwithme-page__header"
                        variants={itemVariants}
                    >
                        <h2 className="workwithme-page__section-title">Outra forma de contato</h2>
                        <p className="workwithme-page__subtitle">
                            Gostaria de minha ajuda de outra forma? Entre em contato por email
                        </p>
                    </motion.div>

                    <motion.div className="workwithme-page__contact" variants={itemVariants}>
                        <div className="workwithme-page__email-box">
                            <span className="workwithme-page__email">adias7882@gmail.com</span>
                            <button
                                onClick={handleCopy}
                                className="workwithme-page__copy-button"
                                aria-label="Copiar email"
                            >
                                <FaCopy />
                                {isCopied && <span className="workwithme-page__copied">Copiado!</span>}
                            </button>
                        </div>
                    </motion.div>
                </motion.section>
            </motion.div>
            <Footer />
        </div>
    );
}
