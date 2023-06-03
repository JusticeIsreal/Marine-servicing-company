import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

function Navbar() {
  // toggle navbar
  const menuToggler = useRef();

  const [toggleBtn, setToggleBtn] = useState(false);
  const toggleMobileNavbar = () => {
    setToggleBtn(!toggleBtn);
    if (toggleBtn) {
      menuToggler.current.className = "navbar";
    } else {
      menuToggler.current.className = "active-meun navbar";
    }
  };

  return (
    <div className="main-nav">
      <main className="navbar-main-con">
        {/* logo */}
        <div className="logo-con">
          <Link href="/">
            <img src="/logo.png" alt="" />
          </Link>
          <img src="/wholename.png" alt="" className="wholename" />
        </div>
        {/* nav menu */}
        <nav className="navbar" ref={menuToggler}>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/projects">
              <li>Projects</li>
            </Link>
            {/* <Link href="/team">
              <li>Our-Team</li>
            </Link> */}
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
        <div className="menu-btn" onClick={() => toggleMobileNavbar()}>
          {toggleBtn ? <CgClose /> : <AiOutlineMenu />}
        </div>
      </main>
    </div>
  );
}

export default Navbar;
