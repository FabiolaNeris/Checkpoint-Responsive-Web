import Link from "next/link"
import Image from "next/image"

const Header =() =>{
    return(
        <>
        <header>
            <Image src="" alt=""/>
            <nav>
                <ul className="nav-header">
                    <li><Link href="/Servicos" >Serviços</Link></li>
                    <li><Link href="/Revisao" >Revisão</Link></li>
                    <li><Link href="/Produtos" >Produtos</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )

}
export default Header;