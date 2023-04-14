import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import './MyChart.css';

const MyChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <section className='chart'>
            <div className='line-chart'>
                <LineChart width={800} height={450} data={data}>
                    <Line dataKey={'sell'}></Line>
                    <Line dataKey={'revenue'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div className='bar-chart'>
                <BarChart width={800} height={450} data={data}>
                    
                    <Bar dataKey={'sales'} fill="#F32323"></Bar>
                    <Bar dataKey={'revenue'}></Bar>
                    <Bar dataKey={'investment'}></Bar>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
            <div className='extra'></div>
        </section>
    );
};

export default MyChart;