/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => (
  <nav>
    <Logo />
    <ul>
      <li>
        <a href="#nos-services">Nos services {() => (window.document.location.hash = "#nos-services")}</a>
      </li>
      <li>
        <a href="#nos-realisations">Nos réalisations {() => (window.document.location.hash = "#nos-realisations")}</a>
      </li>
      <li>
        <a href="#notre-equipe">Notre équipe</a>
      </li>
    </ul>
    <Button title="Contact" onClick={() => (window.document.location.hash = "#contact")}>
      Contact
    </Button>
    
  </nav>
);

export default Menu;
