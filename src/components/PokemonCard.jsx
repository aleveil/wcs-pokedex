import PropTypes from "prop-types";
import { useEffect } from "react";

function PokemonCard({ pokemon }) {
	if (pokemon.name === "pikachu")
		setTimeout(() => alert("⚡ Pika Pikachuuuu ! ⚡"), 300);
	return (
		<figure>
			{pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}

PokemonCard.proptypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string.isRequired,
		imgSrc: PropTypes.string,
	}).isRequired,
}

export default PokemonCard;