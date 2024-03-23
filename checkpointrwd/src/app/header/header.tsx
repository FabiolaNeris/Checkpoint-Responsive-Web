import Link from "next/link"
import Image from "next/image"

const Header =() =>{
    return(
        <>
        <header>
            <Image src="" alt=""/>
            <nav>
                <ul className="nav-header">
                    <li><Link href="" >Serviços</Link></li>
                    <li><Link href="" >Revisão</Link></li>
                    <li><Link href="" >Produtos</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )

}
export default Header;