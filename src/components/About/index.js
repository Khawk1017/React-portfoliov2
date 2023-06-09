import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from 'react-loaders';
import './index.scss';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from "@fortawesome/free-brands-svg-icons";


const About = () => {
    return (
        <>
            <div className="about-page">
                <div className='text-container'>
                    <h1>
                        About Me
                    </h1>
                    <p>Hello, my name is Kameron, and I am a Web developer I'm from Chicago but currently live in Phoenix, AZ. With a passion for creating engaging user experiences and bringing ideas to life, I am constantly driven by my ambition to push the boundaries of what is possible in the digital world.This ambition has fueled my journey as a Web developer, propelling me to continuously learn and grow in order to stay at the forefront of the ever-evolving industry.</p>
                    <p>Curiosity is a driving force behind my journey as a Web developer.  I constantly seek to expand my skill set, staying up-to-date with emerging technologies and exploring new ways to enhance user experiences. Confidence is a key aspect of my approach to Web development. I firmly believe in my skills and abilities, allowing me to tackle challenges head-on with a sense of assurance.</p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faSass} color="#b37399" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About;