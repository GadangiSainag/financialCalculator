import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
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
import { RootState, useAppDispatch } from "../state/store";
import { calculateOutput, clearAllOutputs } from "../state/outputSlice";
import ReactMarkdown from "react-markdown";
import FaqSection from "../Components/FaqSection";
import SkeletonLoading from "../Components/Skeleton";
const CalculatorPage: React.FC = () => {
  const navigate = useNavigate();
  const [calculatorData, setCalculatorData] = useState<calculatorType | null>(
    null
  );
  const { calculatorId } = useParams<{ calculatorId: string }>();
  const dispatch = useAppDispatch();
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
          navigate("/404");
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
  }, [calculatorId, dispatch, navigate]);

  useEffect(() => {
    if (calculatorData) {
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
    return <SkeletonLoading />;
  }

  return (
    <div>
      <div className={classes.card}>
        <header className={classes.header}>{calculatorData.header}</header>
        <div className={classes.container}>
          <div className={classes.inputs}>
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
              {calculatorData.pie.visible && <PieChart pieData={outputs} pieInfo={calculatorData.pie} />}
            </div>
            {outputs && (
              <TextAreaOutput
                outputInfo={calculatorData.outputs}
                outputValues={outputs}
                pieInfo={calculatorData.pie}
              />
            )}
          </div>
        </div>
      </div>
      <div className={classes.context}>
        <div className={classes.description}>
          <ReactMarkdown>{calculatorData.description}</ReactMarkdown>
        </div>
        <FaqSection faqData={calculatorData.faqs} />
      </div>
    </div>
  );
};

export default CalculatorPage;
