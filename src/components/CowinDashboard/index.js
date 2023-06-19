// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'

import VaccinationByGender from '../VaccinationByGender'

import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {vaccinationList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const data = await response.json()

    if (response.ok === true) {
      const fetchedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }

      this.setState({
        vaccinationList: fetchedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderAllVaccinationData = () => {
    const {apiStatus, vaccinationList} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return (
          <>
            <div className="vaccination-coverage-container">
              <h1>Vaccination Coverage</h1>
              <VaccinationCoverage vaccinationList={vaccinationList} />
            </div>
            <div className="vaccination-byage-container">
              <h1>Vaccination By Gender</h1>
              <VaccinationByGender vaccinationList={vaccinationList} />
            </div>
            <div className="vaccination-byage-container">
              <h1>Vaccination By Age</h1>
              <VaccinationByAge vaccinationList={vaccinationList} />
            </div>
          </>
        )
      case apiStatusConstants.inProgress:
        return (
          <div data-testid="loader" className="loader-container">
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          </div>
        )
      case apiStatusConstants.failure:
        return (
          <div className="failure-view-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
            />
            <h1>Something went wrong</h1>
          </div>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="cowin-container">
          <div className="logo-container">
            <img
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png "
              alt="website logo"
            />
            <p className="logo-text">Co-WIN</p>
          </div>
          <h1 className="cowin-heading">CoWIN Vaccination in India</h1>
          {this.renderAllVaccinationData()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
