"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import facebook from "@/assets/images/icons/facebook.svg";
import instagram from "@/assets/images/icons/instagram.svg";
import linkedIn from "@/assets/images/icons/linkedIn.svg";
import { useRouter } from "next/navigation";
import { redirectLink } from "@/utils/helpers/redirectLink";

const Footer: React.FC = () => {
  const router = useRouter();

  interface footerItemsObject {
    id: number;
    text: string;
    value?: string;
    pdflink?: any;
    link?: any;
  }

  const menuLinks: footerItemsObject[] = [
    { id: 1, text: "About Us", link: "aboutus" },
    {
      id: 2,
      text: "Privacy Policy",
      pdflink: `/privacypolicy.html`,
    },
    { id: 3, text: "Terms of use", pdflink: "/terms.html" },
    { id: 4, text: "Refund policy", pdflink: "/refundpolicy.html" },
    { id: 5, text: "Courses", link: "courses" },
    { id: 6, text: "Contact us", pdflink: "/contact.html" },
  ];

  const serviceLinks: footerItemsObject[] = [
    { id: 1, text: "Web & App Development" },
    { id: 2, text: "Web designing" },
    { id: 3, text: "Computer languages" },
    { id: 4, text: "Internships / Job opportunities " },
  ];

  const contactLinks: footerItemsObject[] = [
    { id: 1, text: "Phone", value: "+91 7982152940" },

    { id: 2, text: "Email", value: "frienducationofficial@gmail.com" },
  ];

  const handleSocialMediaIconClick = (link: any) => {
    redirectLink(link);
  };

  function doMail() {
    var email = "frienducationofficial@gmail.com";
    location.href = "mailto:" + email;
  }
  return (
    <div className="footer">
      <div className="footerTopContainer">
        <div className="footerTopContainer_logoContainer">
          <Image src={logo} alt="Logo" />
          <h1>Frienducation</h1>

          <div className="iconsParentContainer">
            <div
              className="iconsParentContainer_outline"
              onClick={() =>
                handleSocialMediaIconClick(
                  "https://www.facebook.com/Frienducation"
                )
              }
            >
              <Image src={facebook} alt="FacebookIcon" />
            </div>
            <div
              className="iconsParentContainer_outline"
              onClick={() =>
                handleSocialMediaIconClick(
                  "https://www.linkedin.com/company/frienducation-edtech/"
                )
              }
            >
              <Image src={linkedIn} alt="LinkedInIcon" />
            </div>
            <div
              className="iconsParentContainer_outline"
              onClick={() =>
                handleSocialMediaIconClick(
                  "https://instagram.com/frienducationn?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
                )
              }
            >
              <Image src={instagram} alt="InstagramIcon" />
            </div>
          </div>
        </div>
        <div className="footerTopContainer_topRightSection">
          <div className="footerTopContainer_listContainer">
            <h1>MENU</h1>
            <div className="footerTopContainer_listContainer_list">
              {menuLinks &&
                menuLinks?.length > 0 &&
                menuLinks.map((item) => (
                  <div
                    className="listItem"
                    onClick={() => {
                      if (item?.pdflink) {
                        if (typeof window !== undefined) {
                          window.open(
                            `${window.location.origin}${item?.pdflink}`,
                            "_blank"
                          );
                        }
                      } else {
                        router.push(item?.link);
                      }
                    }}
                  >
                    {item?.text}
                  </div>
                ))}
            </div>
          </div>

          <div className="footerTopContainer_listContainer">
            <h1>SERVICES</h1>
            <div className="footerTopContainer_listContainer_list">
              {serviceLinks &&
                serviceLinks?.length > 0 &&
                serviceLinks.map((item) => (
                  <div className="listItem">{item?.text}</div>
                ))}
            </div>
          </div>

          <div className="footerTopContainer_listContainer">
            <h1>GET IN TOUCH</h1>
            <div className="footerTopContainer_listContainer_list">
              {contactLinks &&
                contactLinks?.length > 0 &&
                contactLinks.map((item) => (
                  <div
                    className="listItem"
                    onClick={() => {
                      if (item?.id === 2) {
                        doMail();
                      }
                    }}
                  >
                    {`${item?.text}: ${item?.value}`}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottomContainer">
        Copyright@ 2023 frienducation. ALL RIGHT RESERVED.
      </div>
    </div>
  );
};

export default Footer;
