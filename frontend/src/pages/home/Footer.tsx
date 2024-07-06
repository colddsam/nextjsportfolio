"use client"
// components/Footer.js
const Footer = () => {
  return (
    <footer className="h-16 w-screen flex flex-row justify-center items-center text-center bg-black/[0.96]">
      <p className=" text-sm md:text-base inred text-neutral-300 w-full text-center mx-auto">&copy; {new Date().getFullYear()} colddsam. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
