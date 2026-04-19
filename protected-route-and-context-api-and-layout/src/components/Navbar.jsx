import { Link } from 'react-router-dom';

const Navbar = () => {
  const listItems = [
    { to: '/login', name: 'Login' },
    { to: '/signup', name: 'SignUp' },
    { to: '/', name: 'Home' },
    { to: '/profile', name: 'Profile' },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      {/* Brand Name */}
      <Link to="/" className="text-xl font-bold text-gray-800 tracking-tight">
        AYAN<span className="text-blue-600">.</span>
      </Link>

      {/* Nav Links */}
      <div className="flex gap-8">
        {listItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Simple Action Link/Button */}
      <Link 
        to="/resume" 
        className="text-sm font-semibold text-blue-600 hover:underline"
      >
        View CV
      </Link>
    </nav>
  );
};

export default Navbar;