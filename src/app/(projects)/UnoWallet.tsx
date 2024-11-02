import Image from "next/image";

export default function UnoWalletProject(){
    return(
        <div>
            <div className="flex flex-col">
                <Image width={3200} height={400} src={'/uno/mac-uno-card.png'} alt="uno-card"/>
                <Image width={3200} height={400} src={'/uno/mac-uno-dash.png'} alt="uno-card"/>
                <Image width={3200} height={400} src={'/uno/mac-uno-transx.png'} alt="uno-card"/>
                <Image width={3200} height={400} src={'/uno/mac-uno-setting.png'} alt="uno-card"/>
            </div>
        </div>
    )
}