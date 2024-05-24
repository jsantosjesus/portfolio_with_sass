import { DiCss3, DiHtml5, DiJsBadge, DiMysql, DiNodejsSmall, DiReact } from "react-icons/di";

import '../styles/components/technologiesContainer.sass'


const TecnologiesContainer = () => {

    const technologiesIcons = [
        {id: 'html', name: 'HTML5', icon: <DiHtml5 />},
        {id: 'css', name: 'CSS3', icon: <DiCss3 />},
        {id: 'js', name: 'JavaScript', icon: <DiJsBadge />},
        {id: 'node', name: 'Node.Js', icon: <DiNodejsSmall />},
        {id: 'mysql', name: 'MySQL', icon: <DiMysql />},
        {id: 'react', name: 'React', icon: <DiReact />},
    ]


    return (
        <section id="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologiesIcons.map((icon) => {
                    return(
                        <div className="technology-card" id={icon.id} key={icon.id}>
                          {icon.icon}
                          <div className="technology-info">
                            <h3>{icon.name}</h3>
                            <p>Loren ipusm Loren ipusm Loren ipusm Loren ipusm</p>
                            </div>  
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
export default TecnologiesContainer;
