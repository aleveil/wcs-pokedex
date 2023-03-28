import PropTypes from "prop-types";

function NavBar({pokemonList, handleIndex}) {
	return (
		<div>
			{pokemonList.map((pokemon) => 
				<button onClick={() => handleIndex(pokemon.name)} key={pokemon.name}>{pokemon.name}</button>
			)}
		</div>
	);
}

NavBar.proptypes = {
	pokemonList: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			imgSrc: PropTypes.string,
		}),
	).isRequired,

};

export default NavBar;