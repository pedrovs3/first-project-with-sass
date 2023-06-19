import '@/assets/styles/card.scss'
import Signal from '@/assets/icons/signal.svg'
import CardVisa from '@/assets/icons/card_visa.svg'
import Image from "next/image";
interface CardProps {
    color: string,
    name: string,
    number: string
}
export default function Card(props: CardProps) {
    return (
        <div className={'card'}>
            <div>
                <div className={'first_row'}>
                    <span>Teslabank.</span>
                    <Image src={Signal} alt={"Contactless card"}/>
                </div>
                <div className={'second_row'}>
                    <span>
                        2320
                    </span>
                    <span>
                        3000
                    </span>
                    <span>
                        9000
                    </span>
                    <span>
                        0000
                    </span>
                </div>
                <div className={'tertiary_row'}>
                    <div className={'tertiary_row__infos'}></div>
                    <Image src={CardVisa} alt={"Logo visa"}></Image>
                </div>
            </div>
        </div>
    )
}
