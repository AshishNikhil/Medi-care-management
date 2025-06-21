import {CalendarComponent} from '@syncfusion/ej2-react-calendars'
import {Component} from 'react'
import './index.css'

class PatientView extends Component {
  state = {
    marked: false,
  }

  greenchamge = () => {
    this.setState({marked: true})
  }

  render() {
    const {marked, display} = this.state
    return (
      <div className="PatientView-container">
        <div className="first-container">
          <div className="inside-first-container">
            <div>
              <img
                className="PatientView-logo"
                src="/user_3237472.png"
                alt="imagelogo"
              />
            </div>
            <div>
              <h1 className="inside-first-container-heading">
                Good Afternoon!
              </h1>
              <p className="inside-first-container-para">
                Ready to stay on track with your medication?
              </p>
            </div>
          </div>
          <div className="PatientView-rows">
            <div className="mini-PatientView-update">
              <h1>0</h1>
              <p>Day Streak</p>
            </div>
            <div className="mini-PatientView-update">
              <h1>○</h1>
              <p>Today`s Status</p>
            </div>
            <div className="mini-PatientView-update">
              <h1>0%</h1>
              <p>Monthly Rate</p>
            </div>
          </div>
        </div>
        <div className="sec-container">
          <div className="sec-container-left">
            <h1>📅 Today`s Medication</h1>
            <div className="sec-container-left-one">
              <h2>1</h2>
              <div>
                <h1>Daily Medication Set</h1>
                <p className="sec-container-left-one-p">
                  Complete set of daily tablets
                </p>
              </div>
              <div>
                <p className="sec-container-left-one-time">⌚ 8:00 AM</p>
              </div>
            </div>
            <div className="sec-container-left-bottom">
              <img
                className="PatientView-logo"
                src="/user_3237472.png"
                alt="imagelogo"
              />
              <h1>Add Proof Photo (Optional)</h1>
              <p>
                Take a photo of your medication or pill organizer as
                confirmation
              </p>
              <input
                type="file"
                id="file-upload-input"
                style={{display: 'none'}}
              />
              <label
                htmlFor="file-upload-input"
                style={{
                  cursor: 'pointer',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '12px',
                  textAlign: 'center',
                }}
              >
                📷 Take Photo
              </label>
            </div>
            <div className="only-btn">
              <button
                type="button"
                className="Mark-btn"
                onClick={this.greenchamge}
              >
                ✔️ Mark as Taken
              </button>
            </div>
          </div>
          <div className="sec-container-right">
            <h1>Medication Calendar</h1>
            <CalendarComponent>.</CalendarComponent>
            <u1>
              <li className="unorder1">Medication taken</li>
              <li className="unorder2">Missed medication</li>
              <li className="unorder3">Today</li>
            </u1>
          </div>
        </div>
      </div>
    )
  }
}

export default PatientView
