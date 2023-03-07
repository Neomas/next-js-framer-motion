import Navigation from "@components/Molecule/Navigation/Navigation";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import "../styles/globals.css";
import AppLayout from "@components/Molecule/AppLayout/AppLayout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const links = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];
  return (
    <AnimatePresence>
      <AppLayout key={router.asPath}>
        <Navigation links={links} />
        <Component {...pageProps} />
      </AppLayout>
    </AnimatePresence>
  );
}

export default MyApp;
