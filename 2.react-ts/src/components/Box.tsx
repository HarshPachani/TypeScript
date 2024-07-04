import { Dispatch, ReactNode, SetStateAction } from "react";

type PropsType = { 
    heading: string;
    count?: number;
    func1: (a: string) => void;
    children: ReactNode;
}


// const Box = ({ heading }: { heading: string, }) => { //Method 1
// const Box = (props: PropsType) => { //This was just destructured...
/*
const Box = ({ heading, count = 5, func1, children }: PropsType) => {
    func1('123');
  return (
    <div>
        <h1>{heading}</h1>
        <p>{count}</p>
        {children}
    </div>
  )
}
*/

type InputValType = string | number;

const Box = <T extends InputValType>({ label, value, setter }: {
    label: string,
    value: T,
    setter: Dispatch<SetStateAction<string>>
}) => {
  return (
    <form>
        <label>{label}</label>
        <input type="text" value={value} onChange={(e) => setter(e.target.value)} />
        <button>Submit</button>
    </form>
  )
}

export default Box