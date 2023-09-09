import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';


const CountDown = ({setDisabled}) => {

    
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const targetDate = new Date('2023-09-16T00:00:00'); // Replace with your target date and time


    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeDifference = targetDate - now;

            if (timeDifference <= 0) {
                clearInterval(interval); // Timer expired
                setDisabled(true)
                Swal.fire({
                    title: 'The form filling time is over',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                return;
            }

            const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setDays(daysLeft);
            setHours(hoursLeft);
            setMinutes(minutesLeft);
            setSeconds(secondsLeft);
        }, 1000);

        return () => clearInterval(interval);
    }, []);



    return (
        <div className="">
            <div className="text-center flex lg:gap-10 md:gap-8 gap-5 justify-center text-white mb-5 lg:mx-0 md:mx-5">
                <div className=" font-semibold border-2 lg:w-44 md:w-40 lg:h-24 md:h-20 w-[75px] h-[75px] lg:text-xl md:text-lg text-sm flex justify-center items-center rounded-full p-5">{days} days</div>
                <div className=" font-semibold border-2 lg:w-44 md:w-40 lg:h-24 md:h-20 w-[75px] h-[75px] lg:text-xl md:text-lg text-sm flex justify-center items-center rounded-full p-5">{hours} hours</div>
                <div className=" font-semibold border-2 lg:w-44 md:w-40 lg:h-24 md:h-20 w-[75px] h-[75px] lg:text-xl md:text-lg text-sm flex justify-center items-center rounded-full p-5">{minutes} minutes</div>
                <div className=" font-semibold border-2 lg:w-44 md:w-40 lg:h-24 md:h-20 w-[75px] h-[75px] lg:text-xl md:text-lg text-sm flex justify-center items-center rounded-full p-5">{seconds} seconds</div>
            </div>
        </div>
    );
};

export default CountDown;