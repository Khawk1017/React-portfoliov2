import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer = () => {
    return (
       <div className='foot-container'>
        <ul>
            <li>
                <a 
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/Khawk1017'
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a 
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/feed/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            
        </ul>
       </div>
    )
}

export default Footer;