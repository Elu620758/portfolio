import AboutImg from '../assets/about.png';
import Education from '../assets/education.png';
import Skills from '../assets/skills.png'

export default function About() {
    const config = {
        line1: 'Hey! I am Elumalai, a self-driven and passionate programmer with a keen interest in software development and competitive programming.',
        line2: 'I thrive on building scalable software and solving real-world problems through algorithms.',
        line3: 'My enthusiasm for these domains has grown through comprehensive exposure and hands-on projects.'
    }

    return (
        <>
            <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
                <div className='py-5 md:w-1/2'>
                    <img src={AboutImg} />
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <div className='flex flex-col justify-center text-white'>
                        <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                        <p className='pb-5'>{config.line1}</p>
                        <p className='pb-5'>{config.line2}</p>
                        <p className='pb-5'>{config.line3}</p>
                    </div>
                </div>
            </section>
            <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
                <div className='py-5 md:w-1/2'>
                    <img src={Education} />
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <div className='flex flex-col justify-center text-white'>
                        <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>Education & Training</h1>
                        <p className='pb-5'>BSC Mathematics A.M.Jain College, Meenambakkam Chennai In The Year 2021</p>
                        <p className='pb-5'>HSC Government Higher Secondary School, Anakaputhur Chennai. In The Year 2012</p>
                        <p className='pb-5'>SSLC Amarar K Rathina Sababathi Boys Higher Secondary School Kandachipuram Villupuram. In The Year 2010 </p>
                        <p className='PB-5'>Zen Full Stack Developer Certification, GUVI, IIT Madras. In The Year 2023</p>
                    </div>
                </div>
            </section>
            <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
                <div className='py-5 md:w-1/2'>
                    <img src={Skills} />
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <div className='flex flex-col justify-center text-white'>
                        <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>Skills & Expertise</h1>
                        <p className='pb-5'>Proficient in JavaScript, HTML, CSS, React.js, Node.js, Express.js, MongoDB</p>
                        <p className='pb-5'>Experienced with version control systems like Git and GitHub</p>
                        <p className='pb-5'>Strong grasp of RESTful API design and implementation</p>
                        <p className='PB-5'>Excellent problem-solving skills and debugging techniques</p>
                        <p className='PB-5'>Effective communicator and collaborator in team environments</p>
                    </div>
                </div>
            </section>
        </>
    )
}

