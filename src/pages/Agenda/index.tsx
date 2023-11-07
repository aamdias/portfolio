import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import {  useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

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

export default function Agenda () {

    const location = useLocation();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        scrollToTop();
    }, [location.pathname]);

    useEffect(() => {

        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
;
    }, []);

    const isSmallScreen = window.innerWidth <= 540;

    return(
        <div className = "agenda">
            <Link
                to="/"
                className="back-home-button"
            >
            <span className ="back-home-button__icon">< BiArrowBack /> Voltar </span>
            </Link>
                <motion.div 
                className = "agenda__content"
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
                <h1 className="title"> Horários disponíveis </h1>
                <h2 className="subtitle"> Aceito somente após contato prévio </h2>
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/alan-dias-trybe/1-1?hide_event_type_details=1&hide_gdpr_banner=1&text_color=828282&primary_color=333333"
                    style={isSmallScreen ? {minWidth: '320px', height: '500px', position: 'relative'} : {minWidth: '400px', height: '500px', position: 'relative'}}
                ></div> 
                </motion.div>
        </div>
    );
}