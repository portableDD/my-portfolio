import { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
  FaBehance,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const nav: { name: string; path: string }[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Project",
    path: "/project",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const NavIcon: { icon: IconType; path: string }[] = [
  {
    icon: FaLinkedinIn,
    path: "https://www.linkedin.com/in/dorcas-emmanuel-65862b193/",
  },
  { icon: FaGithub, path: "https://github.com/portableDD" },
  { icon: FaDiscord, path: "https://discordapp.com/users/732937548690882561" },
  { icon: FaBehance, path: "https://www.behance.net/dorcastemmanuel" },
  { icon: FaWhatsapp, path: "https://wa.me/qr/QRXAJCJVA5LTG1" },
];

export const ContactDetails: { icons: IconType; contact: string }[] = [
  { icons: FaPhoneAlt, contact: "+234 9078562988" },
  { icons: MdEmail, contact: "emmanueltemitopedorcas20@gmail.com" },
];
