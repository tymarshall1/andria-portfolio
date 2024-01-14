import Home from "./pages/homepage/home";
import Portfolio from "./pages/portfolio/portfolio";
import Keystone from "./pages/projectPages/keystone/keyStone";
import RachaelsBakery from "./pages/projectPages/rachaelsBakery/rachaelsBakery";
import RockNRolls from "./pages/projectPages/rockNRolls/rockNRolls";
import JrProm from "./pages/projectPages/jrProm/jrProm";
import SrProm from "./pages/projectPages/srProm";
import VeteransCemetary from "./pages/projectPages/veteransCemetery";
import RehobethBeach from "./pages/projectPages/rehobeth beach/rehobethBeach";
import PhotoManipulation from "./pages/projectPages/photoManipulation/photoManipulation";
import BookCovers from "./pages/projectPages/bookCovers/bookCovers";
import LogoDesigns from "./pages/projectPages/logoDesigns";
import SocialMediaAdvertisements from "./pages/projectPages/socialMediaAdvertisements";
import Advertisements from "./pages/projectPages/advertisements";
import Contact from "./pages/contact/contact";
import { ReactNode } from "react";

type Routes = {
  path: string;
  element: ReactNode;
}[];

export const routes: Routes = [
  { path: "/", element: <Home /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/keystone-condominiums", element: <Keystone /> },
  { path: "/rachaels-bakery", element: <RachaelsBakery /> },
  { path: "/rock-n-rolls", element: <RockNRolls /> },
  { path: "/jr-prom", element: <JrProm /> },
  { path: "/sr-prom", element: <SrProm /> },
  { path: "/veterans-cemetery", element: <VeteransCemetary /> },
  { path: "/rehobeth-beach", element: <RehobethBeach /> },
  { path: "/photo-manipulation", element: <PhotoManipulation /> },
  { path: "/book-covers", element: <BookCovers /> },
  { path: "/logo-designs", element: <LogoDesigns /> },
  {
    path: "/social-media-advertisements",
    element: <SocialMediaAdvertisements />,
  },
  { path: "/advertisements", element: <Advertisements /> },
  { path: "/contact", element: <Contact /> },
];
