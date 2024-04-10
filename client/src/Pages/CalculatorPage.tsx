import classes from "./CalculatorPage.module.css";

export default function CalculatorPage() {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.inputUnit}>
          <p className={classes.title}>Loan Amount</p>
          <p className={classes.discription}></p>
          <input type="range"></input>
          <input type="number"></input>
        </div>
      </div>
     
    </div>
  );
}
