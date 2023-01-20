import React from 'react'
import { DatePicker, Space } from 'antd'
import dayjs from 'dayjs'
import './DateTemplate.moudle.css'
import {Container} from 'react-bootstrap'

const { RangePicker } = DatePicker;

const onChange = (date) => {
    if(date) {
        console.log('date: ' , date);
    } else {
        console.log('Clear');
    }
};


const onRangeChange = (dates, dateStrings) => {
    if (dates) {
      console.log('From: ', dates[0], ', to: ', dates[1]);
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    } else {
      console.log('Clear');
    }
};

  const rangePresets = [
    {
      label: 'Last 7 Days',
      value: [dayjs().add(-7, 'd'), dayjs()],
    },
    {
      label: 'Last 14 Days',
      value: [dayjs().add(-14, 'd'), dayjs()],
    },
    {
      label: 'Last 30 Days',
      value: [dayjs().add(-30, 'd'), dayjs()],
    },
    {
      label: 'Last 90 Days',
      value: [dayjs().add(-90, 'd'), dayjs()],
    },
];


const DateTemplate = () => {
  return (
    <Container>
    <div className='date-pickher m-1 mt-2'>  
      <Space direction="vertical" size={12}>
          <RangePicker presets={rangePresets} onChange={onRangeChange} />
      </Space>
    </div>
    </Container>
  )
}

export default DateTemplate