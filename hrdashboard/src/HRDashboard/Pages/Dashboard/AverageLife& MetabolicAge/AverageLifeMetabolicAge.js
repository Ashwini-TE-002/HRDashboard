import React from 'react'
import './AverageLifeMetabolicAge.moudle.css'
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ResponsiveContainer
} from "recharts";

export default function AverageLifeMetabolicAge() {

  const data = [
    {
      name: "age",
      metabolicAge: 10,
      lifeExpectancy: 100
    }
  ];

  return (
    <div className='graphbar-contentBox'>
      <div className='hrDashboard-HeaddingTxt'>
        <h6>Average life expectacy & Metabolic Age </h6>
      </div>
      <div className='graphBar'>
        <ResponsiveContainer height={180}>
          <ComposedChart
            layout="vertical"
            width={300}
            height={180}
            data={data}
            margin={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" scale="band" />
            {/* <Tooltip />
          <Legend /> */}
            {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
            <Bar dataKey="lifeExpectancy" barSize={20} fill="#467EEA" />
            <Bar dataKey="metabolicAge" barSize={20} fill="#FDADB5" />
            {/* <Line dataKey="uv" stroke="#ff7300" /> */}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className='flex justify-content-center mt-3'>
        <div className='flex align-items-center avrage-life-Wrapper'>
          <div className='Averagelife'></div>
          <span>Average life expectancy</span>
        </div>
        <div className='flex align-items-center MetabolicAge-Wrapper ml-3'>
          <div className='MetabolicAge'></div>
          <span>Metabolic Age</span>
        </div>
      </div>
    </div>
  )
}
