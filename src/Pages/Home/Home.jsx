
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navber from '../../components/Navber';
import Form from '../../components/form';
import CountDown from '../../components/CountDown';

const Home = () => {

    Aos.init();

    return (
        <>
            <div className='bg-[#004282]'>
                <div className='container mx-auto'>
                    <Navber />
                    <div className='pt-32 pb-16 space-y-10'>
                        <div className='' data-aos="slide-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <CountDown />
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
            <div className='w-full h-52 relative bg-[#004282]'>
                <div className='absolute left-0 right-0 top-0'
                    data-aos="slide-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <Form />
                </div>
            </div>
        </>
    );
};

export default Home;