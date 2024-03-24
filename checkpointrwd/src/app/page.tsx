import Image from "next/image";
import Relogio from "./Relogio/relogio";
export default function Home() {
  return (
    <main>
      <h1>Oficina Mecânica</h1>

      <section className="introducao">
        <h2>
          Oficina Mecânica Especializada
        </h2>
        <p>
          Garanta a qualidade e durabilidade do seu carro com a expertise de especialistas.
        </p>
        <a href="/Revisao" className="botao-agende">AGENDAR REVISÃO</a>
      </section> 


      <div className="icones">
        <div className="icones-left">
          <Image
            src={"/assets/chave-de-roda.png"}
            alt="icone"
            width={100}
            height={100}
          />
          <Image
            src={"/assets/assento-de-carro.png"}
            alt="icone"
            width={100}
            height={100}
          />
          <Image
            src={"/assets/chave-inglesa.png"}
            alt="icone"
            width={100}
            height={100}
          />
        </div>

        <div className="icone-center">
          <Image className="carro"
            src={"/assets/pngwing.com.png"}
            alt="Foto de um carro"
            width={440}
            height={800}
          />
        </div>

        <div className="icones-right">
          <Image
            src={"/assets/volante.png"}
            alt="icone"
            width={100}
            height={100}
          />
          <Image
            src={"/assets/mudanca-de-marcha.png"}
            alt="icone"
            width={100}
            height={100}
          />
          <Image
            src={"/assets/mecanico.png"}
            alt="icone"
            width={100}
            height={100}
          />
        </div>
      </div>
      <Relogio/>
    </main>
  );
}
