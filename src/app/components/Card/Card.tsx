import Link from 'next/link';

function Card({cardData} : any) {
 
  const {title, description, id} = cardData;
  
  return (
    <Link className="card-body" href={{pathname:'/cardPage', query:{id:id}}}>
        <h3>{title}</h3>
        <img src='https://loremflickr.com/200/200?random=4'></img>
        <p>{description}</p>
    </Link>
  )
}

export default Card;