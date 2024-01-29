import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Services", path: "/services" },
  ];
  return (
    <nav className="md:container mx-auto relative">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <span>{open === true ? <Bars3Icon className="h-6 w-6 text-blue-500 cursor-pointer" />
         : <XMarkIcon className="h-6 w-6 text-blue-500 cursor-pointer" />}</span>
      </div>

      <ul className={`text-right md:flex gap-10 justify-end p-5 absolute inset-x-0 bg-orange-500 duration-500 md:static ${open ? 'top-6' : '-top-48'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
      <h1 className='text-7xl text-center'>Hello from tailwind</h1>
    </nav>
  );
};

export default NavBar;
