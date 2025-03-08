import Home from "../sidebar/home";
import Menu from "../Navbar/menu"
import HeroGallery from "../Imagegallery/herogallery";
import SpecI from "../specifications/spec";
import Product from "../card/product";
import UpSales from "../upcoming/usages";
import DealMain from "../dailydeals/deadman";
import CategoryMain from "../category/catagorymain";
import Bestmain from "../bestsellerproduct/bestmain";
import Offermain from "../offersection/offermain";
import Footermain from "../footer/footermain";
export default function Homemain() {
  return (
    <>
      <Home />
      <Menu/>
      <HeroGallery />
      <SpecI/>
      <Product/>
      <UpSales />
      <DealMain />
      <CategoryMain />
      <Bestmain />
      <Offermain />
      <Footermain />
    </>
  );
}
