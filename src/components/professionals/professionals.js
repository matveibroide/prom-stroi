import React, { useState } from "react";
import './professionals.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import img from '../../assets/pic1.jpg'
import img2 from '../../assets/pic2.jpg'
import img3 from '../../assets/pic3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive'

function Professionals() {
    
    const [visible, setVisible] = useState({ isOpen: false, currentSlide: null,backContentVisible:true,sectionVisible:false});

   

    const handleClick = (index) => {
        setVisible(prevState => ({
            ...prevState,
            currentSlide: index,
            isOpen: true,
            backContentVisible:false,
            sectionVisible:true
        }));
    };

    const handleClickClose = () => {
        setVisible(prevState => ({
            ...prevState,
            backContentVisible:true,
            sectionVisible:false
            
        }));
    }


    const pros =
    [
        {url:`${img}`,title:`Кс-5 «Нагорная» Магистральный Газопровод «Сила Сибири»`},
        {url:`${img3}`,title:`Tea-next»`},
        {url:`${img2}`,title:`Многоуровневая парковка`},
    ]

    const titles = [`Кс-5 «Нагорная» Магистральный Газопровод «Сила Сибири»`, `Tea-Next`,`Многоуровневая Парковка`]



    const content = () => {

        if(visible.currentSlide === 0 && visible.sectionVisible) {
            return (
        <div className="pros__pros-container__descr-pros__content">
            <h1 className = 'pros__pros-container__descr-pros__content__header'>{titles[visible.currentSlide]}</h1>
            <img alt = {pros[0].title} src = {img} className="img-div"></img>
            <div className="pros__pros-container__descr-pros__content__wrapper">
                <h2 className="pros__pros-container__descr-pros__content__header">Виды работ:</h2>
                <ul className="pros__pros-container__descr-pros__content__wrapper__items">
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">Слаботочные системы:
                        <ul style={{listStyle:'none'}}>
                            <li>Подключение датчиков монтаж кабеля и кабеле несущих конструкций по проектам</li>
                        </ul>
                    </li>
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">ПС (ПожарныеСистемы):
                        <ul>
                            <li>
                            Монтаж и расключение извещателей автоматических тепловых, световых, дымовых во
                            взрывозащищенном исполнении в кол-ве:350 шт.
                            </li>
                            <li>
                            Монтаж кабеле несущих систем и кабеля в кол-ве:1400м
                            </li>
                            <li>
                            Расключение шкафов или панелей коммутационной связи в кол-ве:4шт.
                            </li>
                        </ul>
                    </li>
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">СПБА(Система Пожарной Безопасности Автоматизация)
                        <ul>
                        <ul> Монтаж кабеле несущих систем в составе:
                        <li>
                        Труба стальная, рукав металлический, короба пластмассовые, полки кабельные, профиль
                        перфорированный, лоток металлический в колличестве:3000м.
                        </li>
                        <li>
                        Монтаж кабеля в колличестве:5000м
                        </li>
                        <li>
                        -Монтаж автоматических систем противопожарной безопасности в колличестве:6шт
                        </li>
                        </ul>
                    </ul>
                    </li>
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">СКС(Структурированная кабельная система)
                        <ul>
                            <li>
                            Монтаж кабеле несущих систем в составе: полок, кабель канала, гофра трубы количестве
                            500м
                            </li>
                            <li>
                            Прокладка кабеля-14000м
                            </li>
                            <li>
                            Монтаж съёмных и выдвижных блоков в шкафу СКС в количестве 15шт
                            </li>
                            <li>
                            Монтаж розеток телекоммуникационных в количестве 175 шт.
                            </li>
                        </ul>
                    </li>
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">СС(Системы Связи)
                        <ul>
                            <li>
                                <ul>-Монтаж оборудования в составе:
                                    <li>
                                    аппараты телефонные в количестве 5шт
                                    </li>
                                    <li>
                                    Электронные часы в количестве 31 шт   
                                    </li>
                                    <li>
                                    -Монтаж кабеле несущих систем в составе: гофра труба, рукав металлический, мини канал
                                    в количестве 170м
                                    </li>
                                    <li>
                                    Монтаж кабеля в количестве 1600 м
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div onClick={() => handleClickClose()} 
            className="close-bar">Назад</div>
        </div>
            )
        }

        if(visible.currentSlide === 1 && visible.sectionVisible) {
            return (
        <div className="pros__pros-container__descr-pros__content">
            <h1  className = 'pros__pros-container__descr-pros__content__header'>{titles[visible.currentSlide]}</h1>
            <img alt = {pros[1].title} src={img2} className="img-div"></img>
            <div className="pros__pros-container__descr-pros__content__wrapper">
                <h2 className="pros__pros-container__descr-pros__content__header">Виды работ:</h2>
                <ul className="pros__pros-container__descr-pros__content__wrapper__items">
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">Слаботочные системы:
                        <ul style={{listStyle:'none'}}>
                            <li>Подключение датчиков монтаж кабеля и кабеле несущих конструкций по проектам</li>
                        </ul>
                    </li>
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">ПС (ПожарныеСистемы):
                        <ul>
                            <li>
                            Монтаж и расключение извещателей автоматических тепловых, световых, дымовых во
                            взрывозащищенном исполнении в кол-ве:350 шт.
                            </li>
                            <li>
                            Монтаж кабеле несущих систем и кабеля в кол-ве:1400м
                            </li>
                            <li>
                            Расключение шкафов или панелей коммутационной связи в кол-ве:4шт.
                            </li>
                        </ul>
                    </li>
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">СПБА(Система Пожарной Безопасности Автоматизация)
                        <ul>
                        <ul> Монтаж кабеле несущих систем в составе:
                        <li>
                        Труба стальная, рукав металлический, короба пластмассовые, полки кабельные, профиль
                        перфорированный, лоток металлический в колличестве:3000м.
                        </li>
                        <li>
                        Монтаж кабеля в колличестве:5000м
                        </li>
                        <li>
                        -Монтаж автоматических систем противопожарной безопасности в колличестве:6шт
                        </li>
                        </ul>
                    </ul>
                    </li>
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">СКС(Структурированная кабельная система)
                        <ul>
                            <li>
                            Монтаж кабеле несущих систем в составе: полок, кабель канала, гофра трубы количестве
                            500м
                            </li>
                            <li>
                            Прокладка кабеля-14000м
                            </li>
                            <li>
                            Монтаж съёмных и выдвижных блоков в шкафу СКС в количестве 15шт
                            </li>
                            <li>
                            Монтаж розеток телекоммуникационных в количестве 175 шт.
                            </li>
                        </ul>
                    </li>
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">СС(Системы Связи)
                        <ul>
                            <li>
                                <ul>-Монтаж оборудования в составе:
                                    <li>
                                    аппараты телефонные в количестве 5шт
                                    </li>
                                    <li>
                                    Электронные часы в количестве 31 шт   
                                    </li>
                                    <li>
                                    -Монтаж кабеле несущих систем в составе: гофра труба, рукав металлический, мини канал
                                    в количестве 170м
                                    </li>
                                    <li>
                                    Монтаж кабеля в количестве 1600 м
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div onClick={() => handleClickClose()} 
            className="close-bar">Назад</div>
        </div>

            )
        }

        if(visible.currentSlide === 2 && visible.sectionVisible) {
            return (
        <div className="pros__pros-container__descr-pros__content">
            <h1 className = 'pros__pros-container__descr-pros__content__header'>{titles[visible.currentSlide]}</h1>
            <img alt = {pros[2].title} src={img3} className="img-div"></img>
            <div className="pros__pros-container__descr-pros__content__wrapper">
                <h2 className="pros__pros-container__descr-pros__content__header">Виды работ:</h2>
                <ul className="pros__pros-container__descr-pros__content__wrapper__items">
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">Слаботочные системы:
                        <ul style={{listStyle:'none'}}>
                            <li>Подключение датчиков монтаж кабеля и кабеле несущих конструкций по проектам</li>
                        </ul>
                    </li>
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">ПС (ПожарныеСистемы):
                        <ul>
                            <li>
                            Монтаж и расключение извещателей автоматических тепловых, световых, дымовых во
                            взрывозащищенном исполнении в кол-ве:350 шт.
                            </li>
                            <li>
                            Монтаж кабеле несущих систем и кабеля в кол-ве:1400м
                            </li>
                            <li>
                            Расключение шкафов или панелей коммутационной связи в кол-ве:4шт.
                            </li>
                        </ul>
                    </li>
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">СПБА(Система Пожарной Безопасности Автоматизация)
                        <ul>
                        <ul> Монтаж кабеле несущих систем в составе:
                        <li>
                        Труба стальная, рукав металлический, короба пластмассовые, полки кабельные, профиль
                        перфорированный, лоток металлический в колличестве:3000м.
                        </li>
                        <li>
                        Монтаж кабеля в колличестве:5000м
                        </li>
                        <li>
                        -Монтаж автоматических систем противопожарной безопасности в колличестве:6шт
                        </li>
                        </ul>
                    </ul>
                    </li>
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">СКС(Структурированная кабельная система)
                        <ul>
                            <li>
                            Монтаж кабеле несущих систем в составе: полок, кабель канала, гофра трубы количестве
                            500м
                            </li>
                            <li>
                            Прокладка кабеля-14000м
                            </li>
                            <li>
                            Монтаж съёмных и выдвижных блоков в шкафу СКС в количестве 15шт
                            </li>
                            <li>
                            Монтаж розеток телекоммуникационных в количестве 175 шт.
                            </li>
                        </ul>
                    </li>
                    <li className="pros__pros-container__descr-pros__content__wrapper__items__main-item">СС(Системы Связи)
                        <ul>
                            <li>
                                <ul>-Монтаж оборудования в составе:
                                    <li>
                                    аппараты телефонные в количестве 5шт
                                    </li>
                                    <li>
                                    Электронные часы в количестве 31 шт   
                                    </li>
                                    <li>
                                    -Монтаж кабеле несущих систем в составе: гофра труба, рукав металлический, мини канал
                                    в количестве 170м
                                    </li>
                                    <li>
                                    Монтаж кабеля в количестве 1600 м
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div onClick={() => handleClickClose()} 
            className="close-bar">Назад</div>
        </div>
            )
        }
    }
        
    
  /*   const swiper = () => {
        return (
        <Swiper 
        style={{width:'500px',background:'transparent'}}
        effect="cube"
        modules={[Navigation, Pagination, Scrollbar, A11y,EffectCube]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
       

       <SwiperSlide style={{backgroundImage:`url(${img})`,backgroundSize:'cover'}}>12</SwiperSlide>
       <SwiperSlide style={{backgroundImage:`url(${img})`,backgroundSize:'cover'}}>14</SwiperSlide>
       <SwiperSlide style={{backgroundImage:`url(${img})`,backgroundSize:'cover'}}>124124</SwiperSlide>

        
    </Swiper>
    
        );
    }; */


    const isTablet = useMediaQuery({
        query: '(width<=768px)'
        })

    return (
        
<section style={{height:`${isTablet ? `fit-content` : `100vh`}`}} id="pros" className='pros'>
{/* {swiper()} */}
<h1 className="pros__header">Проэкты</h1>
{content()}
{visible.backContentVisible ? (

<div className="pros__pros-container">
{pros.map((slide, slideIndex) => (
    <div className = 'pros__pros-container__item'
    alt = {pros[slideIndex].title}
    style={{ backgroundImage: `url(${pros[slideIndex].url})`,backgroundSize:'cover' }}
    key={slideIndex}
>  
<div className="pros__pros-container__descr-pros">
    <h1 className="pros__pros-container__descr-pros__header" 
    onClick={() => handleClick(slideIndex)}>{titles[slideIndex]}</h1>
</div>
</div>

))}
</div>
                
            ) : null}

    
        </section>
    )

}

export default Professionals;