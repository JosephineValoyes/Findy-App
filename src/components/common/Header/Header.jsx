import Navbar from "../NavBar/Navbar";
//import LogoHeader from "../../../assets/common/Icon/LOGOLOGO 3.png"

const Header = () => {
  return (
    <header className="w-full h-24 absolute z-10 top-0 flex justify-between items-center px-6  ">
      {/* //<img className="w-32 h-12 size-[5.5rem]" src={LogoHeader} alt="Logo Header"/> */}
      <Navbar/>
    </header>
  )
}

export default Header