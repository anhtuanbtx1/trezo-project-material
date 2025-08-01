"use client";

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateTimePickerDemo() {
  return (
    <div className='date-time-picker-box'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker']}>
          <DateTimePicker />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}