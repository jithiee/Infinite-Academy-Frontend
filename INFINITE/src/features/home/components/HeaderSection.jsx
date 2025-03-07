import React from 'react';

import { TypeAnimation } from 'react-type-animation';
import HeaderAside from './HeaderAside';
import { Link } from 'react-router-dom';


const HeaderSection = () => {
    return (
        <div>
            <div className='flex flex-wrap mb-16'>

                {/* first main ================ */}
                <div className='w-full lg:w-[60%] h-auto'>
                    <div className='w-full h-auto mx-auto md:h-[60rem]'>
                        <div className='w-[80%] h-10 mx-auto mt-4 md:ml-36 md:mt-10 '>
                            <div className="flex items-center  h-10 bg-white w-auto px-2">
                                <img className="w-10 h-10 bg-white border rounded-full" src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <div className="ml-2 md:ml-5 text-sm md:text-base lg:text-lg xl:text-xl">WELCOME TO INFINITE HORIZONS ACADEMY</div>                            </div>
                        </div>

                        <div className='w-[80%] h-auto mx-auto mt-8 md:ml-32 space-y-4'>
                            <p className='font-bold text-3xl md:text-7xl text-[#0A090E]'>Building </p>
                            <div className='flex items-center'>

                                <p className='font-bold text-3xl md:text-7xl '>

                                    <TypeAnimation
                                        sequence={[
                                            // Same substring at the start will only be typed out once, initially
                                            'Groundwork',
                                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                                            'Foundations',
                                            1000,
                                            'Framework',
                                            1000,

                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        className='font-bold text-3xl md:text-7xl text-purple-500'
                                        repeat={Infinity}
                                    />

                                </p>



                                <img className="w-10 h-10 bg-white border rounded-full mt-2 md:mt-7 md:ml-10" src="https://img.freepik.com/free-photo/closeup-portrait-caucasian-happy-teacher-glasses_74855-9736.jpg" alt="" />
                                <img className="w-10 h-10 bg-white border rounded-full mt-2 md:mt-7" src="https://qph.cf2.quoracdn.net/main-thumb-118743725-200-hgbgumkqgrgxrgxfmelapymctyvilznm.jpeg" alt="" />
                                <img className="w-10 h-10 bg-white border rounded-full mt-2 md:mt-7" src="https://pbs.twimg.com/profile_images/1048259011294818304/JOuihAPZ_400x400.jpg" alt="" />
                                <img className="w-10 h-10 bg-white border rounded-full mt-2 md:mt-7" src="https://cloud9.shauryasoft.com/media/contentpage_209_116_72.jpg?637864754431838514" alt="" />
                            </div>



                            <p className='font-bold text-3xl md:text-7xl text-[#0A090E]'>For Future Success</p>
                        </div>

                        <div className='flex flex-col md:flex-row w-[80%] h-11 mx-auto mt-10 md:ml-32'>


                            <button >
                                
                                <Link
                                to='register'
                               className='bg-green-500 px-8 py-2 md:px-16 md:py-2 rounded-full no-underline text-black'

                                >
                                
                                Register Now
                                </Link>
                                
                            </button>

                        </div>

                        <div className='w-[80%] h-auto bg-blue-300 mx-auto mt-20 md:ml-32 border-red-200 border-s-8'>
                            <p className="text-white font-serif tracking-widest transform rotate-6 shadow-lg p-4 md:p-10 bg-black bg-opacity-50 rounded-lg animate-pulse">
                                <span className='text-3xl md:text-7xl'>“</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sint voluptatum itaque earum, quae vel, sed, fugit dolore a autem quia dolorem natus quasi hic iusto quas nihil quam nulla.
                            </p>
                        </div>
                    </div>
                </div>
            {/* second main =========== */}

            <div className='w-full lg:w-[40%] h-[42.3rem] bg-gray-100'>
                <div className=''>
                    <HeaderAside/>
                </div>
            </div>
            </div>





        </div>
    );
}

export default HeaderSection;
