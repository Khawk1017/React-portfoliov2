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
            
            <div className="projects__items">
                <div className="projects__item">
                    <img src={Jate}  alt='jate'/>
                </div>
            </div>
            <div className="projects__items">
                <div className="projects__item">
                    <img src={NoteTaker}  alt='jate'/>
                </div>
            </div>
            <div className="projects__items">
                <div className="projects__item">
                    <img src={Password2}  alt='jate'/>
                </div>
            </div>
            
           </div>
            <Loader type='pacman' />
        </>
    )
}

export default Projects;