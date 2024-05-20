// import classes from "./CalculatorPage.module.css";
// import InputField from "../Components/Card/InputField";
// import { sliderInputComponent } from "../utils/types";
// import PieChart from "../Components/DrawPie";
// import TextAreaOutput from "../Components/TextOutputArea";
// import allData from "../assets/landingPageData.json";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import React from "react";
// import { useDispatch } from "react-redux";
// import { setPageError, setPageSuccess } from "../state/calculatorSlice";
// import fetchCalciData from "../utils/fetchData";
// import { fetchDataFromStore } from "../state/inputSlice";

// const CalculatorPage: React.FC = () => {
//   const [calculatorData, setCalculatorData] = useState<any>({}); // Change 'any' to the type of your JSON data
//   const { calculatorId } = useParams<{ calculatorId: string }>();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     // Function to fetch data based on the URL
//     const fetchData = async () => {
//       const liveCalculator = allData.calculators.find(
//         (calculator) => calculator.cta.path === calculatorId
//       );

//       if (liveCalculator) {
//         fetchCalciData(liveCalculator.cta.config_file_name)
//           .then((data) => {
//             // Dispatch success action with the received data
//             dispatch(setPageSuccess(data));
//             setCalculatorData(data);
//             dispatch(fetchDataFromStore());
//           })
//           .catch((error) => {
//             // Dispatch error action with the error message
//             dispatch(setPageError(error.message));
//           });
//       }
//     };
//     // Call the fetchData function
//     fetchData();
//   }, [calculatorId, dispatch]); // Only run this effect once on component mount

//   document.title =
//     calculatorData.page_title && `${calculatorData.page_title.toUpperCase()}`;

//   // console.log(calculatorData);
//   // if (calculatorData === undefined)
//   //   return <div style={{color:"white"}}>Loading...</div>;
//   return (
//     <div>
//       <div className={classes.card}>
//         {/* card component contains input fields, and result, graph in future */}
//         <header>{calculatorData.header}</header>
//         <div className={classes.container}>
//           <div className={classes.divi}>
//             {calculatorData.inputs &&
//               calculatorData.inputs.map(
//                 (
//                   eachInput: sliderInputComponent["input"] // Function to fetch data based on the URL
//                 ) => {
//                   return (
//                     <div className={classes.element} key={eachInput.id}>
//                       <InputField input={eachInput} />
//                     </div>
//                   );
//                 }
//               )}
//           </div>
//           {/* ---------------------------Output fields ---------------------------------------*/}
//           <div className={classes.output}>
//             <div style={{ width: "fit-content", margin: "60px auto" }}>
//               <PieChart />
//             </div>
//             {calculatorData.outputs && (
//               <TextAreaOutput output={calculatorData.outputs} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// // export const liveCalculatorData;
// export default CalculatorPage;
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
import { fetchDataFromStore } from "../state/inputSlice";
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
                    <InputField input={eachInput} />
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
