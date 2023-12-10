import { useEffect, useState } from "react"
import { getAll } from "../../API/gamesApi"
import GameCard from "./Catalog-Game-Card/GameCard";

export default function Catalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => setGames(result))
    }, [])
    console.log(games);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.map((game) => (
                <GameCard key={game._id} {...game} />
            ))}
            {!games.length && (<h3 className="no-articles">No articles yet</h3>)}

        </section>

    )
}