import Image from "next/image";
import tiktok from "../public/tiktok.svg";
import instagram from "../public/instagram.svg";


export default function SocialIcons({title,url}) {
    var icon = instagram
    title === "Instagram" ? icon = instagram : icon = tiktok

    return (
        <a href={url}
        target={"_blank"}
        rel="noopener noreferrer">
        <Image src={icon}
        alt={title}
        width={60}
        height={60}
        />
        </a>

    )
}