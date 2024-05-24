"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import logo from "@/assets/images/logo.svg";
import themeIcon from "@/assets/images/themeIcon.svg";
import darkModeIcon from "@/assets/images/icons/darkModeIcon.svg";
import hamburgerIcon from "@/assets/images/icons/hamburgerIcon.svg";
import crosscircle from "@/assets/images/icons/crosscircle.svg";
import Image from "next/image";
import getUserToken from "@/utils/helpers/getUserToken";
import { logoutUser } from "@/utils/helpers/logoutUser";

const Header: React.FC = () => {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    console.log("router is", path);
  }, [path]);
  interface navLinksObject {
    id: number;
    text: string;
    link: string;
  }

  const navLinks: navLinksObject[] = [
    { id: 1, text: "About Us", link: "/aboutus" },
    { id: 2, text: "Courses", link: "/courses" },
    // { id: 3, text: "Internships", link: "/internships" },
    { id: 4, text: "Community", link: "/community" },
    { id: 5, text: "Contact us", link: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<any>(null);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const token = getUserToken();

  const renderLoginButton = () => (
    <button
      className="header_loginButton"
      onClick={() => {
        if (token === "" || token === null) {
          router.push("/login");
        } else {
          logoutUser();
          setIsLoggedIn(false);
        }
      }}
    >
      {!isLoggedIn ? "Login" : "Logout"}
    </button>
  );

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);
  return (
    <>
      <section className={`header ${isSticky ? "stickyHeader" : ""}`}>
        <div
          className="header_logoContainer"
          onClick={() => {
            router.push("/");
          }}
        >
          <div className="header_logo">
            <Image
              src={logo}
              alt="Logo"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="header_logoContainer_text">
            FRIEND<span>UCATION</span>
          </div>
        </div>
        <div className="header_navLinksContainer">
          {navLinks &&
            navLinks.length > 0 &&
            navLinks.map((item) => {
              let isActiveLink = path === item?.link;
              return (
                <div
                  className={
                    !isActiveLink
                      ? "header_navLinkItem"
                      : "header_navLinkItem header_navLinkItem_active"
                  }
                  onClick={() => {
                    router.push(item?.link);
                  }}
                >
                  {item?.text}
                </div>
              );
            })}
        </div>
        <div className="header_loginContainer">
          {isLoggedIn !== null && renderLoginButton()}
          <div
            className="header_hamburgerIcon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image
              src={!menuOpen ? hamburgerIcon : crosscircle}
              alt="hamburgerIcon"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          {/* <Image
            src={darkModeIcon}
            alt="Theme Icon"
            style={{
              cursor: "pointer",
              width: "15px",
              height: "15px",
              display: "flex",
              alignSelf: "center",
            }}
          /> */}
        </div>
        {/* NAV MENU DROPDOWN */}
        <div
          className={`headerNavDropdown ${
            menuOpen ? "headerNavDropdown headerNavDropdown_active" : ""
          }`}
        >
          <div className="headerNavDropdown_listContainer">
            {menuOpen &&
              navLinks &&
              navLinks.length > 0 &&
              navLinks.map((item) => (
                <div
                  className="headerNavDropdown_listContainer_item"
                  onClick={() => {
                    router.push(item?.link);
                  }}
                >
                  {item?.text}
                </div>
              ))}
            {menuOpen && (
              <div
                className="headerNavDropdown_listContainer_loginButton"
                onClick={() => {
                  if (token === "" || token === null) {
                    router.push("/login");
                  } else {
                    logoutUser();
                    setIsLoggedIn(false);
                    setMenuOpen(false);
                  }
                }}
              >
                {!isLoggedIn ? "Login" : "Logout"}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
