// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationList} = props
  const vaccinationByAge = vaccinationList.vaccinationByAge.map(eachValue => ({
    age: eachValue.age,
    count: eachValue.count,
  }))

  //  console.log(vaccinationByAge)
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          dataKey="count"
          data={vaccinationByAge}
          cx="70%"
          cy="40%"
          outerRadius="70%"
          startAngle={0}
          endAngle={360}
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="45-60" fill=" #a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          horizontalAlign="middle"
          align="center"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByAge
