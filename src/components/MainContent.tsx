import '../styles/components/mainContent.sass'
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TecnologiesContainer from './TecnologiesContainer';



const MainContent = () => {
    return (
        <div id='main-content'>
        <AboutContainer />
        <TecnologiesContainer />
        <ProjectsContainer />
        </div>
    );
}
export default MainContent;
