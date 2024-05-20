import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import classes from "./CalculatorPage.module.css";
import InputField from "../Components/Card/InputField";
import PieChart from "../Components/DrawPie";
import TextAreaOutput from "../Components/TextOutputArea";
import allData from "../assets/landingPageData.json";
import { setPageError, setPageSuccess } from "../state/calculatorSlice";
import fetchCalciData from "../utils/fetchData";
import { fetchDataFromStore, updateInputValue } from "../state/inputSlice";
import { calculatorType, sliderInputComponent } from "../utils/types";

const CalculatorPage: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState<calculatorType | null>(
    null
  );
  const { calculatorId } = useParams<{ calculatorId: string }>();
  const dispatch = useDispatch();

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
          dispatch(setPageSuccess(data));
          setCalculatorData(data);
          dispatch(fetchDataFromStore());
        } else {
          dispatch(setPageError("Calculator not found"));
        }
      } catch (error) {
        dispatch(setPageError(error.message));
      }
    };

    fetchData();
  }, [calculatorId, dispatch]);

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
            <div style={{ width: "fit-content", margin: "60px auto" }}>
              <PieChart />
            </div>
            {calculatorData.outputs && (
              <TextAreaOutput output={calculatorData.outputs} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
