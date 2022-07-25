import { Link, useNavigate } from "react-router-dom";
import { useNavc } from "../../contexts/Navcontext";
import menuicon from "../../assets/sidenav/dashboardicon.svg";
export function Sidenavvv2() {
  const { navboardstate, navdispatch } = useNavc();
  return (
    <div className="sidenavv2">
      <div className="sidenavv2__logo">
        <div className="sidenavv2__logocont">
          <img
            className="sidenavv2__logoimg"
            src="https://pbs.twimg.com/profile_images/1416084338467241985/cEghLfOF_400x400.jpg"
            alt="sideimage"
          />
        </div>
        <p className="sidenavv2__logopara">E-bike go</p>
      </div>
      <div className="sidenavv2__homemenu">
        <Link to="/" className="sidenavv2__homemenucont">
          <img
            className="sidenavv2__homemenuimg"
            src={menuicon}
            alt="menuicon"
          />
        </Link>
      </div>
      <div className="sidenavv2__navigate">
        {[...navboardstate.subnav2].map((itm) => {
          return (
            <div key={itm.navid} className="sidenavv2__navigateitm">
              <div
                onClick={() =>
                  navdispatch({
                    type: "TOGGLE_NAVDD",
                    payload: { navid: itm.navid },
                  })
                }
                className="sidenavv2__navigateitmdd"
              >
                <div className="sidenavv2__navigateitmlogo">
                  <img
                    className="sidenavv2__navigateitmimg"
                    src={itm.img}
                    alt="doctor"
                  />
                </div>
                <p className="sidenavv2__navigateitmddmsg">{itm.name}</p>
              </div>
              <div className="sidenavv2__navigatedd">
                {itm.isopen && itm.canopen && (
                  <Subnav2 slashnav={itm.path} subnavarrayx={itm.subnavarr} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Subnav2(params) {
  const { slashnav, subnavarrayx } = params;
  const { navdispatch } = useNavc();
  const navigate = useNavigate();
  return (
    <>
      {[...subnavarrayx].map((subnavitm) => {
        return (
          <div
            onClick={() => {
              //   console.log(slashnav, subnavitm.navnum);
              navigate(`/${slashnav}`);
              navdispatch({
                type: "SET_NAVSTATE",
                payload: { navnum: subnavitm.navnum },
              });
            }}
            key={subnavitm.id}
            className="sidenavv2__dditm"
          >
            <div className="sidenavv2__dditmlogo">
              <img
                className="sidenavv2__dditmimg"
                src={subnavitm.imgicon}
                alt="subnavitm"
              />
            </div>
            <p className="sidenavv2__dditmmsg">{subnavitm.name}</p>
          </div>
        );
      })}
    </>
  );
}
