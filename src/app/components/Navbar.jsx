// "use client"; // Make sure this is at the top to use hooks like useState

// import { useState } from "react";
// import Link from "next/link";
// import { FaSearch } from "react-icons/fa"; // Importing magnifying glass icon
// import styles from "./Navbar.module.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownVisible(!isDropdownVisible);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logoContainer}>
//         <img src="LOGO (1) 2 (1).png" alt="Logo" className={styles.logo} />
//       </div>

//       {/* Search Bar */}
//       <div className={styles.searchContainer}>
//         <FaSearch className={styles.searchIcon} />
//         <input
//           type="text"
//           placeholder="Search creators/products"
//           className={styles.searchBar}
//         />
//       </div>

//       {/* Centered Links */}
//       <div className={styles.menuContainer}>
//         <ul className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
//           <li>
//             <Link href="/">Fav Creators</Link>
//           </li>
//           <li>
//             <Link href="/products">Merchandise</Link>
//           </li>
//           <li>
//             <Link href="/about">Brand</Link>
//           </li>
//           <li>
//             <Link href="/contact">Digital</Link>
//           </li>
//         </ul>
//       </div>

//       {/* Image next to the links to toggle the dropdown */}
//       <div className={styles.dropdownToggleContainer}>
//         <img
//           src="Frame 1265.png" // Image for the toggle button (use your own image path)
//           alt="Toggle Menu"
//           className={styles.toggleIcon}
//           onClick={toggleDropdown}
//         />
//       </div>

//       {/* Dropdown menu (toggle visibility) */}
//       {isDropdownVisible && (
//         <div className={styles.dropdownMenu}>
//           <img
//             src="Loggedin options.png" // Image for the dropdown menu (use your own image path)
//             alt="Dropdown Menu"
//             className={styles.dropdownImage}
//           />
//         </div>
//       )}

//       <button onClick={toggleMenu} className={styles.menuToggle}>
//         {isOpen ? "Close" : "Menu"}
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // For desktop dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img
          src="LOGO (1) 2 (1).png" // Corrected path assuming the image is in the public folder
          alt="Logo"
          className={styles.logo}
        />
      </div>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search creators/products"
          className={styles.searchBar}
        />
      </div>

      {/* Centered Links for Desktop */}
      <div className={styles.menuContainer}>
        <ul className={styles.menu}>
          <li>
            <Link href="/">Fav Creators</Link>
          </li>
          <li>
            <Link href="/products">Merchandise</Link>
          </li>
          <li>
            <Link href="/about">Brand</Link>
          </li>
          <li>
            <Link href="/contact">Digital</Link>
          </li>
        </ul>
      </div>

      {/* Desktop Dropdown Toggle - Hidden on Mobile */}
      <div className={styles.dropdownToggleContainer}>
        <img
          src="Frame 1265.png" // Corrected path assuming the image is in the public folder
          alt="Toggle Menu"
          className={styles.toggleIcon}
          onClick={toggleDropdown}
        />
      </div>

      {/* Dropdown Menu for Desktop - Hidden on Mobile */}
      {isDropdownVisible && (
        <div className={styles.dropdownMenu}>
          <img
            src="Loggedin options.png" // Corrected path assuming the image is in the public folder
            alt="Dropdown Menu"
            className={styles.dropdownImage}
          />
        </div>
      )}

      {/* Hamburger Icon for Mobile */}
      <button onClick={toggleMenu} className={styles.menuToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`}>
          {/* Close Button */}
          <button onClick={closeMenu} className={styles.closeButton}>
            &times;
          </button>

          {/* Image Section */}
          <img
            src="user.png" // Replace with your actual image path
            alt="Overlay Image"
            className={styles.menuImage}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
