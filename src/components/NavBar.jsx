import PropTypes from "prop-types";

function NavBar({handlePrevious, handleNext}) {
	return (
		<div>
			<button onClick={handlePrevious}>Prev</button>
			<button onClick={handleNext}>Next</button>
		</div>
	);
}

NavBar.proptypes = {
	handlePrevious: PropTypes.func.isRequired,
	handleNext: PropTypes.func.isRequired,
};

export default NavBar;