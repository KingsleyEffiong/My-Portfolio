import { EXPERIENCE } from "../../EXPERIENCES"
import { useProvider } from "../PostProvider";

function Experiences() {
  const {responsive} = useProvider();
  return (
    <section id="#section--3" className={`flex ${responsive ? 'flex-col' : 'flex-row'} justify-around py-24 px-3 border-b border-b-gray-200`}>
    <h1 className="font-bebas text-[4rem] leading-[3.5rem]">My Experience</h1>
    <div className="flex flex-col">
{   EXPERIENCE.map((exp) => (
    <div className={`flex flex-col gap-5 ${responsive ? 'w-[350px]' : 'w-[450px]'} my-5 `} key={exp.id}>
       <div className="flex justify-between items-center">
        <h2>{exp.type}</h2>
        <p className="text-sm text-[var(--light-gray)]">{exp.date}</p>
       </div>
       <p className="-mt-5 text-[#D3E97A]">{exp.company}</p>
       <h2 className="text-[var(--light-gray)]">{exp.about}</h2>
    </div>
))}
    </div>
</section>
  )
}

export default Experiences