import GitHubLink from "../../UI/GitHubLink"
import Links from "../../UI/Links"
import { PROJECTS } from "../../PROJECTS"
import { useProvider } from "../PostProvider";


function Projects() {
    const {responsive, section1} = useProvider();
  return (
    <section ref={section1} className='w-full h-1/3 py-6 px-7 border-b border-b-gray-200'>
        <div className="">
            <h1 className={`font-bebas ${responsive ? 'text-[3rem]' : 'text-[4rem]' }  leading-[3.5rem]`}>Featured Projects</h1>
            <span>Here are some of the selected projects that showcase my passion for front-end development.</span>
        </div>
        <div className="w-full h-auto flex flex-col gap-5 my-4">
            {PROJECTS.map((project) =>(
                <div className={`flex gap-14 ${responsive ? 'flex-col' : 'flex-row' } items-center justify-between`}key={project.id}>
                    <div className={`${responsive ? 'w-full h-[300px]' : 'w-[600px] h-[600px]'}  bg-[var(--dark-gray)] flex justify-center items-center rounded-2xl`}>
                        <img src={project.image} alt={project.name}  className="w-[300px] h-[250px]" />
                    </div>
                    <div className={`${responsive ? 'w-full' : 'w-[600px]'}`}>
                        <h1 className="text-2xl">{project.about}</h1>
                        <p className="text-sm text-[var(--light-gray)]">{project.info}</p>
                        <h1 className="border-b border-b-[var(--light-gray)] py-4">PROJECT INFO</h1>
                        <div className="border-b border-b-[var(--light-gray)] py-4 text-sm text-[var(--light-gray)] flex justify-between">
                            <span>Year</span>
                            <span>{project.year}</span>
                        </div>
                        <div className="border-b border-b-[var(--light-gray)] py-4 text-sm text-[var(--light-gray)] flex justify-between">
                            <span>Role</span>
                            <span>{project.role}</span>
                        </div>
                        <div className="w-[284px] flex justify-around items-center mt-10">
                            <a href={project.link}>
                                <Links />
                            </a>
                            <a href={project.git_hub_link}>
                                <GitHubLink />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Projects