import { useEffect, useState } from "react";
import {
  InputObj,
  SliderInputComponent,
  UnitSelectorObj,
} from "../../../utils/types";
import CustomDropdown from "../../Card/CustomDropdown";
import NumberBox from "../Custom Elements/Number/NumberBox";
import classes from "./Styles.module.css";
import { useDispatch } from "react-redux";
import { addSingleValue } from "../../../state/inputSlice";
//import Slider from "../Custom Elements/Slider/Slider";
import InputTitle from "../Custom Elements/Title/InputTitle";
import RadioInputGroup from "../Custom Elements/Radio/RadioSet";

interface Props {
  input: SliderInputComponent["input"];
  liveObj: InputObj | undefined;
  onWheel: (e: React.WheelEvent<HTMLInputElement>) => void;
  onChange: (id: string, value: number) => void;
}
export default function UnitSelectorNum(props: Props) {
  const dispatch = useDispatch();
  const [currentOption, setCurrentOption] = useState<
    UnitSelectorObj | undefined
  >();
  useEffect(() => {
    const initialValue = props.input.unit_selector.data.options.find(
      (each) => each.id === props.input.unit_selector.data.initial_option_id
    )?.value;
    const id = props.input.unit_selector.new_input_id;
    console.log("initial", initialValue);
    if (initialValue !== undefined) {
      console.log("Adding initial value to the Redux store");
      dispatch(
        addSingleValue({
          id: id,
          value: initialValue,
        })
      );
    }
  }, [
    dispatch,
    props.input.unit_selector.data.initial_option_id,
    props.input.unit_selector.data.options,
    props.input.unit_selector.new_input_id,
  ]);

  function onChangeValue(selectedOptionObj: UnitSelectorObj) {
    console.log("......changed,,,, value changed!!");
    const selectedOption = props.input.unit_selector.data.options.find(
      (option) => option.id === selectedOptionObj.id
    );
    if (selectedOption) {
      setCurrentOption(selectedOption);
      props.onChange(
        props.input.unit_selector.new_input_id,
        selectedOption.value
      );
    }
  }
  return (
    <div className={classes.inputUnit}>
      <InputTitle context={props.input.title} />
      <p className={classes.description}>{props.input.description}</p>
      <div className={classes.inputComp}>
        {/* If Slider needed in demanding cases, use this code below */}
        {/* {props.input.slider.is_visible ? (
          <Slider
            input={props.input}
            liveObj={props.liveObj}
            onChange={props.onChange}
          />
        ) : (
          <></>
        )} */}
        <div className={classes.outerNumerical}>
          {/* <CustomDropdown
            data={{
              is_visible: true,
              initial_option_id:
                props.input.unit_selector.data.initial_option_id,
              options: props.input.unit_selector.data.options,
            }}
            onOptionChange={onChangeValue}
          /> */}
          <RadioInputGroup data={{
              is_visible: true,
              initial_option_id:
                props.input.unit_selector.data.initial_option_id,
                radioGroup_name:"Test1",
              options: props.input.unit_selector.data.options,
            }}
            onOptionChange={onChangeValue} />
        </div>
        <NumberBox
          customPrefix={currentOption?.change_prefix_to}
          input={props.input}
          liveObj={props.liveObj}
          onChange={props.onChange}
          onWheel={props.onWheel}
        />
      </div>
    </div>
  );
}
