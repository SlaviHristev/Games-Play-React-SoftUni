import { useEffect, useState } from 'react'
import * as gamesApi from '../../API/gamesApi'
import RecentGames from './Recent-games/RecentGame';

export default function Home() {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        gamesApi.getLatest()
            .then(setLatestGames)
    },[]);
    
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {latestGames.map(game => <RecentGames {...game} />)}

                {!latestGames.length && (
                    <p className="no-articles">No games yet</p>)}


            </div>
        </section>
    )
}