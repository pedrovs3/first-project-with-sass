import '@/assets/styles/header.scss'
import {inter} from "@/config/fonts";
import arrowDropDown from '../../assets/images/arrow_drop_down.svg'
import Image from "next/image";

export default function Header() {
	return (
			<div className={"header"}>
				<h2 className={'logo'}>Teslabank.</h2>
				<ul className={inter.className}>
					<li>Benefícios</li>
					<li>
						Conta digital
						<Image src={arrowDropDown} alt={""} width={13} height={13}/>
					</li>
					<li>Suporte</li>
					<li>
						Blog
						<Image src={arrowDropDown} alt={""} width={13} height={13}/>
					</li>
				</ul>
				<div className={'header__tertiary_column'}>
					<span>Entrar</span>
					<button>Abrir conta</button>
				</div>
			</div>
	)
}
