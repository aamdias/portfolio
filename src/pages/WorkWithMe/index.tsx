import Navbar from '../../components/Navbar/navbar.tsx';
import servicesData from '../../data/services.json';
import Footer from '../../components/Footer/footer.tsx';
import Service from '../../components/Service/service.tsx';
import { FaCopy } from 'react-icons/fa';
import { useState } from 'react';
import copy from 'clipboard-copy';

type ServiceProps = {
    title: string;
    description: string;
    availableSlots: string;
    price: string;
    externalLink: string;
};

export default function WorkWithMe () {
    const [isCopied,setIsCopied] = useState(false);

    const handleCopy = () => {
        copy('adias7882@gmail.com')
        .then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    }

    return(
        <div className = "buildwithme">
            <Navbar />
            <h1 className="title"> Gostaria de ajuda de um Product Manager experiente, sem ter que contratar um full-time? </h1>
            <h2 className="subtitle"> Serviços disponíveis </h2>
            <div className =" services">
                {servicesData.map((service:ServiceProps) => (
                <Service key={service.title} {...service} />
                ))}
            </div>
            <h2 className="subtitle"> Gostaria de minha ajuda outra forma? </h2>
            <div className = "email-copy">
                <span className = "email-text">adias7882@gmail.com</span>
                <FaCopy onClick={handleCopy} style={{ cursor: 'pointer' }} />
                {isCopied && <span>Copiado!</span>}
            </div>
            <Footer />
        </div>
    );
}