import './index.scss'
import Loader from 'react-loaders'
import Jate from '../../assets/img/Jate.png'
import NoteTaker from '../../assets/img/Note2.png'
import Password2 from '../../assets/img/Password2.png'
import SocialNet from '../../assets/img/SocialNetworkAPI.png'
import PublicInterest from '../../assets/img/PublicIntrest.png'
import Results from '../../assets/img/Results.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'


const Projects = () => {
    return (
        <>
            <div className='projects'>
                <div className='project-item'>
                    <h2>Password Generator</h2>
                    <img src={Password2} alt='password'></img>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://khawk1017.github.io/Password-Generator---Challenge-3-/'
                    >
                        <FontAwesomeIcon icon={faEye} color='#4d4d4e' />
                    </a>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/Khawk1017/Password-Generator---Challenge-3-'
                    >
                        <FontAwesomeIcon icon={faGithubSquare} color='#4d4d4e' />
                    </a>

                </div>
                <div className='project-item'>
                    <h2>PWA Text Editor app</h2>
                    <img src={Jate} alt='Jate'></img>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://thatsmyeditor.herokuapp.com/'
                    >
                        <FontAwesomeIcon icon={faEye} color='#4d4d4e' />
                    </a>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/Khawk1017/ThatsMyEditor'
                    >
                        <FontAwesomeIcon icon={faGithubSquare} color='#4d4d4e' />
                    </a>
                </div>
                <div className='project-item'>
                    <h2>NoteTaker (Express.js)</h2>
                    <img src={NoteTaker} alt='Note'></img>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/Khawk1017/Note-Taker-App'
                    >
                        <FontAwesomeIcon icon={faEye} color='#4d4d4e' />
                    </a>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/Khawk1017/Note-Taker-App'
                    >
                        <FontAwesomeIcon icon={faGithubSquare} color='#4d4d4e' />
                    </a>
                </div>
                <div className='project-item'>
                    <h2>SocialNetworkAPI (MongoDB, Express.js)</h2>
                    <img src={SocialNet} alt='SocialNet'></img>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/Khawk1017/Social-Network-Api'
                    >
                        <FontAwesomeIcon icon={faEye} color='#4d4d4e' />
                    </a>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/Khawk1017/Social-Network-Api'
                    >
                        <FontAwesomeIcon icon={faGithubSquare} color='#4d4d4e' />
                    </a>
                </div>
                <div className='project-item'>
                    <h2>Public Interest Press (MVC)</h2>
                    <img src={PublicInterest} alt='Public Interest'></img>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://freejournalist.herokuapp.com/'
                    >
                        <FontAwesomeIcon icon={faEye} color='#4d4d4e' />
                    </a>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/xMaedayx/Public-Interest-Press'
                    >
                        <FontAwesomeIcon icon={faGithubSquare} color='#4d4d4e' />
                    </a>
                </div>
                <div className='project-item'>
                    <h2>Weather App</h2>
                    <img src={Results} alt='Weather App'></img>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://khawk1017.github.io/Weather-Dashboard/'
                    >
                        <FontAwesomeIcon icon={faEye} color='#4d4d4e' />
                    </a>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/Khawk1017/Weather-Dashboard'
                    >
                        <FontAwesomeIcon icon={faGithubSquare} color='#4d4d4e' />
                    </a>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Projects;