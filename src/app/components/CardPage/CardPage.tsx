"use client"

import { useSelector } from 'react-redux';
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react';

function Search() {
  const searchParams = useSearchParams()

  const id = searchParams.get('id');
  const data = useSelector((state : any) => state.data);

  const card = data.find((card : any) => card.id === Number(id));
 
  return <div className="card-page">
            <h1>{card.title}</h1>
            <img src='https://loremflickr.com/200/200?random=4'></img>
            <p>{card.description}</p>
          </div>
}

function CardPage() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  )
}

export default CardPage;