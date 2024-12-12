import { useProvider } from "../component/PostProvider";
import Button from "./Button"

function Form() {
  const {responsive} = useProvider();
  return (
    <form className={`${responsive ? 'w-full py-9' : 'w-[600px]'}  h-[611px] flex flex-col gap-8`}>
        <div className="w-full h-auto flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input type="text" name="" id="" placeholder="Joe smith" className="h-[51px] w-full bg-[var(--brown)] rounded-full px-5 outline-none"/>
        </div>
               <div className="w-full h-auto flex flex-col gap-2">
            <label htmlFor="email">Name</label>
            <input type="email" name="" id=""  className="h-[51px] w-full bg-[var(--brown)] rounded-full px-5 outline-none"/>
        </div>
               <div className="w-full h-auto flex flex-col gap-2">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="" id=""  className="h-[51px] w-full bg-[var(--brown)] rounded-full px-5 outline-none"/>
        </div>
               <div className="w-full h-auto flex flex-col gap-2">
            <label htmlFor="name">Message</label>
            <textarea type="text" name="" id="" className="h-[156px] w-full bg-[var(--brown)] rounded-md px-5 py-2 outline-none"/>
        </div>
        <Button>Submit</Button>
    </form>
  )
}

export default Form