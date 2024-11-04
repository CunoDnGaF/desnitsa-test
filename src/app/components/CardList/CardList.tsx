import { useSelector } from 'react-redux';
import Card from '../Card/Card';


function CardList() {
const data = useSelector((state : any) => state.data);

  return (
    <div className='card-list'>
      {data.map((card : any)  => <Card key={card.id} cardData={card}/>)}
    </div>
  )
}

export default CardList;