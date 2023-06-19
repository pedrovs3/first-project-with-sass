import CheckIcon from "@/Components/CheckIcon";
import {inter} from "@/config/fonts";
interface benefitProps {
    title: string
}

export default function Benefit({title} : benefitProps) {
    return (
        <div>
            <CheckIcon></CheckIcon>
            <span className={inter.className}>{title}</span>
        </div>
    )
}
