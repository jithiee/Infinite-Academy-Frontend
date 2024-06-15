import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import std1 from '../assets/images/std1.png'
import std2 from '../assets/images/std2.png'
import std3 from '../assets/images/std3.png'





const HeaderAside = () => {
  return (
    <div className='w-[90%] h-[38rem] mt-3 ml-5' >
      <div className='flex  w-[100%] h-96 '>

        <div className='w-96 h-96  ml-3'>
          <Carousel fade  >
            <Carousel.Item>

              <img src={std1} alt="First slide" className="w-auto h-96  " />



            </Carousel.Item>
            <Carousel.Item>

              <img src={std2} alt="First slide" className="w-auto h-96  " />

            </Carousel.Item>
            <Carousel.Item>

              <img src={std3} alt="First slide" className="w-auto h-96  " />


            </Carousel.Item>
          </Carousel>
        </div>



        <div className='w-24 h-[26rem] mt-5 ml-10 flex items-center justify-center text-black'>
          <p className='transform rotate-90 text-3xl whitespace-nowrap flex-shrink-0  font-bold  opacity-20 '>Infinite Horizons Academy</p>
        </div>

      </div>

      <div className="w-[80%] h-[12rem] bg-gradient-to-r ml-3 mt-5 text-lg p-4 font-serif rounded-lg flex flex-col justify-center  space-y-2 ">


        <div className='flex'>
          <img className="w-8 h-8 bg-white border rounded-full " src="https://img.freepik.com/free-vector/golden-star-3d_1053-79.jpg?t=st=1717337417~exp=1717341017~hmac=8aaec261e77540d728d00d033af9c81ddfde8f515162a2a09ed7373102ffddbd&w=740" alt="" />
          <p className="text-black ml-3"> Learning Haven Academy</p><hr />
        </div> <hr />
        <div className='flex'>
          <img className="w-8 h-8 bg-white border rounded-full " src="https://img.freepik.com/free-vector/golden-star-3d_1053-79.jpg?t=st=1717337417~exp=1717341017~hmac=8aaec261e77540d728d00d033af9c81ddfde8f515162a2a09ed7373102ffddbd&w=740" alt="" />
          <p className="text-black ml-3">Innovative Minds Institute</p><hr />
        </div> <hr />
        <div className='flex'>
          <img className="w-8 h-8 bg-white border rounded-full " src="https://img.freepik.com/free-vector/golden-star-3d_1053-79.jpg?t=st=1717337417~exp=1717341017~hmac=8aaec261e77540d728d00d033af9c81ddfde8f515162a2a09ed7373102ffddbd&w=740" alt="" />
          <p className="text-black ml-3"> Knowledge Oasis School </p><hr />
        </div> <hr />
        <div className='flex'>
          <img className="w-8 h-8 bg-white border rounded-full " src="https://img.freepik.com/free-vector/golden-star-3d_1053-79.jpg?t=st=1717337417~exp=1717341017~hmac=8aaec261e77540d728d00d033af9c81ddfde8f515162a2a09ed7373102ffddbd&w=740" alt="" />
          <p className="text-black ml-3"> Bright Futures Academy</p><hr />
        </div> <hr />


      </div>

    </div>
  );
}

export default HeaderAside;
