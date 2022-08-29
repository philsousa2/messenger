import Header from '../components/Header';
import Footer from '../components/Footer';
import { GlobalStyle } from "../styles/global";
import NavBar from '../components/NavBar';
const MainContainer = ({children}) => {
    return (
     <>
     <GlobalStyle />
     <Header />
     <NavBar />
     <div>{children}</div>
     <Footer/>
     </>
    )
  }
  
  export default MainContainer