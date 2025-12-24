import React, { useEffect, useState } from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-theme pt-7 pb-5">
      <div className="nike-container text-slate-200">
        <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
          {titles.map((val, i) => (
            <div key={i}>
              <h1 className="text-lg md:text-sm uppercase font-semibold">
                {val.title}
              </h1>
            </div>
          ))}

          {links.map((list, i) => (
            <ul key={i} className="grid gap-1">
              {list.map((link, idx) => (
                <li
                  key={idx}
                  className="text-sm sm:text-xs hover:underline cursor-pointer"
                >
                  {link.link}
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-5 text-center">
          <p className="text-sm">
            © {year} <span className="font-semibold">ShoeStore</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
