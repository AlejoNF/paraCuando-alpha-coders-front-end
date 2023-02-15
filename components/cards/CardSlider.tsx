import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';

import 'bootstrap/dist/css/bootstrap.min.css';

import CardInfo from './CardInfo';
import img_1 from './img/img_1.png';
import img_2 from './img/img_2.png';
import img_3 from './img/img_3.png';
import img_4 from './img/img_4.png';

export default function CardSlider() {
  return (
    // <div className="max-w-[100%] bg-yellow-200  justify-center justify-items-center px-[2%] md:px-[10px]">
    <div className="bg-yellow-200">
      <section className="pl-[50px] pt-2">
        <h2 className="font-Roboto text-black-600 text-2xl title-font font-bold  pt-5">
          Title
        </h2>
        <h3 className="text-[20px] font-Roboto text-gray-400  title-font font-bold pb-0 ">
          Subtitle
        </h3>
      </section>
      <div className="container py-2 px-2 justify-content-center">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="bg-green-300 "
          //   slidesPerView={1}
          //   spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <CardInfo
              data={{
                imgSrc: img_1,
                title: 'Title1',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequiquo maxime, neque corrupti itaque animi',
                url: 'example@email.com',
                votes: '900,000',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardInfo
              data={{
                imgSrc: img_2,
                title: 'Title1',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequiquo maxime, neque corrupti itaque animi',
                url: 'example@email.com',
                votes: '900,000',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardInfo
              data={{
                imgSrc: img_3,
                title: 'Title1',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequiquo maxime, neque corrupti itaque animi',
                url: 'example@email.com',
                votes: '900,000',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardInfo
              data={{
                imgSrc: img_4,
                title: 'Title1',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequiquo maxime, neque corrupti itaque animi',
                url: 'example@email.com',
                votes: '900,000',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardInfo
              data={{
                imgSrc: img_1,
                title: 'Title1',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequiquo maxime, neque corrupti itaque animi',
                url: 'example@email.com',
                votes: '900,000',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardInfo
              data={{
                imgSrc: img_2,
                title: 'Title1',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequiquo maxime, neque corrupti itaque animi',
                url: 'example@email.com',
                votes: '900,000',
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <div className="flex justify-center justify-items-center">
        <div className="flex gap-[20px] content-center"></div>
      </div> */}
      {/* <div className=" ml-[65%] absolute top-[64%]  hover:brightness-150 w-[51px] h-[51px] ">
  <Image src="/next.png" alt="btn-next" width={51} height={51}></Image>
</div> */}
    </div>
  );
}
