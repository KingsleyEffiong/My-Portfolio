import PropTypes from "prop-types";

Button.propTypes = {
    children: PropTypes.any.isRequired,
    onClick:PropTypes.any.isRequired
  };
function Button({children, onClick}) {
  return (
    <button onClick={onClick} className="bg-[var(--light-green)] rounded-full w-fit py-1 text-black px-4  flex justify-between items-center ">{children}</button>
  )
}

export default Button