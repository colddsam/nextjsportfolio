"use client";

import React, { useEffect, useState } from "react";
import { ContainerScroll } from "@/components/container-scroll-animation";
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function LampDemo() {
  const [data2024, setData2024] = useState<number[] | null>(null);
  const [data2023, setData2023] = useState<number[] | null>(null);
  const [name, setName] = useState<string[] | null>(null);
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOptions({
        scales: {
          r: {
            grid: {
              color: 'rgba(255, 255, 255, 0.4)', // Grid color
            },
            pointLabels: {
              font: {
                size: window.innerWidth < 768 ? 8 : 14,
                family: 'qiukyu', // Custom font
              },
              color: 'rgba(255, 255, 255, 0.7)', // Label color
            },
            angleLines: {
              color: 'rgba(255, 255, 255, 0.4)', // Angle lines color
            },
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 100,
              backdropColor: 'rgba(255, 255, 255, 0)', // Background color of ticks
              color: 'rgba(255, 255, 255, 0.7)', // Color of the ticks
              font: {
                size: window.innerWidth < 768 ? 8 : 14,
                family: 'qiukyu', // Custom font
              },
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: 'rgba(255, 255, 255, 0.6)', // Legend text color
              font: {
                family: 'qiukyu', // Custom font for legend
              },
            }
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    fetch('/api/skills')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          const namesArray = data[0].map((item: { name: string }) => item.name);
          const data2023Array = data[0].map((item: { percentage: number }) => item.percentage);
          const data2024Array = data[1].map((item: { percentage: number }) => item.percentage);

          setName(namesArray);
          setData2023(data2023Array);
          setData2024(data2024Array);
          
        } else {
          console.log('Data is not in the expected array format');
        }
      })
      .catch(error => console.error('Error fetching skills:', error));
  }, []); 

  const data = {
    labels: name ? name : [],
    datasets: [{
      label: '2023',
      data: data2023 ? data2023 : [],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    },
    {
      label: '2024',
      data: data2024 ? data2024 : [],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }
  ]
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll>
        <Radar data={data} options={options}/>
      </ContainerScroll>
    </div>
  );
}
