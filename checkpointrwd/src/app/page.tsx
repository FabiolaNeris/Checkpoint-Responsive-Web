import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Mecânica</h1>
      <Image className="carro"
        src={"/assets/pngwing.com.png"}
        alt="Foto de um carro"
        width={440}
        height={800}
      />
    </main>
  );
}
