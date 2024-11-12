import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper";

export const BraidsExtensions = () => {
    return (
        <section className="braidsextensions">
            <p className="braidsextensions__text">ПОСТАВЯНЕ НА ЕКСТЕНШЪНИ</p>
            <h2 className="braidsextensions__title">Метод с плитка</h2>
            <div className="braidsextensions__content">
                <div className="braidsextensions__content__text">
                    <p className="braidsextensions__text__p">Положителното на този метод е, че ако предпочитате да носите косата си на опашка или плитка, допълнителните кичури няма да се забелязват, тъй като те се „зашиват“ здраво.</p>
                    <p className="braidsextensions__text__p">Този метод не е препоръчителен за дами със слаби и изтощени коси.</p>
                </div>
            </div>
                <Swiper
                    slidesPerView={2}
                    grid={{
                        rows: 1,
                        fill: "row",
                    }}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Grid, Autoplay]}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 18,
                            grid: {
                                rows: 1,
                                fill: "row",
                              },
                        },
                      }}
                    className="extensions__swiper"
                    >
                    <SwiperSlide className="extensions__swiper__slide">
                        <img className="extensions__swiper__img" src="./images/extensions/before.webp"  alt="Extensions" />
                    </SwiperSlide>
                    <SwiperSlide className="extensions__swiper__slide">
                        <img className="extensions__swiper__img" src="./images/extensions/process.webp"  alt="Extensions" />
                    </SwiperSlide>
                    <SwiperSlide className="extensions__swiper__slide">
                        <img className="extensions__swiper__img" src="./images/extensions/after.webp"  alt="Extensions" />
                    </SwiperSlide>
                    <SwiperSlide className="extensions__swiper__slide">
                        <img className="extensions__swiper__img" src="./images/extensions/after2.webp"  alt="Extensions" />
                    </SwiperSlide>
                </Swiper>
        </section>
    );
};