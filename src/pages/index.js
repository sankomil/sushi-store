import React, { useState } from "react";
import { Sidebar, Navbar, About, Discover, obj1, obj2 } from "../components";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <About />
      <Discover {...obj1} />
      <Discover {...obj2} />
    </>
  );
};
