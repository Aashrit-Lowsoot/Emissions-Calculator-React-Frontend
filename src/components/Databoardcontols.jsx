import filterlogo from "../assets/databoard/filter-filled-tool-symbol 1.png";
export function Databoardcontols() {
  return (
    <>
      <label className="databoardtabletop__controlname">Search by</label>
      <select className="databoardtabletop__select" name="pets">
        <option value="">Name</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
      <button className="databoardtabletop__btn">
        <img
          className="databoardtabletop__btnlogo"
          src={filterlogo}
          alt="filterlogo"
        />
      </button>
    </>
  );
}
