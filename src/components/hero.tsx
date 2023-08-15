import Image from "next/image";
import { H1 } from "./ui/h1";

export function Hero() {
  return (
    <section>
      <Image
        alt="Picture of Jenia Brook"
        className="rounded-full"
        src={"/me.jpg"}
        width={120}
        height={120}
      />
      <H1>Jenia Brook</H1>
    </section>
  );
}
