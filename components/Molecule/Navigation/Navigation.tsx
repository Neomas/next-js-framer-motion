import React from "react";
import styles from "./Navigation.module.scss";
import NavItem from "@components/Atom/NavItem/NavItem";
const Navigation = ({ links }: { links: any[] }) => {
  return (
    <nav className={styles.navigation}>
      {links.map((link) => {
        return <NavItem key={link.label} link={link.link} label={link.label} />;
      })}
    </nav>
  );
};

export default Navigation;
