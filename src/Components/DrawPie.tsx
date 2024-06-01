import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { TextOutputComponent, calculatorType } from "../utils/types";
interface Props {
  pieInfo: calculatorType["pie"];
  pieData: TextOutputComponent["output"][];
}
const PieChart = (props: Props) => {
  // const requiredValues = props.pieData.map(obj => obj.value)
  const idsFromPieData = props.pieInfo.labels.map((label) => label.id);

  const labels = props.pieInfo.labels.map((each) => each.label);

  const valuesFromOutputData = props.pieData.filter((item) => idsFromPieData.includes(item.id)).map((item) => item.value);

  const legendColours = props.pieInfo.labels.map(
    (eachLabel) => eachLabel.colour
  );
// labels.reverse();
legendColours.reverse()
  const data = {
    datasets: [
      {
        offset: 24, //32 - default value

        data: valuesFromOutputData, //requiredValues,
        backgroundColor: legendColours,
        borderWidth: 0,
        borderColor: "#ffffff",

        // Offset the second segment to create a gap and make it look floating
        spacing: 0, // This can be adjusted based on the desired gap size
      },
    ],
    // Optionally include labels
    labels: labels,
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top" as const,
        align: 'center' as const,
        labels:{
          usePointStyle:true,
          pointStyle:"rect"
        }
      },
    },

    rotation: 90,
    circumference: 360,
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
