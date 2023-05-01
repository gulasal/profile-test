import { React, useState, useMemo } from "react";
import { Navbar, Dropdown, Avatar, Image } from "@nextui-org/react";
import { IoIosMenu } from "react-icons/io";
// import Logo from "../assets/man.avif";
import Ti4fLogo from "../assets/ti4f Analytics Engine.png";

function NavbarComponent({ image, firstName, lastName }) {
  const [sprache, setSprache] = useState(new Set(["DE"]));

  const selectedValueSprache = useMemo(
    () => Array.from(sprache).join(", ").replaceAll("_", " "),
    [sprache]
  );

  return (
    <Navbar css={{ width: "90rem" }}>
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
      <Navbar.Content>
        <Navbar.Link isActive href="#">
          ti4f-store
        </Navbar.Link>
        <Navbar.Link href="#">meine Apps</Navbar.Link>
        <Navbar.Link href="#">Datencenter</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content gap="0">
        <Dropdown>
          <Dropdown.Button css={{ backgroundColor: "white", color: "black" }}>
            {selectedValueSprache}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Single selection actions"
            color="secondary"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={sprache}
            onSelectionChange={setSprache}
          >
            <Dropdown.Item key="DE">DE</Dropdown.Item>
            <Dropdown.Item key="ENG">ENG</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Link>
          <Avatar squared src={image} css={{ width: "60px", height: "60px" }} />
        </Navbar.Link>
        <Dropdown>
          <Dropdown.Button color="light" css={{ backgroundColor: "white" }}>
            {firstName} {lastName}
          </Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item key="new">Account</Dropdown.Item>
            <Dropdown.Item key="copy">Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
    </Navbar>
  );
}

export default NavbarComponent;
