import calculatorData from "../assets/sip_calculator_data.json";
import classes from "./CalculatorPage.module.css";
import InputFiled from "../Components/Card/InputField";
import PieChart from "../Components/DrawPie";
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
                  <InputFiled input={eachInput} />
                </div>
              );
            })}
          </div>
          <div className={classes.output}>
            {/* Output fields */}
            <div style={{ width: "300px", margin: "40px auto" }}>
              <PieChart />
            </div>
            <h1>₹2,14,522 /month</h1>
            <div className={classes.parent}>
              <div className={classes.div1}>
                <div
                  style={{
                    width: "15px",
                    backgroundColor: "rgba(25, 26, 36, 1)",
                    height: "15px",
                  }}
                ></div>

                <h2>Principal amount</h2>
              </div>
              <div className={classes.div2}>
                <div
                  style={{
                    width: "15px",
                    backgroundColor: "rgba(77, 100, 141, 1)",
                    height: "15px",
                  }}
                ></div>

                <h2>Intrest amount</h2>
              </div>
              <div className={classes.div3}>
              <h3> Total Amount Payable </h3>
                <h2>dkjgssgsfg</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default CalculatorPage;
