import HeroImg from '../assets/hero.png';
import { SiLinkedin } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { GrCertificate } from "react-icons/gr";
import { RxResume } from "react-icons/rx";


export default function Hero() {
    const config = {
        subtitle: 'Im a Full-stack developer',
        social: {
            github: 'https://github.com/Elu620758',
            linkedin: 'https://www.linkedin.com/in/elumalai-p/',
            resume: 'https://drive.google.com/file/d/1ZKjolNn4l5Oqi3RBsnAHOjs77Uc2jbLg/view?usp=drive_link',
            certificates: 'https://drive.google.com/drive/folders/1iy5GHk4iFH7JD4cUm7YQx20Ger70GAOa?usp=sharing'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-black text-6xl font-hero-font'>Hi, <br /> Im <span className='text-white'>Elumalai</span> P
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.github} target='blank' className='pr-5 hover:text-white'><VscGithubInverted size={40} /></a>
                <a href={config.social.linkedin} target='blank' className='pr-5 hover:text-white'><SiLinkedin size={40} /></a>
                <a href={config.social.certificates} target='blank' className='pr-5 hover:text-white'><GrCertificate size={40} /></a>
                <a href={config.social.resume} target='blank' className='pr-5 hover:text-white'><RxResume size={40} /></a>
            </div>
        </div>
        <img className='md:w-1/3' src={HeroImg} />
    </section>
}
