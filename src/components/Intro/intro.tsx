import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './intro.scss';

function Intro() {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    const slideUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 40,
                damping: 20,
                duration: 0.8
            }
        }
    };

    return (
        <main className="intro">
            <section className="intro__hero">
                <div className="intro__container">
                    <motion.div
                        className="intro__content"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <motion.div className="intro__header" variants={slideUp}>
                            <span className="intro__greeting">Oi! Me chamo</span>
                            <h1 className="intro__name">Alan Dias</h1>
                            <p className="intro__tagline">
                                Construindo produtos digitais que fazem a diferença.
                            </p>
                        </motion.div>

                        <motion.p className="intro__description" variants={slideUp}>
                            Entusiasta de empreendedorismo, tecnologia e educação. Atualmente construindo a Vetto AI.
                        </motion.p>

                        <motion.div className="intro__actions" variants={slideUp}>
                            <Link to="/conteudos" className="intro__button intro__button--primary">
                                Ver Conteúdos
                            </Link>
                            <Link to="/produtos" className="intro__button intro__button--secondary">
                                Meus Produtos
                            </Link>
                        </motion.div>

                        <motion.div className="intro__links" variants={slideUp}>
                            <a
                                href="https://github.com/aamdias"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="intro__link"
                            >
                                GitHub
                            </a>
                            <span className="intro__link-divider">·</span>
                            <a
                                href="https://www.linkedin.com/in/alan-dias-7b7a0913a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="intro__link"
                            >
                                LinkedIn
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="intro__visual"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <div className="intro__image-container">
                            <img
                                src="/alan-nyc-1.png"
                                alt="Alan Dias"
                                className="intro__image"
                                loading="eager"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default Intro;
