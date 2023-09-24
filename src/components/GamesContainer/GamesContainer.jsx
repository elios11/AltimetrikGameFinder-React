import './GamesContainer.css';
import GameCard from './GameCard/GameCard';
import fetchData from '../../api/fetchData';

export default function GamesContainer() {
    console.log('hola')
    const result = fetchData('http://localhost:3001/api/games')

    console.log(result)

    return (
        <div className="GamesContainer.css">
            {result.loading ? "" : result.data.results.map((game, index) => <GameCard key={index}/>)}
        </div>
    ) 
}