import { DataType } from '../data';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

const LineChart = (props: { data: DataType[] }) => {
    Chart.register(...registerables);

    const data = {
        labels: props.data[0].map((data) => data.timeStamp),
        datasets: [
            {
                label: 'Active Twitter Users Daily',
                data: props.data[0].map((data) => data.usersMil),
                backgroundColor: ['#1DA1F2'],
                borderColor: '#000000',
                borderWidth: 1,
                pointRadius: 4
            },
            {
                label: 'Active SnapChat Users Daily',
                data: props.data[1].map((data) => data.usersMil),
                backgroundColor: ['#FFFC00'],
                borderColor: '#000000',
                borderWidth: 1,
                pointRadius: 4
            }
        ]
    };

    return <Line data={data} />;
};

export default LineChart;
