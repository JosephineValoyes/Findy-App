import Navbar from "../NavBar/Navbar";
//import LogoHeader from "../../../assets/common/Icon/LOGOLOGO 3.png"
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <div>
      <header className="w-full h-24 absolute z-10 top-0 flex justify-between items-center px-6  ">
      {/* //<img className="w-32 h-12 size-[5.5rem]" src={LogoHeader} alt="Logo Header"/> */}
      <Navbar/>
    </header>
    <Footer/>
    </div>
    
  )
}

export default Header