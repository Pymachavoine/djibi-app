// import Link from 'next/link';
// import styled from 'styled-components';

// const Navbar = () => {
//   return (
    
//     <nav>
//       <ul>
//         <li>
//           <Link href="Djibi/">
//             Djibi
//           </Link>
//         </li>
//         <li>
//           <Link href="/Concerts">
//             Concerts
//           </Link>
//         </li>
//         <li>
//           <Link href="/Musique">
//             Musique
//           </Link>
//         </li>
//         <li>
//           <Link href="/Contact">
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import Link from 'next/link';
import styles from '../src/Navbar/styles.css';


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.logo}>YERIMAYO</a>
      </Link>
      <div className={styles.navLinks}>
        <ul>
          <li className={styles.active}>
            <Link href="/">
              <a>Djibi</a>
            </Link>
          </li>
          <li>
            <Link href="/concerts">
              <a>Concerts</a>
            </Link>
          </li>
          <li>
            <Link href="/musique">
              <a>Musique</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <img src="../src/Navbar/menu-btn.png" alt="menu hamburger" className={styles.menuHamburger} />
    </nav>
  );
}

export default Navbar;


