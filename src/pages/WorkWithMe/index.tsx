import Navbar from '../../components/Navbar/navbar.tsx';
import servicesData from '../../data/services.json';
import Service from '../../components/Service/service.tsx';

type ServiceProps = {
    title: string;
    description: string;
    availableSlots: string;
    price: string;
    externalLink: string;
};

export default function WorkWithMe () {
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
        </div>
    );
}