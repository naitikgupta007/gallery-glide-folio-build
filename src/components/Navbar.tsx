
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-portfolio-dark">
            Portfolio
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover-underline inline-block py-2 px-1 ${
                  location.pathname === link.path
                    ? "text-portfolio-primary font-medium"
                    : "text-portfolio-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/admin" 
              className="text-white bg-portfolio-primary hover:bg-blue-600 px-4 py-2 rounded-md transition-colors duration-200"
            >
              Admin
            </Link>
          </div>
          
          <div className="md:hidden">
            <button className="text-portfolio-dark p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
