import './index.scss'
import Loader from 'react-loaders'
import Jate from '../../assets/img/Jate.png'
import NoteTaker from   '../../assets/img/Note2.png'
import Password2 from '../../assets/img/Password2.png'
import SocialNet from '../../assets/img/SocialNetworkAPI.png'
import PublicInterest from '../../assets/img/PublicIntrest.png'

const Projects = () => {
    return (
        <>
           <div className='projects'>
           <div className='project-item'>
           <h2>Password Generator</h2>
            <img src={Password2} alt='password'></img>
            </div>
            <div className='project-item'>
           <h2>PWA Text Editor app</h2>
            <img src={Jate} alt='Jate'></img>
            </div>
            <div className='project-item'>
           <h2>NoteTaker (Express.js)</h2>
            <img src={NoteTaker} alt='Note'></img>
            </div>
            <div className='project-item'>
           <h2>SocialNetworkAPI (MongoDB, Express.js)</h2>
            <img src={SocialNet} alt='SocialNet'></img>
            </div>
            <div className='project-item'>
           <h2>Public Interest Press (MVC)</h2>
            <img src={PublicInterest} alt='Public Interest'></img>
            </div>
           </div>
            <Loader type='pacman' />
        </>
    )
}

export default Projects;