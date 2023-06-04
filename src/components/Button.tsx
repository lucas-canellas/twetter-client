import { MdPersonAdd } from "react-icons/md";


export type ButtonProps = {
    text: string;
    userIcon: boolean;
}

export const Button = ({ text, userIcon}: ButtonProps) => {
    return (
        <button className="bg-dark-blue rounded text-white font-noto flex items-center justify-center w-24 h-8">
            <MdPersonAdd className={`${userIcon ? "inline-block mr-2" : "hidden"}`} />
            {text}
        </button>
    )
}