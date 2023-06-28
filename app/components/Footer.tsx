import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

interface ColumnProps {
  title: String;
  links: String[];
}

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2">
      {links.map((link, index) => (
        <Link key={index} href="/">
          {link}
        </Link>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  return (
    <footer className="flex justify-start items-center flex-col w-full gap-20 bg-light-white lg:px-20 py-6 px-5">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src="/logo-purple.svg"
            width={115}
            height={38}
            alt="Flexibble"
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          {footerLinks.map((link, index) =>
            index === 0 ? (
              <FooterColumn title={link.title} links={link.links} />
            ) : (
              <div className="flex-1 flex-col flex gap-4">
                <FooterColumn title={link.title} links={link.links} />
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex justify-between items-center max-sm:flex-col w-full text-sm font-normal">
        <p>@2023 Flexibble. All rights reserved.</p>
        <p className="text-gray">
          <span className="text-black font-semibold">10,214</span> projects
          submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;
