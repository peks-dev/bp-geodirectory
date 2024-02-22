"use client"; // requisito para usePathname

import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import Link from "next/link";

// icons
import HomeIcon from "./icons/HomeIcon";
import SearchIcon from "./icons/SearchIcon";
import NewBpIcon from "./icons/NewBpIcon";
import ProfileIcon from "./icons/ProfileIcon";

const links = [
  { url: "/", icon: <HomeIcon />, key: "home" },
  { url: "/search", icon: <SearchIcon />, key: "search" },
  { url: "/new-bp", icon: <NewBpIcon />, key: "new-bp" },
  { url: "/profile", icon: <ProfileIcon />, key: "profile" },
];

function Navbar() {
  const pathName = usePathname();
  return (
    <>
      <header className={styles.navbar}>
        <nav className={styles.navbarWrap}>
          <ul className={styles.navbarLinks}>
            {links.map((link) => (
              <li
                key={link.key}
                className={`${styles.navbarLinkItem} ${
                  pathName === link.url ? styles.navbarLinkItemActive : ""
                }`}
              >
                <Link href={link.url}>{link.icon}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
