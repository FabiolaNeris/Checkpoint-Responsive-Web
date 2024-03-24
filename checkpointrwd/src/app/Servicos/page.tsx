import Servicos from "./servicos";


const ServicosPage = () =>{
    return(
        <>
            <main>
                <h1>Serviços</h1>
                <div className="container-services">
                    <div className="services-left">
                        <Servicos nome="Troca de óleo" duration={40} preco={75.69} />
                        <Servicos nome="Revisão mecânica" duration={80} preco={239.99} />
                        <Servicos nome="Inspeção de freios" duration={60} preco={129.99} />
                        <Servicos nome="Alignamento de rodas" duration={120} preco={299.99} />
                        <Servicos nome="Revisão de fluidos" duration={90} preco={199.99} />
                        <Servicos nome="Troca de pneus" duration={150} preco={349.99} />
                        <Servicos nome="Revisão de sistema de combustível" duration={100} preco={179.99} />
                        <Servicos nome="Revisão de sistema elétrico" duration={120} preco={219.99} />
                    </div>
                    <div className="services-right">
                        <Servicos nome="Revisão de sistema de suspensão" duration={130} preco={249.99} />
                        <Servicos nome="Revisão de sistema de direção" duration={110} preco={229.99} />
                        <Servicos nome="Revisão de sistema de transmissão" duration={140} preco={279.99} />
                        <Servicos nome="Revisão de sistema de ar condicionado" duration={100} preco={189.99} />
                        <Servicos nome="Revisão de sistema de escape" duration={120} preco={239.99} />
                        <Servicos nome="Revisão de sistema de iluminação" duration={90} preco={169.99} />
                        <Servicos nome="Revisão de sistema de rádio" duration={80} preco={149.99} />
                        <Servicos nome="Limpeza completa" duration={80} preco={119.99} />
                    </div>
                </div>
            </main>
            
        </>
    )
}
export default ServicosPage;