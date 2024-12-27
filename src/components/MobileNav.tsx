import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

interface MobileNavProps {
  nav: { name: string; path: string }[]; // Ensure proper type for `nav`
  onClose: () => void; // Function to close the mobile nav
}

const MobileNav = ({ nav, onClose }: MobileNavProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
        onClick={onClose} // Close the nav when the overlay is clicked
      ></div>

      {/* Sidebar */}
      <div className="fixed top-0 right-0 w-[70%] bg-layoutBg min-h-screen z-50 border-l border-peach shadow-navbar transition-transform transform">
        <div className="flex justify-between items-center p-4 border-b border-peach">
          <h2 className="logo font-oleo text-3xl">DT</h2>
          <MdClose className="text-2xl cursor-pointer" onClick={onClose} />
        </div>
        <ul className="flex flex-col mt-4 space-y-4">
          {nav.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={onClose} // Close the sidebar when a menu item is clicked
                className="block px-6 py-3 border-b border-peach focus:text-peach"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
