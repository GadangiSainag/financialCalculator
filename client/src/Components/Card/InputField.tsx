import { useState } from "react";
import classes from "./InputField.module.css";
interface sliderInputComponent {
  input :
    {
      title: string;
      description : string;
      text_box: {
        is_visible: boolean;
        placeholder_value: number;
        is_commas_enabled: boolean;
        starting_text: string;
        input_type: string;
      },
      slider: {
        is_visible: boolean;
        min: number;
        minLable : string;
        max: number;
        maxLable : string;
        step: number;
      },
      input_template_type: string;
    }
  
}
 export default function InputFiled(props:sliderInputComponent){

  const [rangeVal, setRange] = useState<number>(props.input.text_box.placeholder_value);
  const [numVal, setNumVal] = useState<number>(props.input.text_box.placeholder_value);
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setRange(newValue);
    setNumVal(newValue);
  };
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setRange(newValue);
    setNumVal(newValue);
  };




    return(
        <div className={classes.inputUnit}>
          <p className={classes.title}>{props.input.title}</p>
          <p className={classes.discription}>{props.input.description}</p>
          <div className={classes.inputComp}>
            <div className={classes.sliderInput}>
              <input
                type="range"
                id="slider"
                min={props.input.slider.min}
                max={props.input.slider.max}
                step={props.input.slider.step}
                width="250px"
                value={numVal}
                onChange={handleRangeChange}
              ></input>
              <div className={classes.constants}>
                <span id={classes.minValue}>{props.input.slider.minLable}</span>
                <span id={classes.maxValue}>{props.input.slider.maxLable}</span>
              </div>
            </div>
{/* <div className="div"> */}
  <input
              id={classes.numerical}
              type={"number"}
              value={rangeVal}
              step={props.input.slider.step}
              onChange={handleNumberChange}
            ></input>
{/* </div> */}
            
          </div>
        </div>
    )
}