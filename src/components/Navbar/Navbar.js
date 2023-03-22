import React from "react";
import { Navbar, Dropdown, Avatar } from "@nextui-org/react";
import { IoIosMenu } from "react-icons/io";
import Logo from "../../assets/man.avif";

function NavbarComponent() {
  return (
    <Navbar>
      <Navbar.Brand>
        <IoIosMenu style={{ fontSize: "35px" }} />
        logo
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
            DE
          </Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item key="new">DE</Dropdown.Item>
            <Dropdown.Item key="copy">ENG</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Link>
          <Avatar squared src={Logo} css={{ width: "60px", height: "60px" }} />
        </Navbar.Link>
        <Dropdown>
          <Dropdown.Button color="light" css={{ backgroundColor: "white" }}>
            Full Name
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
