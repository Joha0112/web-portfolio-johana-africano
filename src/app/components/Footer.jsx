import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-black"> {/* Agrega la clase bg-black para el fondo negro */}
      <div className="container p-12 flex justify-between">
    <span className= "text-2xl md:text-5xl px-4 py-2">
    <span className="text-blue-500">JOHANA</span>{" "}
    <span className="text-green-500">AFRICANO</span>
  </span>
 <p className="text-slate-600 font-bold mt-4">All rights reserved.</p>
 </div>
</footer>
  );
};

export default Footer;