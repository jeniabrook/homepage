import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <Image
        alt="Picture of Jenia Brook"
        className="rounded-full"
        src={"/me.jpg"}
        width={120}
        height={120}
      />
      <h1>Jenia Brook</h1>
      <p>
        I am a frontend engineer based in Israel who is deeply passionate about
        designing and implementing cutting-edge, visually stunning interfaces
        with intuitive user experiences. I am a highly organized, self-taught,
        and detail-oriented individual who takes pride in delivering top-quality
        work. I am constantly expanding my knowledge and skills, and enjoy
        sharing my expertise with others. I am fascinated by the entire frontend
        spectrum and relish working on challenging projects with positive,
        like-minded individuals.
      </p>
    </main>
  );
}
