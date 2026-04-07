import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto px-6 text-sm text-muted-foreground">
      <div className="w-full h-px bg-border my-16" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-3 pb-10">
        <p className="text-lg leading-none">
          © {new Date().getFullYear()} Sithu Aung. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
