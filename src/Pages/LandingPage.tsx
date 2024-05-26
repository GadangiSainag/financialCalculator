import classes from "./LandingPage.module.css";
import Card from "../Components/Card/Card";
import homeData from "../assets/landingPageData.json";
import { useEffect } from "react";
import { clearAllInputs } from "../state/inputSlice";
import { useDispatch } from "react-redux";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearAllInputs());
  }, [dispatch]);

  return (
    <main>
      <div className={classes.cardContainer}>
        {homeData.calculators.map((calculator) => (
          <Card eachCalculator={calculator} key={calculator.id} />
        ))}
      </div>
    </main>
  );
}
