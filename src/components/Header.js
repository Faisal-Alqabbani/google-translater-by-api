import React from "react";
import Link from "./Link";
import "./Header.css";
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item hvr-grow ">
        Accordion
      </Link>
      <Link href="/list" className="item hvr-grow">
        List
      </Link>
      <Link href="/dropdown" className="item hvr-grow">
        Dropdown
      </Link>
      <Link href="/translate" className="item hvr-grow">
        Translate
      </Link>
    </div>
  );
};

export default Header;
