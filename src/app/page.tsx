import Header from "@/Components/Header";
import {inter} from "@/config/fonts";
import Check from "@/assets/icons/Check";
import CheckIcon from "@/Components/CheckIcon";
import Benefit from "@/Components/Benefit";
import ArrowRight from "@/assets/icons/ArrowRight";
import AppleIcon from "@/assets/icons/apple_icon.svg";
import AppStore from "@/assets/icons/google_store.svg";
import Image from "next/image";
import Card from "@/Components/Card";
export default function Home() {
  return (
    <main className={"main"}>
      <Header />
        <div className={'main__container'}>
            <div className={'main__container_first'}>
                <h1>TeslaBank <br/> seu banco digital.</h1>
                <p className={inter.className}>Com TeslaBank, você pode realizar transferências bancárias com zero taxa e pagar suas contas.</p>
                <div className={'grid_benefits'}>
                    <Benefit title={'Transferência instantânea'}></Benefit>
                    <Benefit title={'Sem taxas absurdas'}></Benefit>
                    <Benefit title={'Pagamentos em todo o mundo'}></Benefit>
                    <Benefit title={'100% pensando em você'}></Benefit>
                </div>
                <div className={'main__container_first__sources'}>
                    <button>
                        Abrir uma conta
                        <ArrowRight size={32} color={'#FFFFFF'} weight={'bold'}/>
                    </button>
                    <div className={'main__container_first__sources__logos'}>
                        <Image src={AppleIcon} alt="Logo apple"/>
                        <Image src={AppStore} alt="Logo app store"/>
                    </div>

                </div>
            </div>
            <div className={'cards_container'}>
                <Card></Card>
            </div>
        </div>
    </main>
  )
}
