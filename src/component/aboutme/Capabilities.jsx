import { useProvider } from "../PostProvider";

function Capabilities() {
  const {responsive} = useProvider();
  return (
    <section id="#section--2" className={`flex ${responsive ? 'flex-col' : 'flex-row'} justify-around py-24  border-b border-b-gray-200 px-2`}>
        <h1 className="font-bebas text-[4rem] leading-[3.5rem]">My Capabilities</h1>
        <div className="flex flex-col gap-5 w-[350px] ">
            <p className="text-xs text-[var(--light-gray)]">I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>
            <ul className="flex flex-row w-full gap-3 flex-wrap">
                <li className="bg-transparent border rounded-full w-fit px-5 py-1 text-center">HTML</li>
                <li className="bg-transparent border rounded-full w-fit px-5 py-1 text-center">CSS</li>
                <li className="bg-transparent border rounded-full w-fit px-5 py-1 text-center">JAVASCRIPT</li>
                <li className="bg-transparent border rounded-full w-fit px-5 py-1 text-center">TYPESCRIPT</li>
                <li className="bg-transparent border rounded-full w-fit px-5 py-1 text-center">REACT</li>
                <li className="bg-transparent border rounded-full w-fit px-5 py-1 text-center">REACT NATIVE</li>
                <li className="bg-transparent border rounded-full w-fit px-5 py-1 text-center">TAILWIND CSS</li>
                <li className="bg-transparent border rounded-full w-fit px-5 py-1 text-center">SOLIDITY</li>
                <li className="bg-transparent border rounded-full w-fit px-5 py-1 text-center">API</li>
                <li className="bg-transparent border rounded-full w-fit px-5 py-1 text-center">ASSESSBILITY</li>
                <li className="bg-transparent border rounded-full w-fit px-5 py-1 text-center">FIGMA</li>
            </ul>
        </div>
    </section>
  )
}

export default Capabilities