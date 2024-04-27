import classes from "./NavBar.module.css";
export default function NavBar() {
  return( 
    <div className={classes.navbar}>
  <div className={`${classes.header} ${classes.montserrat}`}>All useful calculators</div>

    </div>
  )
}
