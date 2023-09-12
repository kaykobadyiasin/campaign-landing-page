
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navber from '../../components/Navber';
import Form from '../../components/form';
import CountDown from '../../components/CountDown';
import { useState } from 'react';

const Home = () => {

    const [disabled, setDisabled] = useState();

    Aos.init();

    return (
        <>
            <div>
                <div className='bg-[#004282]'>
                    <div className='container mx-auto'>
                        <div>
                            <Navber />
                        </div>
                        <div className='lg:mt-32 md:mt-20 mt-10 pb-40 space-y-10'>
                            <div className='' data-aos="slide-down"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <CountDown setDisabled={setDisabled} />
                            </div>
                            <div className='text-center text-white xl:w-6/12 lg:w-8/12 lg:mx-auto mx-5'>
                                <h2 className="lg:text-6xl md:text-5xl text-3xl font-semibold mb-5"
                                    data-aos="zoom-in-down"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="1000"
                                >Web Development</h2>
                                <p
                                    data-aos="zoom-in-up"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="1000"
                                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='w-full min-h-screen relative'>
                        <div className='absolute left-0 right-0 -top-28'
                            data-aos="slide-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <Form disabled={disabled} />
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Home;