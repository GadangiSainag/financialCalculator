import classes from "./LandingPage.module.css";
import Card from "../Components/Card/Card";
import homeData from "../assets/landingPageData.json";

export default function LandingPage() {
  return (
    <div>
      <div className={classes.cardContainer}>
        {homeData.calculators.map((eachCalc) => {
          return <Card eachCalculator={eachCalc} />;
        })}
      </div>
      hello
    </div>
  );
}
