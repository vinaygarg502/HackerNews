import React, {useEffect} from 'react';
import Chart from "chart.js";
import './Chart.css';

const LineChart = ({chartData})=>{
    let chartRef = React.createRef();
    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: chartData.id,
                datasets: [
                    {
                        label: "Id vs Votes",
                        data: chartData.votes,
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    },[chartData, chartRef]);

    return (
        <div>
            {
                chartData.id && 
                <canvas
                    id="myChart"
                    ref={chartRef}
                />
            }
            
        </div>
    )
}

export default LineChart;