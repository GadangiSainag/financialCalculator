export interface eachCalculatorIntro {
  id: string;
  header: string;
  sub_text: string;
  footer_image: string;
  cta: {
    calculator_type: string;
    path: string;
    config_file_name : string;
  };
}
export interface sliderInputComponent {
 
  input: {
    id: string;
    title: string;
    description: string;
    text_box: {
      is_visible: boolean;
      placeholder_value: number;
      is_commas_enabled: boolean;
      starting_text: string;
      input_type: string;
    };
    slider: {
      is_visible: boolean;
      min: number;
      minLabel: string;
      max: number;
      maxLabel: string;
      step: number;
    };
  };
}
export interface TextOutputComponent {
  output: {
    id: string;
    title: string;
    front_character?: string;
    back_character?: string;
    formula: {
      formulaName: string;
      parameters: string[];
    };
  };
}
export interface calculatorType  {
  calculator_type: string;
  template_type: string;
  page_title: string;
  header: string;
  input_template_type: string;
  inputs: sliderInputComponent["input"][];
  outputs: TextOutputComponent["output"][];
}

export interface inputObj {
  id: string;
  value: number;
}
export interface InputsState {
  status: "idle" | "error" | "loading";
  data: inputObj[] ;
}
export interface outputObj {
  id: string;
  value: number;
}
export interface OutputState {
  status: "idle" | "error" | "loading";
  data: outputObj[] ;
}