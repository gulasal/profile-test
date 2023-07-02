import { React, useEffect, useState } from "react";

import { Navbar, Dropdown, Avatar, Image } from "@nextui-org/react";
import { IoIosMenu } from "react-icons/io";
import Ti4fLogo from "../../assets/ti4f Analytics Engine.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./Dropdown.css";
import { IoMdArrowDropdown } from "react-icons/io";

function NavbarComponent({ image, firstName, lastName }) {
  // translation
  const { i18n, t } = useTranslation(["common"]);
  const [isTabletOrPhone, setIsTabletOrPhone] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("de");
    }
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsTabletOrPhone(mediaQuery.matches);
    const handleMediaQueryChange = (e) => {
      setIsTabletOrPhone(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Navbar>
      {isTabletOrPhone ? (
        <Navbar.Brand>
          <IoIosMenu
            style={{
              fontSize: "35px",
              width: "1.6rem",
              position: "absolutr",
              left: "4rem",
              top: "1.5rem",
            }}
          />

          <Image
            src={Ti4fLogo}
            css={{
              width: "8rem",
              height: "3rem",
              padding: "0.1rem",
            }}
          />
        </Navbar.Brand>
      ) : (
        <Navbar.Brand>
          <Image
            src={Ti4fLogo}
            css={{
              width: "8rem",
              height: "3rem",
              padding: "0.1rem",
            }}
          />
        </Navbar.Brand>
      )}

      <>
        <Navbar.Content>
          <Navbar.Link isActive href="/ti4f-store">
            {t("ti4f-store")}
          </Navbar.Link>
          <Navbar.Link href="my-apps">{t("my-apps")}</Navbar.Link>
          <Navbar.Link href="data-center">{t("data-center")}</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content gap="0">
          <nav style={{ display: "flex", alignItems: "center" }}>
            <select
              className="Dropdown"
              value={localStorage.getItem("i18nextLng")}
              onChange={handleLanguageChange}
            >
              <option value="en">EN</option>
              <option value="de">DE</option>
            </select>
            <IoMdArrowDropdown
              style={{ marginRight: "1rem", fontSize: "1.2rem" }}
            />
          </nav>
          <Navbar.Link>
            <Avatar
              squared
              src={image}
              css={{ width: "60px", height: "60px" }}
            />
          </Navbar.Link>
          {!isTabletOrPhone && (
            <Dropdown>
              <Dropdown.Button color="light" css={{ backgroundColor: "white" }}>
                {firstName} {lastName}
              </Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new">Account</Dropdown.Item>
                <Dropdown.Item key="copy">Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Navbar.Content>
      </>
    </Navbar>
  );
}

export default NavbarComponent;
