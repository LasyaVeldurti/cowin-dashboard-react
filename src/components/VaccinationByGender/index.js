// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationList} = props
  const vaccinationByGender = vaccinationList.vaccinationByGender.map(
    eachValue => ({
      gender: eachValue.gender,
      count: eachValue.count,
    }),
  )

  console.log(vaccinationByGender)
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          dataKey="count"
          data={vaccinationByGender}
          cx="70%"
          cy="40%"
          innerRadius="30%"
          outerRadius="70%"
          startAngle={0}
          endAngle={180}
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#64c2a6" />
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

export default VaccinationByGender
