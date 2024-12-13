import { IconType } from "react-icons";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
  FaBehance,
  FaWhatsapp,
  FaPhoneAlt,
  FaJs,
  FaCss3,
  FaBootstrap,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { PiCodeFill } from "react-icons/pi";
import { RiQuillPenFill, RiTailwindCssFill } from "react-icons/ri";
// import { SiNestjs } from "react-icons/si";

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

export const ContactIcons: {
  icon: IconType;
  path: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  label: string;
}[] = [
  {
    icon: FaBehance,
    path: "https://www.behance.net/dorcastemmanuel",
    position: { top: "5%", left: "40%" },
    label: "Behance",
  },
  {
    icon: FaGithub,
    path: "https://github.com/portableDD",
    position: { top: "25%", left: "8%" },
    label: "Github",
  },
  {
    icon: FaDiscord,
    path: "https://discordapp.com/users/732937548690882561",
    position: { top: "25%", right: "8%" },
    label: "Disord",
  },
  {
    icon: FaLinkedinIn,
    path: "https://www.linkedin.com/in/dorcas-emmanuel-65862b193/",
    position: { top: "55%", left: "5%" },
    label: "LinkedIn",
  },
  {
    icon: FaWhatsapp,
    path: "https://wa.me/qr/QRXAJCJVA5LTG1",
    position: { top: "55%", right: "5%" },
    label: "Whatsapp",
  },
  {
    icon: FaPhoneAlt,
    path: "tel:+234 9078562988",
    position: { bottom: "5%", left: "25%" },
    label: "Phone Number",
  },
  {
    icon: MdEmail,
    path: "mailto:emmanueltemitopedorcas20@gmail.com",
    position: { bottom: "5%", right: "25%" },
    label: "Email",
  },
];

export const Stack: { icons: IconType; stack: string }[] = [
  { icons: PiCodeFill, stack: "FRONTEND DEVELOPER" },
  // { icons: PiCodeFill, stack: "BackEND DEVELOPER" },
  { icons: RiQuillPenFill, stack: "UI/UX Designer" },
];

export const SkillDetails: { icons: IconType; skill: string }[] = [
  { icons: FaJs, skill: "Javascript" },
  { icons: BiLogoTypescript, skill: "Typescript" },
  { icons: GrReactjs, skill: "React JS" },
  { icons: RiTailwindCssFill, skill: "Tailwind CSS" },
  { icons: FaCss3, skill: "CSS" },
  { icons: FaHtml5, skill: "HTML" },
  { icons: FaBootstrap, skill: "Bootstrap" },
  { icons: FaNodeJs, skill: "Node Js" },
  // { icons: SiNestjs, skill: "Nest Js" },
  { icons: RiQuillPenFill, skill: "UI/UX Design" },
];
