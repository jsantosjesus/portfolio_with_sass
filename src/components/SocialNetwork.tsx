import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/components/socialNetwork.sass'

const SocialNetwork = () => {

    const iconsSocialNetwoks = [
        { name: 'linkedin', link: '#', icon: <FaLinkedin /> },
        { name: 'gitHub', link: '#', icon: <FaGithub /> },
        { name: 'instagram', link: '#', icon: <FaInstagram /> }
    ]


    return (
        <section id="social-netwoks">
            {iconsSocialNetwoks.map((social) => {
                return (
                    <a
                        href={social.link}
                        className='social-btn'
                        id={social.name}
                        key={social.name}>
                        {social.icon}
                    </a>
                )
            })}

        </section>
    );
}
export default SocialNetwork;
