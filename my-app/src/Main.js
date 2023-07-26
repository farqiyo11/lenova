import React, { Component } from 'react'
import axios from 'axios'
import cards from './cars.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";
export default class Main extends Component {
    state = {
        data: []
    }


    getData=()=>{
        axios.get("https://evos.abbas.uz/product").then(res => {
            this.setState({ data: res.data })
            console.log(`|RESDATA23${res.data}`);
        }).catch(err => {
            console.log("EROR");
        })
    }



    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <div>
                      <div className={cards.evos}>
                <Swiper
        slidesPerView={5}
        grid={{
          rows: -1,
        }}
        spaceBetween={30}
         loop={true}
        pagination={{
          clickable: true,
         
        }}
        modules={[Grid, Pagination]}
        className={cards.mySwiper}
      >
        {
                    this.state.data.map((item) => ( <SwiperSlide> 
                        <div className={cards.card3} >
                     <img className={cards.imgs} src={item.link} alt="" /> <h1 className={cards.h1}>{item.title}</h1><h2 className={cards.h2}>{item.price}</h2>
                     <button className={cards.button}> sotip olish </button>
                        </div>
                   
               </SwiperSlide>  )) }
               
    {
                    this.state.data.map((item) => (      <SwiperSlide>
                        <div className={cards.card3} >
                     <img className={cards.imgs} src={item.link} alt="" /> <h1 className={cards.h1}>{item.title}</h1><h2 className={cards.h2}>{item.price}</h2>
                     <button className={cards.button}> sotip olish </button>
                        </div>
                 </SwiperSlide>    ))
                    }
                   
                   {
                    this.state.data.map((item) => (      <SwiperSlide>
                        <div className={cards.card3} >
                     <img className={cards.imgs} src={item.link} alt="" /> <h1 className={cards.h1}>{item.title}</h1><h2 className={cards.h2}>{item.price}</h2>
                     <button className={cards.button}> sotip olish </button>
                        </div>
                 </SwiperSlide>    ))
                    }
                         {
                    this.state.data.map((item) => (      <SwiperSlide>
                        <div className={cards.card3} >
                     <img className={cards.imgs} src={item.link} alt=""/> <h1 className={cards.h1}>{item.title}</h1><h2 className={cards.h2}>{item.price}</h2>
                     <button className={cards.button}> sotip olish </button>
                        </div>
                 </SwiperSlide>    ))
                    }
                         {
                    this.state.data.map((item) => (      <SwiperSlide>
                        <div className={cards.card3} >
                     <img className={cards.imgs} src={item.link} alt="" /> <h1 className={cards.h1}>{item.title}</h1><h2 className={cards.h2}>{item.price}</h2>
                     <button className={cards.button}> sotip olish </button>
                        </div>
                 </SwiperSlide>    ))
                    }
                         {  
                    this.state.data.map((item) => (      <SwiperSlide>
                        <div className={cards.card3} >
                     <img className={cards.imgs} src={item.link} alt="" /> <h1 className={cards.h1}>{item.title}</h1><h2 className={cards.h2}>{item.price}</h2>
                     <button className={cards.button}> sotip olish </button>
                        </div>
                 </SwiperSlide>    ))
                    }
      </Swiper>
        

          
           
               

    </div>
            </div>
        )
    }
}
