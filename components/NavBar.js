import { Container } from "../styles/navbar";
import { HiMenu } from 'react-icons/hi';
import { useState } from "react";
import Link from 'next/link'
import MenuMobile from "./MenuMobile";
import Image from 'next/image'
function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <Container>
      <MenuMobile menuVisible={menuVisible} setMenuVisible={setMenuVisible}  />

    <section>
     
      <nav>
            <Link href="/">Início</Link>
            <Link href="/servicos">Serviços</Link>
            <Link href="/conta">Abra sua Conta</Link>
            <Link href="/sobre">Sobre Nós</Link>
            <Link href="/ajuda">Ajuda</Link>
            <Link href="/contato">Contato</Link>
      </nav>
      <div className="corte"></div>
      <div className="corte2"></div>
    </section>
<Link href="/">
<div className="img">
<Image  src="/logobranca.png" alt="Logo" width={125} height={40} margin-left={50} />
</div>
</Link>
    <section>
      <HiMenu className="mobile"  color={'#fff'} size={50} onClick={()=> setMenuVisible(true)}/>
    </section>
  </Container>
  )
}

export default Navbar