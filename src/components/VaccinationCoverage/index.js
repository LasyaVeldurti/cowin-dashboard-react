// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationList} = props
  const vaccinationCoverage = vaccinationList.last7DaysVaccination.map(
    eachValue => ({
      vaccineDate: eachValue.vaccine_date,
      dose1: eachValue.dose_1,
      dose2: eachValue.dose_2,
    }),
  )

  //  console.log(vaccinationCoverage)
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={vaccinationCoverage}>
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis />
        <Legend />
        <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="30" />
        <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="30" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage
