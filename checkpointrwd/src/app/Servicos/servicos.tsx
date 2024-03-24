interface ServicosProps{
    nome: string;
    preco: number;
    duration: number;
}


const Servicos :  React.FC<ServicosProps> = (props) =>{

    return(
        <>
        <div className="servico">
            <br/>
            <h3>Serviço: {props.nome}</h3>
            <p>Investimento: R${props.preco} </p>
            <p>Duração do serviço: {props.duration} minutos.</p>
        </div>
        </>
    )
}

export default Servicos;