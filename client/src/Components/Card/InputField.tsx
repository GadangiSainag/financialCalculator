import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { updateInputValue } from "../../state/inputSlice";
import { sliderInputComponent } from "../../utils/types";
import makeSelectInputById from "../../utils/selectInputByID";
import classes from "./InputField.module.css";

export default function InputField(props: sliderInputComponent) {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    dispatch(updateInputValue({ id: props.input.id, value: newValue }));
  };

  const selectInput = makeSelectInputById();
  const liveObj = useSelector((state: RootState) => selectInput(state, props.input.id));

  return (
    <div className={classes.inputUnit}>
      <h2 className={classes.title}>{props.input.title}</h2>
      <p className={classes.description}>{props.input.description}</p>
      <div className={classes.inputComp}>
        <div className={classes.sliderInput}>
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
        </div>
        <input
          id={classes.numerical}
          type="number"
          value={liveObj?.value ?? props.input.text_box.placeholder_value}
          step={props.input.slider.step}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
