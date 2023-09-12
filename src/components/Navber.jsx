import { Icon } from '@iconify/react'
import logo from '../assets/logo/weepoka-logo-white.png'
import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Navber = () => {

    Aos.init();

    const [rightDrawer, setRightDrawer] = useState(false);

    const handleRightSideOpen = () => {
        setRightDrawer(true)
    }
    const handleRightSideClose = () => {
        setRightDrawer(false)
    }

    return (
        <div className=''>
            <div className='bg-[#004282]'>
                <div className='py-8'>
                    <div className='flex items-center justify-between xl:mx-0 lg:mx-5 mx-5'>
                        <div className='xl:w-1/12 lg:w-2/12 md:w-2/12 w-6/12'>
                            <Link to='/'><img src={logo} className='w-full' alt="" /></Link>
                        </div>
                        <div onClick={handleRightSideOpen}>
                            <Icon className='text-white text-3xl hover:scale-110 cursor-pointer' icon="fluent:line-horizontal-3-20-filled" />
                        </div>
                    </div>
                </div>
            </div>


            {/* drawer */}
            {rightDrawer ? <div
                data-aos="slide-left" data-aos-offset="300"
                data-aos-easing="ease-in-out"
                data-aos-duration="500"
                className="fixed shadow-xl top-0 right-0 z-40 h-screen p-4 bg-white w-96 dark:bg-gray-800">
                <button type="button" className="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:text-white" >
                    <Icon onClick={handleRightSideClose} className='text-3xl' icon="radix-icons:cross-circled" />
                </button>
                <h5 className="inline-flex items-center mb-4 text-2xl font-semibold">Contact Info</h5>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='py-5 space-y-4'>
                    <div>
                        <p className='flex items-center gap-3 mt-2'><Icon icon="solar:phone-bold" className='text-2xl text-[#004282]' /> +880 1606-104415</p>
                    </div>
                    <div>
                        <p className='flex items-center gap-3 mt-2'><Icon icon="bxl:gmail" className='text-2xl text-[#004282]' /><span className=''>contact@weepoka.com</span></p>
                    </div>
                    <div>
                        <Link target='blank' to='https://www.facebook.com/weepoka.digital' className='flex items-center gap-3 mt-2'><Icon icon="ic:baseline-facebook" className='text-2xl text-[#004282]' /><span className='text-blue-700'>Facebook</span></Link>
                    </div>
                    <div>
                        <Link target='blank' to='https://weepoka.com/' className='flex items-center gap-3 mt-2'><Icon icon="mdi:web" className='text-2xl text-[#004282]' /> <span className='text-blue-700'>weepoka.com</span></Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-5">
                    <button onClick={handleRightSideClose} className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Close</button>
                </div>
            </div> : <></>}
            {/* drawer */}


        </div>
    );
};

export default Navber;