import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiBookOpen, FiBox } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './intro.scss';

function Intro() {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.4 }
        }
    };

    const slideUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 15,
                duration: 0.6
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
                        <motion.div
                            className="intro__header"
                            variants={slideUp}
                        >
                            <h1 className="intro__title">
                                Oi! Me chamo <span className="intro__accent">Alan Dias</span>
                            </h1>
                            <p className="intro__description">
                            Entusiasta de empreendedorismo, tecnologia e educação. Adoro construir produtos digitais que fazem a diferença.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="intro__actions"
                            variants={slideUp}
                        >
                            <div className="intro__buttons">
                                <Link 
                                    to="/conteudos" 
                                    className="intro__button intro__button--primary"
                                >
                                    <FiBookOpen aria-hidden="true" />
                                    <span>Ver Conteúdos</span>
                                </Link>
                                <Link 
                                    to="/produtos" 
                                    className="intro__button intro__button--secondary"
                                >
                                    <FiBox aria-hidden="true" />
                                    <span>Meus produtos</span>
                                </Link>
                            </div>

                            <div className="intro__social">
                                <a 
                                    href="https://github.com/aamdias" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="intro__social-link"
                                >
                                    <FiGithub aria-hidden="true" />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/alan-dias-7b7a0913a" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="intro__social-link"
                                >
                                    <FiLinkedin aria-hidden="true" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="intro__media"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <div className="intro__image-wrapper">
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
