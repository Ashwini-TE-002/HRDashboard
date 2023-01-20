import React from 'react'
import "./PerformanceOverview.moudle.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive';

export default function PerformanceOverview(props) {
  const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });

  const performanceData = props.performanceData;
  const data = performanceData.health_performance_graph_data;

  return (
    <div className='performanceChat'>
      <div className='hrDashboard-HeaddingTxt'>
        <h6>Performance Overview</h6>
      </div>
      <div className='flex justify-content-between align-items-center'>
        <div className='flex'>
          <div>
            <h6>{performanceData.total_health_performance}%</h6>
          </div>
          <div>
            <span>(
              {(performanceData.total_health_performance_status === "increased") ? '+' : '-'} {performanceData.total_health_performance_percentage} %)</span>
          </div>
        </div>
        {/* score */}
        <div className='flex align-items-center'>
          <div className='flex  align-items-center mr-3'>
            <div className='HighScore'></div>
            <span>High Score</span>
          </div>
          <div className='flex align-items-center'>
            <div className='LowScore'></div>
            <span>Low Score</span>
          </div>
        </div>
      </div>

      {/* <ResponsiveContainer height={300} width={isMobileDevice ? 260 : 600} > */}
      <ResponsiveContainer height={300}>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip />
        <Legend /> */}
          <Bar dataKey="highvalue" barSize={isMobileDevice ? 8 : 20} stackId="a" fill="#FA3B4E" />
          <Bar dataKey="lowvalue" barSize={isMobileDevice ? 8 : 20} stackId="a" fill="#1E3BB3" />
          {/* <Bar dataKey="uv" fill="#FA3B4E" /> */}
        </BarChart>
      </ResponsiveContainer>






    </div>
  )
}
