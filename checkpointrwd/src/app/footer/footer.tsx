

const Footer =() =>{
    return(
        <>
            <footer>
                <div className="container-footer">
                    <address>
                        <b>Oficina Mecânica</b><br />
                        Rua Exemplo, 123<br />
                        Cidade, Estado<br />
                        CEP: 12345-678<br />
                        <a href="mailto:contato@exemplo.com">contato@exemplo.com</a>
                    </address>
                    <div>
                        <p>Siga-nos nas redes sociais:</p>
                        <ul>
                            <li><a href="https://www.facebook.com/exemplo" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://www.instagram.com/exemplo" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/company/exemplo" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Grupo</p>
                        <br/>
                        <p>Fabiola Falcao RM 552715</p>
                        <p>Rafael de Novaes RM 553934</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;