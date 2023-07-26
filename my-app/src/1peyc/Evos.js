import React, { Component } from 'react'
import style from '../1peyc/evos.module.css'
import { MdFastfood } from 'react-icons/md'

export default class Evos extends Component {
  render() {
    return (
      <div>
        <div className={style.katta1}>
<div className={style.katta}>

    <div className={style.text}>
    <h2 className={style.h2}>Вкусно. Быстро. Качественно.</h2>
        <div className={style.text1}>
    <MdFastfood className="md1"/>
    <MdFastfood className="md2"/>
    <MdFastfood className="md3"/>
    <MdFastfood className="md4"/>
    </div>
    
    <div className={style.text2}>Любимые блюда и восточное гостеприимство</div>
    <div className={style.buttun}>
    <button class={style.NewBanner_btn__kQmI61}>Bizning menyu </button>
        
    <button class={style.NewBanner_btn__kQmI6}>APP Evos </button>
    </div>



    <div className={style.imgs}>
      <img className={style.img1} src="https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88%20(%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9).jpg" alt="" />
        <img className={style.img2} src="https://pasta.uz/upload/products/%D0%A8%D0%B0%D1%83%D1%80%D0%BC%D0%B0%20(%D0%B3%D0%BE%D0%B2%D1%8F%D0%B6%D0%B8%D0%B9).jpg" alt="" />
        <img className={style.img3} src="https://pasta.uz/upload/products/Evos%20Max.jpg" alt="" />
       <img className={style.img4} src="https://pasta.uz/upload/products/%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%A5%D0%BE%D1%82-%D0%B4%D0%BE%D0%B3.jpg" alt="" />
    </div>
</div>

</div>
      </div>
      </div>
    )
  }
}
