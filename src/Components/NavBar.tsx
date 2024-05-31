import classes from "./NavBar.module.css";
import logo from "/favicon.svg";
export default function NavBar() {
  return (
    <div className={classes.navbar}>
      <a href="/">
        <img src={logo} alt="Logo" className={classes.logo} />
      </a>
      <div className={`${classes.header} ${classes.montserrat}`}>
        All useful calculators
      </div>
    </div>
  );
}
