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
  FaEye,
} from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { PiCodeFill } from "react-icons/pi";
import { RiQuillPenFill, RiTailwindCssFill } from "react-icons/ri";
// import { SiNestjs } from "react-icons/si";
import Vuesax from "../assets/projects/vuesax.png";
import Underwriter from "../assets/projects/underwrtier.png";
import MiniStore from "../assets/projects/mini-store.png";
import Hosipital from "../assets/projects/hospital.png";
import { SiReactrouter } from "react-icons/si";
import { FaChartBar } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

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

type StaticImageData = {
  src: string;
};

export const ProjectDetails: {
  id: number;
  imageSrc: string | StaticImageData;
  projectName: string;
  shape: boolean;
  icons: IconType[];
  pathicons: { id: number; icon: IconType; path: string; target: string }[];
  desc: string;
}[] = [
  {
    id: 1,
    imageSrc: Vuesax,
    projectName: "Vuesax",
    shape: true,
    pathicons: [
      { id: 1, icon: FaEye, path: `/project/1`, target: "_self" },
      {
        id: 2,
        icon: FaGithub,
        path: "https://github.com/portableDD/vuesax",
        target: "blank",
      },
      {
        id: 3,
        icon: FiExternalLink,
        path: "https://vuesax.netlify.app/",
        target: "blank",
      },
    ],
    icons: [GrReactjs, FaJs, RiTailwindCssFill, SiReactrouter, FaChartBar],
    desc: `
<p>Vuesax is an e-commerce platform that I built entirely on my own, combining modern design with practical functionality. It offers users an easy-to-navigate shopping experience while including several advanced features to enhance usability.</p>  

<p>One key feature is the graphical analysis tool, which provides clear visual insights into product performance and sales trends. This makes it easier for users to understand data and make informed decisions. The platform also integrates tools like a chat system, email functionality, and task management, making it more than just a shopping site—it’s a versatile workspace too.</p>  

<p>When it comes to e-commerce essentials, Vuesax doesn’t miss a beat. It includes a well-organized product catalog, a wishlist feature for saving items, and a smooth checkout process to make online shopping effortless.</p>

<p>This project reflects my ability to design and develop a full-stack application from start to finish. Vuesax is proof of my dedication to creating intuitive and engaging platforms that meet both functional and aesthetic needs.</p>`,
  },
  {
    id: 2,
    imageSrc: Underwriter,
    projectName: "Underwriter Dashboard",
    shape: false,
    pathicons: [
      { id: 1, icon: FaEye, path: `/project/2`, target: "_self" },
      {
        id: 2,
        icon: FaGithub,
        path: "https://github.com/portableDD/Project-html-css",
        target: "blank",
      },
      {
        id: 3,
        icon: FiExternalLink,
        path: "https://underwriter-tangerine.netlify.app/",
        target: "blank",
      },
    ],
    icons: [FaHtml5, FaJs, FaCss3],
    desc: `
<p>Underwriter Dashboard is a comprehensive platform I developed independently to simplify and enhance the workflow for underwriters. The application is designed to provide tools for evaluating and managing financial risks with ease. It features an <strong>Overview</strong> tab, which presents key metrics, summaries, and insights to help underwriters monitor their activities at a glance, and a <strong>Request</strong> tab, where underwriters can efficiently review and process incoming applications or risk assessments.  </p>

<p>The dashboard focuses on functionality and usability, offering a clean and intuitive interface to streamline decision-making and improve productivity. This project highlights my ability to design and build specialized tools that address industry-specific needs, showcasing both technical expertise and user-focused design.</p>
    `,
  },
  {
    id: 3,
    imageSrc: MiniStore,
    projectName: "Glamour Cosmetic Store",
    shape: false,
    pathicons: [
      { id: 1, icon: FaEye, path: `/project/3`, target: "_self" },
      {
        id: 2,
        icon: FaGithub,
        path: "https://github.com/portableDD/HNG-mini-store",
        target: "blank",
      },
      {
        id: 3,
        icon: FiExternalLink,
        path: "https://hng-mini-store.netlify.app/",
        target: "blank",
      },
    ],
    icons: [GrReactjs, FaJs, RiTailwindCssFill, SiReactrouter],
    desc: ` 
<p>Glamour Cosmetic Store is a fully functional mini e-commerce platform that I designed and developed independently. It provides users with a seamless and intuitive shopping experience through its well-structured features. The store includes a <strong>Home</strong> page that offers an inviting introduction to the platform, a <strong>Shop</strong> section where users can browse and explore a variety of cosmetic products, a <strong>Cart</strong> for managing selected items, and an <strong>About</strong> page that provides insight into the store's mission and background. </p> 

<p>The platform is optimized for usability, offering smooth navigation between tabs and an efficient cart system to enhance the shopping experience. This project demonstrates my ability to create compact yet feature-rich e-commerce applications, combining functional design with a user-friendly interface tailored for online shoppers.</p>
`,
  },
  {
    id: 4,
    imageSrc: Hosipital,
    projectName: "Sefa Medical",
    shape: true,
    pathicons: [
      { id: 1, icon: FaEye, path: `/project/4`, target: "_self" },
      {
        id: 2,
        icon: FaGithub,
        path: "https://github.com/portableDD/Sefa_medical_application",
        target: "blank",
      },
      {
        id: 3,
        icon: FiExternalLink,
        path: "https://sefa-medical-application.vercel.app/",
        target: "blank",
      },
    ],
    icons: [GrReactjs, FaJs, RiTailwindCssFill, SiReactrouter, FaChartBar],
    desc: ` 
<p>Sefa Medical is a comprehensive healthcare management platform developed as part of a team effort, where I served as the co-team lead. This project focuses on the <strong>Super Admin Panel</strong>, which provides tools for managing key aspects of a medical facility. The panel includes tabs for <strong>Overview</strong>, <strong>Patients</strong>, <strong>Staff</strong>, <strong>Finance</strong>, <strong>Pharmacy</strong>, <strong>Analytics</strong>, <strong>Labs</strong>, and <strong>User Management</strong>, offering a complete solution for efficient administration.</p>

<p>My contributions were centered on the <strong>Overview</strong> and <strong>Finance</strong> tabs. The <strong>Overview</strong> tab provides a summary of critical metrics, giving the super admin a snapshot of facility operations at a glance. The <strong>Finance</strong> tab handles financial management, including tracking revenue, expenses, and overall financial performance.</p>  

<p>As co-team lead, I collaborated with the team to ensure a cohesive design and functionality, while also delivering my assigned modules with precision and user-focused solutions. This project highlights my leadership skills and ability to contribute effectively to team-based development in creating robust and scalable platforms.</p>
    `,
  },
  {
    id: 5,
    imageSrc: Hosipital,
    projectName: "Sefa Medical",
    shape: true,
    pathicons: [
      { id: 1, icon: FaEye, path: `/project/4`, target: "_self" },
      {
        id: 2,
        icon: FaGithub,
        path: "https://github.com/portableDD/Sefa_medical_application",
        target: "blank",
      },
      {
        id: 3,
        icon: FiExternalLink,
        path: "https://sefa-medical-application.vercel.app/",
        target: "blank",
      },
    ],
    icons: [GrReactjs, FaJs, RiTailwindCssFill, SiReactrouter, FaChartBar],
    desc: "",
  },
];
