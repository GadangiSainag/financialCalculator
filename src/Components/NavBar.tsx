import classes from "./NavBar.module.css";
import logo from "../../public/favicon.svg"
export default function NavBar() {
  return( 
    <div className={classes.navbar}>
      <img src={logo} alt="Logo" className={classes.logo} />
  <div className={`${classes.header} ${classes.montserrat}`}>All useful calculators</div>

    </div>
  )
}
