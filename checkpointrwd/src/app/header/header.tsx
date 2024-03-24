import Link from "next/link"
import Image from "next/image"

const Header =() =>{
    return(
        <>
        <header>
            <div>
                <Link href="/">
                        <Image 
                            src="/assets/pngwing.com 2.png"
                            alt="Logo"
                            height={82}
                            width={85}
                        />
                </Link>    
            </div>
            <nav>
                <ul className="nav-header">
                    <li><Link href="/Servicos" >Serviços</Link></li>
                    <li><Link href="/Revisao" >Revisão</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )

}
export default Header;