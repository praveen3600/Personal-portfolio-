import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Slider from './../assets/images/bnr15.jpg'

const CarouselComponent = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src={Slider} class="d-block w-100" alt="..."/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Slider} class="d-block w-100" alt="..."/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Slider} class="d-block w-100" alt="..."/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselComponent