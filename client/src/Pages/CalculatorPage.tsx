import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CalculatorPage.module.css";
import InputField from "../Components/Card/InputField";
import PieChart from "../Components/DrawPie";
import TextAreaOutput from "../Components/TextOutputArea";
import allData from "../assets/landingPageData.json";
import { setPageError, setPageSuccess } from "../state/calculatorSlice";
import fetchCalciData from "../utils/fetchData";
import {
  clearAllInputs,
  fetchDataFromStore,
  updateInputValue,
} from "../state/inputSlice";
import { calculatorType, sliderInputComponent } from "../utils/types";
import { RootState } from "../state/store";
import { calculateOutput, clearAllOutputs } from "../state/outputSlice";
import ReactMarkdown from "react-markdown";
import FaqSection from "../Components/FaqSection";
const CalculatorPage: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState<calculatorType | null>(
    null
  );
  const { calculatorId } = useParams<{ calculatorId: string }>();
  const dispatch = useDispatch();
  const inputs = useSelector((state: RootState) => state.inputs.data);
  const outputs = useSelector((state: RootState) => state.outputs.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const liveCalculator = allData.calculators.find(
          (calculator) => calculator.cta.path === calculatorId
        );

        if (liveCalculator) {
          const data = await fetchCalciData(
            liveCalculator.cta.config_file_name
          );

          setCalculatorData(data);
          dispatch(setPageSuccess(data));

          dispatch(fetchDataFromStore());
        } else {
          dispatch(setPageError("Calculator not found"));
        }
      } catch (error) {
        dispatch(setPageError(error));
      }
    };
    // return () => {
    dispatch(clearAllInputs());
    dispatch(clearAllOutputs());
    // }
    fetchData();
  }, [calculatorId, dispatch]);

  useEffect(() => {
    if (calculatorData) {
      console.log("656");

      dispatch(calculateOutput({ inputs, formulas: calculatorData.outputs }));
    }
  }, [inputs, dispatch, calculatorData]);

  useEffect(() => {
    if (calculatorData?.page_title) {
      document.title = calculatorData.page_title.toUpperCase();
    }
  }, [calculatorData?.page_title]);

  const handleChange = (id: string, value: number) => {
    dispatch(updateInputValue({ id, value }));
  };

  if (!calculatorData) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }

  return (
    <div>
      <div className={classes.card}>
        <header>{calculatorData.header}</header>
        <div className={classes.container}>
          <div className={classes.divi}>
            {calculatorData.inputs &&
              calculatorData.inputs.map(
                (eachInput: sliderInputComponent["input"]) => (
                  <div className={classes.element} key={eachInput.id}>
                    <InputField input={eachInput} onChange={handleChange} />
                  </div>
                )
              )}
          </div>
          <div className={classes.output}>
            <div style={{ margin: "60px auto" }}>
              {<PieChart pieData={outputs} pieInfo={calculatorData.pie} />}
            </div>
            {outputs && (
              <TextAreaOutput
                outputInfo={calculatorData.outputs}
                outputValues={outputs}
              />
            )}
          </div>
        </div>
      </div>
      <div className={classes.context}>
        <div className={classes.description}>
          <ReactMarkdown>{calculatorData.description}</ReactMarkdown>
        </div>
       
      <FaqSection />
      </div>
    </div>
  );
};

export default CalculatorPage;
