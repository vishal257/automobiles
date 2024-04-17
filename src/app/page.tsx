import Image from "next/image";
import imageUrl from "../../public/hero-banner.jpg";

export default function Home() {
  return (
    <div>
      <div className="relative h-80">
        <Image
          src={imageUrl}
          alt="bgImg"
          fill
          placeholder="blur"
          style={{ objectFit: "cover" }}
          quality={100}
        ></Image>
      </div>
    </div>
  );
}
