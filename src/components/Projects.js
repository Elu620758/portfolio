import gymlogger from '../assets/gym-logger.png';
import foodDelivery from '../assets/food-delivery-app.png';
import recipe from '../assets/recipe-app.png';
import notes from '../assets/notes-app.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: gymlogger,
                description: 'A fitness-logger Website. Built with MERN.',
                link: 'https://gymlogger-app.netlify.app/'
            },
            {
                image: foodDelivery,
                description: 'Food delivery website like Swiggy, Built with MERN.',
                link: 'https://food-delivery-app-index.netlify.app/'
            },
            {
                image: recipe,
                description: 'Recipe Making App. Built with MERN.',
                link: 'https://recipefsd.netlify.app/'
            },
            {
                image: notes,
                description: 'Notes taking app Built with MERN',
                link: 'https://notestodo-app.netlify.app'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my projects. I have built these with MERN</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}