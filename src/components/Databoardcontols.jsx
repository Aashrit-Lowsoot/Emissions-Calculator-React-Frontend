import { Link } from "react-router-dom";
import filterlogo from "../assets/databoard/filter-filled-tool-symbol 1.png";
export function Databoardcontols() {
  return (
    <>
      <Link to="/visualize" className="databoardtabletop__movetoviz">
        Move to visualization
      </Link>
      <label className="databoardtabletop__controlname invisible">
        Search by
      </label>
      <select className="databoardtabletop__select hide" name="pets">
        <option value="">Name</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
      <button className="databoardtabletop__btn hide">
        <img
          className="databoardtabletop__btnlogo"
          src={filterlogo}
          alt="filterlogo"
        />
      </button>
    </>
  );
}
