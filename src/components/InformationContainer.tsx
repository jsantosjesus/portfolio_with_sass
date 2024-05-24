import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";

import '../styles/components/informationContainer.sass'

const InformationContainer = () => {
    return (
        <section id="information-container">
            <div className="info-card">
                <AiFillPhone />
                <div>
                    <h3>Telefone</h3>
                    <p>(79) 9 9999-9999</p>
                </div>
            </div>
            <div className="info-card">
            <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <p>email@email.com</p>
                </div>
            </div>
            <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Tobias Barreto-SE</p>
                </div>
            </div>
        </section >
    );
}
export default InformationContainer;
