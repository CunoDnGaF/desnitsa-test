import Link from 'next/link';
import CardSlider from './CardSlider/CardSlider'
import { useGetDataQuery } from '../../redux/slice/apiSlice'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setData } from '../../redux/slice/dataSlice';

function MainPage() {
  const {data, isSuccess} = useGetDataQuery(15);
  const dispatch = useDispatch();

  useEffect(() => {
    if(isSuccess) {
      dispatch(setData(data.data))
    }
  }, [data])

  return (
    <div className="main-page">
        <CardSlider />
        <Link className='button' href={{pathname:'/cardList'}}>Смотреть все</Link>
    </div>
  )
}

export default MainPage;