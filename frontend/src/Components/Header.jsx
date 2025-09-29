import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import logo from '../assets/Images/LogoMV.png';
import FixedButtons from './FixedButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const phoneNumber = "tel:+919311106989";
  const whatsappUrl = "https://wa.me/919311106989?text=Hi";

  useEffect(() => {
    // Determine the active link based on the current URL path or hash
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    if (currentHash) {
      setActiveLink(currentHash);
    } else if (currentPath === '/') {
      setActiveLink('/');
    }
  }, []);

  const getLinkClass = (href) => {
    const isHome = href === '/' && activeLink === '/';
    const isSection = href.startsWith('#') && activeLink === href;
    const isPage = href.startsWith('/') && href !== '/' && activeLink === href;

    const baseClasses = 'font-medium transition duration-300';
    const activeClasses = 'text-primary-green';
    const inactiveClasses = 'text-dark-charcoal hover:text-primary-green';

    if (isHome || isSection || isPage) {
      return `${baseClasses} ${activeClasses}`;
    }
    
    return `${baseClasses} ${inactiveClasses}`;
  };

  return (
    <header className="fixed w-full z-50 bg-primary-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center space-x-8 h-full w-full">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Mind Vriksha Logo" className="h-16" />
          </a>

          <div className="flex-grow flex justify-center items-center space-x-8">
            <a href="/" className={getLinkClass('/')}>Home</a>
            <a href="#About" className={getLinkClass('#About')}>About us</a>
            <a href="#Service" className={getLinkClass('#Service')}>Services</a>
            <a href="#Location" className={getLinkClass('#Location')}>Location</a>
            <a href="#Blog" className={getLinkClass('#Blog')}>Blog</a>
            <a href="#Consultation" className={getLinkClass('/consultationform')}>Contact</a>
          </div>

          <a href={phoneNumber} className="bg-primary-green hover:bg-secondary-green text-white font-semibold py-3 px-4 rounded-2xl transition duration-300 flex items-center space-x-2">
            <FaPhoneAlt />
            <span>+91 9311106989</span>
          </a>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden w-full flex justify-between pr-4 items-center">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Mind Vriksha Logo" className="h-12" />
          </a>
          <button onClick={() => setIsOpen(true)} aria-label="Open navigation menu">
            <FaBars
              className="text-4xl text-white bg-[#7f6044] hover:bg-[#6f543c] p-1 rounded -ml-4 transition-all duration-200 cursor-pointer"/>
          </button>
        </div>
      </nav>

      {/* Mobile Pop-up Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 transform transition-transform ease-in-out duration-300 md:hidden">
          <div className="flex justify-between items-center p-4">
            <img src={logo} alt="Mind Vriksha Logo" className="h-12" />
            <button onClick={() => setIsOpen(false)} aria-label="Close navigation menu">
              <FaTimes className="text-3xl text-dark-charcoal" />
            </button>
          </div>
          <nav className="flex flex-col space-y-8 mt-12 pl-8">
            <a href="/" onClick={() => setIsOpen(false)} className={getLinkClass('/')}>Home</a>
            <a href="#About" onClick={() => setIsOpen(false)} className={getLinkClass('#About')}>About us</a>
            <a href="#Service" onClick={() => setIsOpen(false)} className={getLinkClass('#Service')}>Services</a>
            <a href="#Location" onClick={() => setIsOpen(false)} className={getLinkClass('#Location')}>Locations</a>
            <a href="#Blog" onClick={() => setIsOpen(false)} className={getLinkClass('#Blog')}>Blog</a>
            <a href="#Consultation" onClick={() => setIsOpen(false)} className={getLinkClass('/consultationform')}>Contact</a>
          </nav>
        </div>
      )}

        <FixedButtons />
    </header>
  );
};

export default Header;


// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
// import logo from '../assets/Images/logo-MV.png';
// import FixedButtons from './FixedButton';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const phoneNumber = "tel:+919310199510";
//   const whatsappUrl = "https://wa.me/919310199510?text=Hi";

//   return (
//     <header className="fixed w-full z-50 bg-primary-skin shadow-md">
//       <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Desktop Header */}
//         <div className="hidden md:flex items-center space-x-8 h-full w-full">
//           <a href="/" className="flex items-center">
//             <img src={logo} alt="Mind Vriksha Logo" className="h-16" />
//           </a>

//           <div className="flex-grow flex justify-center items-center space-x-8">
//             <a href="/" className="text-dark-charcoal hover:text-primary-green font-medium transition duration-300">Home</a>
//             <a href="#About" className="text-dark-charcoal hover:text-primary-green font-medium transition duration-300">About us</a>
//             <a href="#Service" className="text-dark-charcoal hover:text-primary-green font-medium transition duration-300">Services</a>
//             <a href="#" className="text-dark-charcoal hover:text-primary-green font-medium transition duration-300">Location</a>
//             <a href="#Blog" className="text-dark-charcoal hover:text-primary-green font-medium transition duration-300">Blog</a>
//             <a href="/consultationform" className="text-dark-charcoal hover:text-primary-green font-medium transition duration-300">Contact</a>
//           </div>

//           <a href={phoneNumber} className="bg-primary-green hover:bg-secondary-green text-white font-semibold py-3 px-4 rounded-2xl transition duration-300 flex items-center space-x-2">
//             <FaPhoneAlt />
//             <span>+91 9310199510</span>
//           </a>
//         </div>

//         {/* Mobile Header */}
//         <div className="md:hidden w-full flex justify-between items-center">
//           <a href="/" className="flex items-center">
//             <img src={logo} alt="Mind Vriksha Logo" className="h-12" />
//           </a>
//           <button onClick={() => setIsOpen(true)} aria-label="Open navigation menu">
//             <FaBars
//               className="text-3xl text-white bg-[#7f6044] hover:bg-[#6f543c] p-1 rounded -ml-4 transition-all duration-200 cursor-pointer"/>
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Pop-up Menu */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-white z-50 transform transition-transform ease-in-out duration-300 md:hidden">
//           <div className="flex justify-between items-center p-4">
//             <img src={logo} alt="Mind Vriksha Logo" className="h-12" />
//             <button onClick={() => setIsOpen(false)} aria-label="Close navigation menu">
//               <FaTimes className="text-3xl text-dark-charcoal" />
//             </button>
//           </div>
//           <nav className="flex flex-col space-y-8 mt-12 pl-8">
//             <a href="/" onClick={() => setIsOpen(false)} className="text-2xl text-dark-charcoal hover:text-primary-green font-semibold transition duration-300">Home</a>
//             <a href="#About" onClick={() => setIsOpen(false)} className="text-2xl text-dark-charcoal hover:text-primary-green font-semibold transition duration-300">About us</a>
//             <a href="#Service" onClick={() => setIsOpen(false)} className="text-2xl text-dark-charcoal hover:text-primary-green font-semibold transition duration-300">Services</a>
//             <a href="#" onClick={() => setIsOpen(false)} className="text-2xl text-dark-charcoal hover:text-primary-green font-semibold transition duration-300">Locations</a>
//             <a href="#Blog" onClick={() => setIsOpen(false)} className="text-2xl text-dark-charcoal hover:text-primary-green font-semibold transition duration-300">Blog</a>
//             <a href="/consultationform" onClick={() => setIsOpen(false)} className="text-2xl text-dark-charcoal hover:text-primary-green font-semibold transition duration-300">Contact</a>
//           </nav>
//         </div>
//       )}

//         <FixedButtons />
//     </header>
//   );
// };

// export default Header;
