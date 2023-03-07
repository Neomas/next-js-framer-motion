import Link from "next/link";
import React from "react";
import styles from "./NavItem.module.scss";

const NavItem = ({ link, label }: { link: string; label: string }) => {
  return (
    <Link href={link} passHref>
      <a className={styles.navItem}>{label}</a>
    </Link>
  );
};

export default NavItem;
