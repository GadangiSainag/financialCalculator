import React from "react";
import { RootState } from "../../state/store";
import { sliderInputComponent } from "../../utils/types";
import makeSelectInputById from "../../utils/selectInputByID";
import classes from "./InputField.module.css";
import { useSelector } from "react-redux";

interface Props {
  input: sliderInputComponent["input"];
  onChange: (id: string, value: number) => void;
}

export default function InputField(props: Props) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Number(event.target.value);
  if (isNaN(newValue)) {
    newValue = props.input.slider.min;
    }
    if (newValue < props.input.slider.min) {
      newValue = props.input.slider.min;
    }
    if (newValue > props.input.slider.max) {
      newValue = props.input.slider.max;
    }
    props.onChange(props.input.id, newValue);
    //dispatch(updateInputValue({ id: props.input.id, value: newValue }));
  };

  const selectInput = makeSelectInputById();
  const liveObj = useSelector((state: RootState) =>
    selectInput(state, props.input.id)
  );

  return (
    <div className={classes.inputUnit}>
      <h2 className={classes.title}>{props.input.title}</h2>
      <p className={classes.description}>{props.input.description}</p>
      <div className={classes.inputComp}>
      {props.input.slider.is_visible && (<div className={classes.sliderInput}>
          
            <input
              type="range"
              id="slider"
              min={props.input.slider.min}
              max={props.input.slider.max}
              step={props.input.slider.step}
              width="250px"
              value={liveObj?.value ?? props.input.text_box.placeholder_value}
              onChange={handleChange}
            />
          
          <div className={classes.constants}>
            <span id={classes.minValue}>{props.input.slider.minLabel}</span>
            <span id={classes.maxValue}>{props.input.slider.maxLabel}</span>
          </div>
        </div>)}

        {props.input.text_box.is_visible && (
          <div className={classes.outerNumerical}>
            <span className={classes.prefix}>
              {props.input.text_box.prefix}
            </span>
            <input
              id={classes.numerical}
              type="number"
              value={liveObj?.value ?? props.input.text_box.placeholder_value}
              step={props.input.slider.step}
              onChange={handleChange}
             
            />
            <span className={classes.suffix}>
              {props.input.text_box.suffix}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
