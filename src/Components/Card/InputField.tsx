import React, { useState } from "react";
import { RootState } from "../../state/store";
import { sliderInputComponent } from "../../utils/types";
import makeSelectInputById from "../../utils/selectInputByID";
import classes from "./InputField.module.css";
import { useSelector } from "react-redux";
import CustomDropdown from "./CustomDropdown";
interface Props {
  input: sliderInputComponent["input"];
  onChange: (id: string, value: number) => void;
}

export default function InputField(props: Props) {
  const [, setError] = useState<string | null>(null);
  const handleNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Number(event.target.value);
    if (isNaN(newValue)) {
      newValue = props.input.slider.min;
    }
    if (newValue < props.input.slider.min) {
      if (newValue < 0) {
        newValue = 0;
      }
      setError(`Value cannot be less than ${props.input.slider.min}`);
      document
        .querySelector(`#parent_${event.target.id}`)
        ?.classList.add(classes.errorTextBox);
      // return;
    } else {
      setError(null); // Clear error message if value is valid
      document
        .querySelector(`#parent_${event.target.id}`)
        ?.classList.remove(classes.errorTextBox);
    }
    if (newValue > props.input.slider.max) {
      newValue = props.input.slider.max;
    }

    props.onChange(props.input.id, newValue);
    //dispatch(updateInputValue({ id: props.input.id, value: newValue }));
  };
  const handleDropdownChange = (optionValue:number) => {
    props.onChange(props.input.id, optionValue);
  };
  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    target.blur();
    e.stopPropagation();
    setTimeout(() => {
      target.focus();
    }, 0);
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
        {props.input.slider.is_visible && (
          <div className={classes.sliderInput}>
            <input
              type="range"
              id={props.input.id}
              min={props.input.slider.min}
              max={props.input.slider.max}
              step={props.input.slider.step}
              width="250px"
              value={liveObj?.value ?? props.input.text_box.placeholder_value}
              onChange={handleNumChange}
            />

            <div className={classes.constants}>
              <span id={classes.minValue} className={classes.preventSelect}>{props.input.slider.minLabel}</span>
              <span id={classes.maxValue} className={classes.preventSelect}>{props.input.slider.maxLabel}</span>
            </div>
          </div>
        )}

        {props.input.text_box.input_type === "number" && (
          <div
            className={classes.outerNumerical}
            id={`parent_${props.input.id}`}
          >
            <span className={classes.prefix}>
              {props.input.text_box.prefix}
            </span>
            <input
              id={props.input.id}
              type={"number"}
              value={liveObj?.value ?? props.input.text_box.placeholder_value}
              step={props.input.slider.step}
              onChange={handleNumChange}
              onWheel={handleWheel}
              min={props.input.slider.min}
              readOnly={props.input.text_box.read_only}
            />
            <span className={classes.suffix}>
              {props.input.text_box.suffix}
            </span>
          </div>
        )}
        {props.input.text_box.input_type === "dropdown" && (
          <div
            className={classes.outerNumerical}
            id={`parent_${props.input.id}`}
          >
            <CustomDropdown
              data={props.input.text_box.dropdown}
              onOptionChange={handleDropdownChange}
            />
            <span className={classes.suffix}>{/* Svg arrow down */}</span>
          </div>
        )}
      </div>
    </div>
  );
}
