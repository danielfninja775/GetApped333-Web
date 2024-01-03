import "./App.css";
import Header from "./Components/HeaderCard/Header.jsx";
import PromoteCard from "./Components/PromoteCard.jsx";
import CellTrioCard from "./Components/CellTrioCard.jsx";
import NavBar from "./Components/NavBar.jsx";
import CoverCard from "./Components/CoverCard.jsx";
import Footer from "./Components/Footer.jsx";
import LogoSlogan from "./Components/LogoSloganEffect/index.jsx";
import White3BoxCard from "./Components/white3Box.jsx";
import SimpleSlider from "./Components/SlideShowCard/SimpleSlider.jsx";
import SlideVideoCard from "./Components/SlideVideoCard.jsx";


function App() {
  return (
    <div>
      <NavBar/>
      <LogoSlogan/>
      <Header/>
      <CoverCard/>
      <White3BoxCard/>
      <SimpleSlider/>
      <CellTrioCard/>
      <PromoteCard/>
      <SlideVideoCard/>
      <Footer/>
    </div>
  );
}

export default App;
