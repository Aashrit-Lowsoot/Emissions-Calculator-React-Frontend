import { useForm } from "react-hook-form";

export function Datainmodal(params) {
  const onSubmit = async (data) => {
    console.log(register);
  };
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });
  return (
    <div className="dialog__overlay">
      <div className="dialog sheetsdialog">
        <h1 className="dialog__header">Sheets Import</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="dialog__form">
          <div className="dialog__row">
            <div className="dialog__inputcont">
              <input
                type="url"
                min="1"
                placeholder="sheets url"
                className="dialog__input"
                required={true}
                {...register("sheetsurl")}
              />
            </div>
          </div>
          <div className="dialog__row">
            <div className="dialog__copycont">
              <span className="dialog__copyconttext">
                something@lowsoot.com
              </span>
              <button
                onClick={() =>
                  navigator.clipboard.writeText("something@lowsoot.com")
                }
                className="dialog__copycontbtn"
              >
                copy
              </button>
            </div>
          </div>
          <div className="dialog__row">
            <p className="sheets_instructions">
              <b>Usage Instructions</b> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              ipsum aliquid quae! Sit atque modi possimus, nam porro harum cum
              excepturi voluptate quod maxime aliquam nostrum accusantium
              quibusdam optio provident.
            </p>
          </div>
          <button type="submit" className="dialog__btn">
            Insert
          </button>
        </form>
        <button className="dialog__btn">Discard</button>
      </div>
    </div>
  );
}
