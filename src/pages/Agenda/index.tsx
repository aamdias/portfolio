import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/navbar.tsx';
import Footer from '../../components/Footer/footer.tsx';
import './agenda.scss';

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

export default function Agenda() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="agenda-page">
            <Navbar />
            <motion.div
                className="agenda-page__content"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.section className="agenda-page__section" variants={containerVariants}>
                    <motion.div
                        className="agenda-page__header"
                        variants={itemVariants}
                    >
                        <h1 className="agenda-page__title">Agenda</h1>
                        <p className="agenda-page__subtitle">
                            Horários disponíveis para uma conversa. Aceito somente após contato prévio.
                        </p>
                    </motion.div>

                    <motion.div className="agenda-page__calendly" variants={itemVariants}>
                        <div
                            className="calendly-inline-widget"
                            data-url="https://calendly.com/alan-dias-trybe/1-1?hide_event_type_details=1&hide_gdpr_banner=1&text_color=525252&primary_color=111111"
                        />
                    </motion.div>
                </motion.section>
            </motion.div>
            <Footer />
        </div>
    );
}
