/* eslint-disable @typescript-eslint/no-explicit-any */
  /* eslint-disable react-hooks/rules-of-hooks */
  // import calculatorData from "../assets/sip_calculator_data.json";
  import classes from "./CalculatorPage.module.css";
  import InputField, {
    sliderInputComponent,
  } from "../Components/Card/InputField";
  import { TextOutputComponent } from "../Components/TextOutputArea";
  import PieChart from "../Components/DrawPie";
  import TextAreaOutput from "../Components/TextOutputArea";
  import allData from "../assets/landingPageData.json";
  import { useParams } from "react-router-dom";
  import { useEffect, useState } from "react";
  import React from "react";
  // type calci = {
  //   calculator_type: string;
  // template_type: string;
  // header: string;
  // input_template_type: string;
  // inputs: sliderInputComponent;
  // outputs: TextOutputComponent;
  
  // }


  const CalculatorPage: React.FC =() => {
   const [calculatorData, setCalculatorData] = useState<any>({}); // Change 'any' to the type of your JSON data
    //  document.title = `${calculatorData.toUpperCase()}`;
    const { calculatorId } = useParams<{ calculatorId: string; }>();



    useEffect(() => {
      // Function to fetch data based on the URL
      const fetchData = async () => {
        
          // Get the current URL
          // const currentUrl = window.location.href;
          console.log(calculatorId);
          const liveCalculator = allData.calculators.find(
            (calculator) => calculator.cta.path === calculatorId
          );
          // console.log(liveCalculator);
          // Extract relevant information from the URL if needed
          // Based on the URL, dynamically import the corresponding JSON file
          // let data;
          // if (currentUrl.includes('some-path')) {
          //   data = await import('./path/to/some-data.json');
          // } else if (currentUrl.includes('another-path')) {
          //   data = await import('./path/to/another-data.json');
          // }
          if (liveCalculator) {
            try {
              const data = await import(
                `../assets/${liveCalculator.cta.config_file_name}.json`
              );
              setCalculatorData(data.default);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          }
        
          // const data = await import(`../assets/${liveCalculator.cta.config_file_name}.json`);
          // const data = await import(`../assets/sip_calculator_data.json`);
          // Assign the data to a state variable or variable
          // setCalculatorData(data.default); // Assuming JSON data is exported as default
        
      };
      // Call the fetchData function
        fetchData();


    }, [calculatorId]); // Only run this effect once on component mount

    console.log(calculatorData);
    // if (calculatorData === undefined) 
    //   return <div style={{color:"white"}}>Loading...</div>;
    
    return (
      <div>
        <div className={classes.card}>
          {/* card component contains input fields, and result, graph in future */}

          <header>{calculatorData.header}</header>
          <div className={classes.container}>
            <div className={classes.divi}>
              {calculatorData.inputs && calculatorData.inputs.map(
                (
                  eachInput: sliderInputComponent["input"] // Function to fetch data based on the URL
                ) => {
                  return (
                    <div className={classes.element}>
                      <InputField input={eachInput} />
                    </div>
                  );
                }
              )}
            </div>
            {/* ---------------------------Output fields ---------------------------------------*/}
            <div className={classes.output}>
              <div style={{ width: "fit-content", margin: "60px auto" }}>
                <PieChart />
              </div>
              {calculatorData.outputs && <TextAreaOutput output={calculatorData.outputs} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
// export const liveCalculatorData;
  export default CalculatorPage;
