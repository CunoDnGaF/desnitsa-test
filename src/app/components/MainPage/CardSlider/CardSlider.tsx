import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux'
import Card from '../../Card/Card'
import 'swiper/css';
import 'swiper/css/navigation';

export type state = {
  card: object,
}

function CardSlider() {
    const data = useSelector((state : any) => state.data );

  return (
    <Swiper navigation={true} modules={[Navigation]}>
      {data.map((card : any) => <SwiperSlide key={card.id}><Card cardData={card}/></SwiperSlide>)}
    </Swiper>
  )
}

export default CardSlider;