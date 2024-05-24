import Perfil from '../assets/perfil.jpg'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer';
import SocialNetwork from './SocialNetwork'


const Sidebar = () => {
    return (
        <aside id='sidebar'>
            <p><img src={Perfil} alt='Jadson Santos' /></p>
            <p className="title">Desenvolvedor</p>
            <SocialNetwork />
            <InformationContainer />
            <a className='btn'>Download do Currículo</a>
        </aside>
    );
}
export default Sidebar;
