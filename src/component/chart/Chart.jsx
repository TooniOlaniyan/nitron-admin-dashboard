import React from 'react'
import './chart.scss'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'

function Chart() {
  const data = [
    { name: 'Target', value: 141 },
    { name: 'Last Week', value: 120 },
    { name: 'Last Month', value: 114 },
  ]
  const value = data.forEach((i)=>{
    return i.name

  })
  const COLORS = ['#0088FE', '#7451f8', 'gray']
  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}% `}
      </text>
    )
  }
  return (
    <div className='chart'>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart width='100%' height='100%'>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={210}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart