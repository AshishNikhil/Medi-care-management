import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = ({history}) => {
  const logout = () => {
    Cookies.remove('jwt_token')
    localStorage.removeItem('jwt_cookie')
    localStorage.removeItem('whoami')
    history.push('/login')
  }
  const whoami = localStorage.getItem('whoami')
  return (
    <div className="top-Header">
      <div className="innertop-Header">
        <div className="image-logo">
          <img
            className="login-home-logo"
            src="/heart-Bj9ZTo3Y.svg"
            alt="MediCare Companion Logo"
          />
        </div>
        <div>
          <h1 className="heading">MediCare Companion</h1>
          <p className="para">{whoami}</p>
        </div>
      </div>
      <div>
        <button type="button" onClick={logout} className="loginout-btn">
          logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
