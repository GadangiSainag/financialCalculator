import calculatorData from '../assets/sip_calculator_data.json'
import classes from "./CalculatorPage.module.css";
import InputFiled from "../Components/Card/InputField";
export default function CalculatorPage() {
  
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.divi}>
          {calculatorData.inputs.map((eachInput) => {
            return(
            <div className={classes.warm}>
            <InputFiled input={eachInput} />

            </div>
            )
})}
        
       
        </div>
        <div className="div">
          
        </div>
        
      </div>
    </div>
  );
}
// export default CalculatorPage;
