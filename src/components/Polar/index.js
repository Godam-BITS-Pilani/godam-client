import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const data = {
  labels: ['Bajra', 'Rice', 'Tomato', 'Wheat'],
  datasets: [
    {
      label: '# of Votes',
      data: [120, 190, 300, 202],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

const Polar = () => (
  <>
    <PolarArea data={data} />
  </>
);

export default Polar;