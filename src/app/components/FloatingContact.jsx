import whatsappImg from "../../../public/whatsapp.png";
import Image from "next/image";

const FloatingContact = () => {
  return (      
    <div className=" fixed right-4 bottom-6 bg-slate-200 rounded-lg z-50">
    <a href="https://wa.me/+919592348990" target="_blank" className="flex md:gap-4 gap-2 items-center md:px-4 md:py-2 px-2 py-1">
    <div className="">
          <Image
            src={whatsappImg}
            alt="whatsApp Img"
            width={40}
            height={40}
            placeholder="blur"
            style={{ objectFit: "cover" }}
            quality={100}
          ></Image>
      </div>
      <span className="justify-center">Chat with me</span>
    </a>
      </div>
  )
}

export default FloatingContact
