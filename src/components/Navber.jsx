import { Icon } from '@iconify/react'
import logo from '../assets/logo/weepoka-logo-white.png'
import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
        <div className='relative'>
            <div className='bg-[#004282]'>
                <div className='py-8'>
                    <div className='flex items-center justify-between xl:mx-0 lg:mx-5 mx-5'>
                        <div className='xl:w-1/12 lg:w-2/12 md:w-2/12 w-6/12'>
                            <img src={logo} className='w-full' alt="" />
                        </div>
                        <div onClick={handleRightSideOpen}>
                            <Icon className='text-white text-3xl cursor-pointer' icon="fluent:line-horizontal-3-20-filled" />
                        </div>
                    </div>
                </div>
            </div>


            {/* drawer */}
            {rightDrawer ? <div
                data-aos="slide-left" data-aos-offset="300"
                data-aos-easing="ease-in-out"
                data-aos-duration="500"
                className="fixed top-0 right-0 z-40 h-screen p-4 bg-white w-96 dark:bg-gray-800">
                <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">Right</h5>
                <button type="button" className="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:text-white" >
                    <Icon onClick={handleRightSideClose} className='text-3xl' icon="radix-icons:cross-circled" />
                </button>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nostrum illo delectus voluptate praesentium incidunt ratione aliquid dolorum? Veniam, aliquid illum.</p>
                <div className="grid grid-cols-2 gap-4 mt-5">
                    <a onClick={handleRightSideClose} href="#" className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Close</a>
                </div>
            </div> : <></>}
            {/* drawer */}


        </div>
    );
};

export default Navber;