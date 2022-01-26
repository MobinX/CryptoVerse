import {
  RiHome2Line,
  RiLineChartLine,
  RiExchangeDollarLine,
} from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SideNav = ({ className = "" }) => {
  const links = [
    { icon: RiHome2Line, txt: "Home", path: "/" },
    { icon: RiLineChartLine, txt: "Chart", path: "/cart" },
    { icon: RiExchangeDollarLine, txt: "Exchange", path: "/exchange" },
    { icon: FaRegNewspaper, txt: "News", path: "News" },
  ];
  return (
    <div className={`col px-7 text-primary items-start ${className}`}>
      {links.map((link, key) => (
        <Link
          to={link.path}
          className="row no-underline text-primary hover:text-secondary py-[2px]"
          key={key}
        >
          {" "}
          {<link.icon />} <p>{link.txt}</p>{" "}
        </Link>
      ))}
    </div>
  );
};
