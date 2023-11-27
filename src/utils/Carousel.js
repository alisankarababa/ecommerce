export const eArrow = Object.freeze({
    prev: "prev",
    right: "rigth"
})

export function getCustomRenderArrowFunction( enumVal ) {

    let icon = "";
    let position = "";

    switch (enumVal) {
        case eArrow.prev:
            icon = "fa-chevron-left"
            position = "left-0";
            break;
        case eArrow.next:
            icon = "fa-chevron-right"
            position = "right-0"
            break;
        default:
            break;
    }

    return ( clickHandler, hasPrev, label )  => {
        return (
            <div
            className={`${
              hasPrev ? 'absolute' : 'hidden'
            } top-0 bottom-0 ${position} flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
            >
            {
                <i className={`text-[2rem] text-clr-light fa-solid fa-chevron-left ${icon}`}></i>
            }
        </div>
    );
}}

export function customRenderIndicatorFunction(onClickHandler, isSelected, index, label) {
    const defStyle = { backgroundColor: "white", opacity: "50%", cursor: "pointer", width: "50px", height: "10px", display: "inline-block" };
    const style = isSelected
      ? { ...defStyle, opacity: "100%" }
      : { ...defStyle };
    return (
      <span
        style={style}
        onClick={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        aria-label={`${label} ${index + 1}`}
      >
      </span>
    );
}