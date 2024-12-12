import { Link } from "react-router-dom"
import AboutMeLink from "../../UI/AboutMeLink"
import { useProvider } from "../PostProvider";
import image2 from "../../assets/images/profiileimae2.jpg"

function About() {
  const {responsive, section2} = useProvider();
  return (
    <section ref={section2} className={`w-full h-1/3 ${!responsive ? 'py-44' : 'py-5'}  px-7 border-b border-b-gray-200`}>
        <div className={`flex ${responsive ? 'flex-col' : 'justify-around items-center'} my-5`}>
            <h1 className="font-bebas text-[4rem] leading-[3.5rem]">{!responsive && 'About Me'}</h1>
            <div className="">
                <h2 className="text-[var(--light-gray)]">I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h2>
            <span className="text-[var(--light-gray)]">Here are some of the selected projects that showcase my passion for front-end development.</span>
            <Link to="/about-me" className="py-10">
                <AboutMeLink />
            </Link>
            </div>
        </div>
        {responsive && <img src={image2} alt="" className={`${responsive === true ? 'w-full h-[auto]' : ''}  rounded-3xl`} />}
    </section>
  )
}

export default About