import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
const PieChart = () => {
  // Define the data for two sectors with a visual gap between them
  const data = {
    datasets: [{
      offset :32,
      
      data: [175, 120],
      backgroundColor: [
        'rgba(77, 100, 141, 1)',
        'rgba(30, 31, 38, 1)'
      ],
      borderWidth: 0,
      borderColor: '#ffffff',
   
      // Offset the second segment to create a gap and make it look floating
      spacing:0 // This can be adjusted based on the desired gap size
    }],
    // Optionally include labels
    labels: [
     
    ],
    
  };

  const options = {
    responsive: true,
    
    plugins: {
      legend: {
        
        position: "chartArea",
        
      }
      
    },
    // To further enhance the "floating" effect, we can modify the rotation or circumference
    rotation: 90,
    circumference: 360,
  };
//   M = P * (((1 + i)^n - 1) / i) * (1 + i)
  return <Pie data={data} options ={options} />;
};

export default PieChart;
