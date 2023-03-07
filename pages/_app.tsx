import Navigation from "@components/Molecule/Navigation/Navigation";
import { AnimateSharedLayout } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const links = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];
  return (
    <AnimateSharedLayout>
      <Navigation links={links} />
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
