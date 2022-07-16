import menuicon from "../assets/dashboard-icon.svg";
import kio from "../assets/Vector.png";
import docimage from "../assets/doctor 2.png";
import teamicon from "../assets/team 1.png";
import patient from "../assets/patient 1.png";
import settingline from "../assets/setting-lines 1.png";
import securitypayment from "../assets/security-payment 1.png";
import power from "../assets/power 2.png";
// ./assets/security-payment 1.png
export function Sidenav() {
  return (
    <div className="sidenav">
      <div className="sidenav__logo">
        <div className="sidenav__logocont">
          <img
            className="sidenav__logoimg"
            src="https://pbs.twimg.com/profile_images/1416084338467241985/cEghLfOF_400x400.jpg"
            alt="sideimage"
          />
        </div>
        <p className="sidenav__logopara">E-bike go</p>
      </div>
      <div className="sidenav__homemenu">
        <div className="sidenav__homemenucont">
          <img
            className="sidenav__homemenuimg"
            src={menuicon}
            alt=""
            srcSet=""
          />
        </div>
      </div>
      <div className="sidenav__navigate">
        <div className="sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img className="sidenav__navigateitmimg" src={kio} alt="doctor" />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img className="sidenav__navigateitmimg" src={kio} alt="doctor" />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">Travel</p>
          </div>
        </div>
        <div className="sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img
              className="sidenav__navigateitmimg"
              src={docimage}
              alt="doctor"
            />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img
                className="sidenav__navigateitmimg"
                src={docimage}
                alt="doctor"
              />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">doctor</p>
          </div>
        </div>
        <div className="sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img
              className="sidenav__navigateitmimg"
              src={teamicon}
              alt="doctor"
            />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img
                className="sidenav__navigateitmimg"
                src={teamicon}
                alt="doctor"
              />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">teams</p>
          </div>
        </div>
        <div className="sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img
              className="sidenav__navigateitmimg"
              src={patient}
              alt="doctor"
            />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img
                className="sidenav__navigateitmimg"
                src={patient}
                alt="doctor"
              />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">patient</p>
          </div>
        </div>
        <div className="sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img
              className="sidenav__navigateitmimg"
              src={settingline}
              alt="doctor"
            />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img
                className="sidenav__navigateitmimg"
                src={settingline}
                alt="doctor"
              />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">settings</p>
          </div>
        </div>
        <div className="sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img
              className="sidenav__navigateitmimg"
              src={securitypayment}
              alt="doctor"
            />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img
                className="sidenav__navigateitmimg"
                src={securitypayment}
                alt="doctor"
              />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">payment</p>
          </div>
        </div>
        <div className="sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img
              className="sidenav__navigateitmimg"
              src={teamicon}
              alt="doctor"
            />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img
                className="sidenav__navigateitmimg"
                src={teamicon}
                alt="doctor"
              />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">teams</p>
          </div>
        </div>
        <div className="sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img
              className="sidenav__navigateitmimg"
              src={settingline}
              alt="doctor"
            />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img
                className="sidenav__navigateitmimg"
                src={settingline}
                alt="doctor"
              />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">settings</p>
          </div>
        </div>
        <div className="sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img
              className="sidenav__navigateitmimg"
              src={securitypayment}
              alt="doctor"
            />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img
                className="sidenav__navigateitmimg"
                src={securitypayment}
                alt="doctor"
              />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">shutdown</p>
          </div>
        </div>
        <div className="sidenav__navigateitm">
          <div className="sidenav__navigateitmlogo">
            <img className="sidenav__navigateitmimg" src={power} alt="doctor" />
          </div>
          <div className="sidenav__navigateitmtooltip">
            <div className="sidenav__navigateitmlogo">
              <img
                className="sidenav__navigateitmimg"
                src={power}
                alt="doctor"
              />
            </div>
            <p className="sidenav__navigateitmtooltipmsg">shutdown</p>
          </div>
        </div>
      </div>
    </div>
  );
}
