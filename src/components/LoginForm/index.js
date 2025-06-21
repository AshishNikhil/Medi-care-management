import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    whoami: '',
    popupVisible: false,
  }

  loginFormPatient = () => {
    this.setState({whoami: 'Patient', popupVisible: true})
  }

  loginFormCaretaker = () => {
    this.setState({whoami: 'Caretaker', popupVisible: true})
  }

  submitForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    if (username === 'ashish' && password === 'ashish') {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure()
    }
  }

  onSubmitSuccess = () => {
    const {username, password, whoami} = this.state
    const {history} = this.props
    const jwtToken = {username, password}
    Cookies.set('jwt_token', jwtToken, {expires: 10})
    const cookiesKey = Cookies.get('jwt_token')
    localStorage.setItem('jwt_cookie', JSON.stringify(cookiesKey))
    localStorage.setItem('whoami', whoami)
    history.replace('/')
  }

  onSubmitFailure = () => {
    this.setState({showSubmitError: true, errorMsg: 'enter valid input'})
  }

  render() {
    const {
      username,
      password,
      showSubmitError,
      errorMsg,
      popupVisible,
      whoami,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/login" />
    }

    return (
      <div className="login-home-container">
        <div className="login-home-head">
          <img
            className="login-home-logo"
            src="/heart-Bj9ZTo3Y.svg"
            alt="MediCare Companion Logo"
          />
          <h1 className="heading-loginHome">Welcome to MediCare Companion</h1>
          <p className="para-loginHome">
            Your trusted partner in medication management. Choose your role to
            get started with personalized features.
          </p>
        </div>
        <div className="login-home-body">
          <div className="login-home-body-left">
            <img
              className="login-home-logo"
              src="/user_3237472.png"
              alt="MediCare Companion Logo"
            />
            <h2>I`m a Patient</h2>
            <p>
              Track your medication schedule and maintain your health records
            </p>
            <div className="login-home-ul">
              <ul>
                <li>Mark medications as taken</li>
                <li>Upload proof photos (optional)</li>
                <li>View your medication calendar</li>
                <li>Large, easy-to-use interface</li>
              </ul>
            </div>
            <button
              className="login-home-Patient"
              type="button"
              onClick={this.loginFormPatient}
            >
              Continue as Patient
            </button>
          </div>
          <div className="login-home-body-right">
            <img
              className="login-home-logo"
              src="/user_13078032.png"
              alt="MediCare Companion Logo"
            />
            <h2>I`m a Caretaker</h2>
            <p>Monitor and support your loved ones medication adherence</p>
            <div className="login-home-ul-right">
              <ul>
                <li>Monitor medication compliance</li>
                <li>Set up notification preferences</li>
                <li>View detailed reports</li>
                <li>Receive email alerts</li>
              </ul>
            </div>
            <button
              className="login-home-Caretaker"
              type="button"
              onClick={this.loginFormCaretaker}
            >
              Continue as Caretaker
            </button>
          </div>
        </div>
        <p>You can switch between roles anytime after setup</p>
        {popupVisible && (
          <div className="popup">
            <h2>Login as {whoami}</h2>
            <form onSubmit={this.submitForm}>
              <div className="login-inputs">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  placeholder="ashish"
                  value={username}
                  onChange={e => this.setState({username: e.target.value})}
                />
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="ashish"
                  value={password}
                  onChange={e => this.setState({password: e.target.value})}
                />
              </div>
              <div className="login-btns">
                <button type="submit" className="login-btn">
                  Login
                </button>
                <button
                  className="close-popup"
                  type="button"
                  onClick={() => this.setState({popupVisible: false})}
                >
                  Close
                </button>
              </div>
            </form>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </div>
        )}
      </div>
    )
  }
}

export default Login
