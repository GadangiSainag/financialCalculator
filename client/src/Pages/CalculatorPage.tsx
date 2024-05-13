import calculatorData from "../assets/sip_calculator_data.json";
import classes from "./CalculatorPage.module.css";
import InputField from "../Components/Card/InputField";
import PieChart from "../Components/DrawPie";
import TextAreaOutput from "../Components/TextOutputArea";

export default function CalculatorPage() {
  return (
    <div>
      <div className={classes.card}>
        {/* card component contains input fields, and result, graph in future */}

        <header>{calculatorData.header}</header>
        <div className={classes.container}>

          <div className={classes.divi}>
            {calculatorData.inputs.map((eachInput) => {
              return (
                <div className={classes.element}>
                  <InputField input={eachInput} />
                </div>
              );
            })}
          </div>
            {/* ---------------------------Output fields ---------------------------------------*/}
          <div className={classes.output}>
            <div style={{ width: "fit-content", margin: "60px auto" }}>
              <PieChart />
            </div>
          <TextAreaOutput output = {calculatorData.outputs} />
          </div>
        </div>
      </div>
    </div>
  );
}
// export default CalculatorPage;
