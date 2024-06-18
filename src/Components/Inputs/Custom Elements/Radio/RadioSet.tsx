import { useState } from "react";
import { SliderInputComponent, UnitSelectorObj } from "../../../../utils/types";
// import classes from "../../Unit Selector/Styles.module.css";

interface Props {
  data: SliderInputComponent["input"]["radio"];
  onOptionChange: (selectedOption: UnitSelectorObj) => void;
}

export default function RadioInputGroup(props: Props) {
  const initialOptionObj = props.data.options.find(
    (item) => item.id === props.data.initial_option_id
  );

  const [currentOption, setCurrentOption] = useState<
    UnitSelectorObj | undefined
  >(initialOptionObj);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!currentOption) return;

    const selectedRadioButton = props.data.options.find(
      (radioButton) => radioButton.id === event.target.id
    );
    if (selectedRadioButton) {
      setCurrentOption(selectedRadioButton);
      props.onOptionChange(selectedRadioButton);
    }
  };

  return (
    <div>
      {props.data.options.map((eachOption) => {
        return (
          <div key={eachOption.id}>
            <input
              id={eachOption.id}
              type="radio"
              name={props.data.initial_option_id}
              defaultChecked={eachOption.id === props.data.initial_option_id}
              onChange={handleRadioChange}
            />
            <label htmlFor={eachOption.id}>{eachOption.option_label}</label>
          </div>
        );
      })}
    </div>
  );
}
