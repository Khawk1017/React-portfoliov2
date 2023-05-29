import './index.scss'
import Loader from 'react-loaders'
import Jate from '../../assets/img/Jate.png'
import NoteTaker from   '../../assets/img/NoteTaker.png'
import Password2 from '../../assets/img/Password2.png'

const Projects = () => {
    return (
        <>
           <div className="projects">
            <div className="projects__bio-image">
                <h1 className="text-secondary">My Projects</h1>
            </div>
            <div className='image-container'>
                <img src={Jate} alt='jate' />
            </div>
           </div>
            <Loader type='pacman' />
        </>
    )
}

export default Projects;