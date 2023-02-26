import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <h3>Logo</h3>
      <ul className={styles.containerLi}>
        <li>Nosotros</li>
        <li>Comprar</li>
        <li>Menu</li>
        <li>Ayuda</li>
      </ul>
      <CartWidget />
    </div>
  );
};
export default Navbar;
