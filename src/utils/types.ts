export interface EachCalculatorIntro {
  id: string;
  header: string;
  sub_text: string;
  footer_image: string;
  cta: {
    calculator_type: string;
    path: string;
    config_file_name: string;
  };
}
export interface DropdownOptionObj {
  id: string;
  option_label: string;
  value: number;
}
export interface DropdownData{
  is_visible: boolean;
    initial_option_id: string;
    options: DropdownOptionObj[];
}
export type RadioOptionObj = DropdownOptionObj;
export interface RadioData {
    is_visible: boolean;
    initial_option_id: string;
    options: RadioOptionObj[];
  
}
export interface UnitSelectorObj extends DropdownOptionObj{
  change_suffix_to?:string;
  change_prefix_to?:string;
}
export interface TextBoxData {
  is_visible: boolean;
  placeholder_value: number;
  is_commas_enabled: boolean;
  prefix: string;
  suffix: string;
  input_type: "number" | "dropdown";
  read_only: boolean;
  dropdown: DropdownData;
}
export interface SliderData {
  is_visible: boolean;
  min: number;
  minLabel: string;
  max: number;
  maxLabel: string;
  step: number;
}
export interface UnitSelector {
        new_input_id: string;
        type: "DROPDOWN" | "RADIO";
        is_visible: boolean;
        input_type: string;   // might expect more here
        data: {
          initial_option_id: string;
          options: UnitSelectorObj[]
        }
      }
export interface SliderInputComponent {
  input: {
    id: string;
    title: string;
    description: string;
    template_type:
      | "SLIDER_NUM"
      | "DROPDOWN"
      | "UNIT_SELECTOR_NUM"
      | "NUM"
      | "DROPDOWN_NUM"
      | "RADIO"
      | "RADIO_SLIDER_NUM";
    text_box : TextBoxData;
    slider: SliderData;
    unit_selector: UnitSelector;
    radio:RadioData ;
  };
}
//OutputField
export interface TextOutputComponent {
  output: {
    id: string;
    title: string;
    front_character: string;
    back_character: string;
    value?: number;
    formula: {
      formulaName: string;
      parameters: string[];
    };
  };
}
export interface PieLabel {
  id: string;
  label: string;
  colour: string;
}
export interface FaqItem {
  question: string;
  answer: string;
}

export interface CalculatorType {
  calculator_type: string;
  template_type: string;
  page_title: string;
  header: string;
  input_template_type: string;
  inputs: SliderInputComponent["input"][];
  outputs: TextOutputComponent["output"][];
  pie: {
    visible: boolean;
    labels: PieLabel[];
  };
  description: string;
  faqs: {
    header: string;
    items: FaqItem[];
  };
}

//InputState
export interface InputObj {
  id: string;
  value: number;
}
export interface InputsState {
  status: "idle" | "error" | "loading";
  data: InputObj[];
}
export interface OutputObj {
  id: string;
  value: number;
}
export interface OutputState {
  status: "idle" | "error" | "loading";
  data: TextOutputComponent["output"][];
}
