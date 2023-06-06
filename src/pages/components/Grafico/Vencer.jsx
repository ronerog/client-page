import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Vencer = () => {
  const series = [40]; //PEGAR DADOS DA API
  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
      offsetY: -10
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: '#9E9E9E',
            offsetY: 120
          },
          value: {
            offsetY: 76,
            fontSize: '22px',
            color: undefined,
            formatter: function (val) {
              return val;
            }
          }
        }
      }
    },
    fill: {
      colors: ['#9E9E9E'],
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
      },
    },
    stroke: {
      dashArray: 4
    },
    labels: ['A Vencer'],
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="radialBar" height={350} />
    </div>
  );
};

export default Vencer;