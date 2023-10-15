import Navbar from '../../components/Navbar/navbar.tsx';
import {  useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer/footer.tsx';

const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: -10, // Optional: Adding a slight move upwards
    },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

export default function Agenda () {

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
            <Navbar />
            <motion.div 
            className = "agenda__content"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ 
                ease: "linear",
                type: "spring", 
                stiffness: 100,
                duration: 1 }}  
            >
            <h1 className="title"> Minha agenda </h1>
            <h2 className="subtitle"> Horários disponíveis </h2>
            <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/alan-dias-trybe/1-1?hide_event_type_details=1&hide_gdpr_banner=1&text_color=828282&primary_color=333333" 
                style={isSmallScreen ? {minWidth: '320px', height: '500px', position: 'relative'} : {minWidth: '400px', height: '500px', position: 'relative'}}
            ></div>
            </motion.div>
        </div>
    );
}