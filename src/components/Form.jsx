import { Icon } from "@iconify/react";
import { useForm, Controller } from 'react-hook-form';

const Form = ({ disabled }) => {

    const { control, handleSubmit, reset } = useForm();

    // form submit 
    const onSubmit = async (data) => {

        // if(data.subjectCategory)

        console.log(data)
        console.log(data.subjectCategory)
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.status === 200) {
                console.log('Email sent successfully');
                reset()
            } else {
                console.error('Email not sent');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };




    return (
        <div className="mb-20">
            <div className="container mx-auto">
                <div className="max-w-3xl lg:mx-auto py-5 px-10 bg-white rounded-lg shadow-lg mx-5">
                    <form onSubmit={handleSubmit(onSubmit)} className="my-5 space-y-6">
                        <label className="block">
                            <span className="block text-md font-medium text-black">Name*</span>

                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: 'Name is required' }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        id="name"
                                        type="text"
                                        disabled={disabled}
                                        placeholder="example: Jhon Die" className="mt-1 block w-full px-3 py-2 bg-white border h-12 border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                                )}
                            />

                        </label>
                        <label className="block">
                            <span className="block text-md font-medium text-black">Email*</span>

                            <Controller
                                name="email"
                                control={control}
                                rules={{ required: 'Email is required' }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="email"
                                        disabled={disabled}
                                        placeholder="example: (example@gmail.com)" className="mt-1 block w-full px-3 py-2 bg-white border h-12 border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                                )}
                            />

                        </label>
                        <label className="block">
                            <span className="block text-md font-medium text-black">Phone*</span>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{ required: 'Phone is required' }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="tel"
                                        disabled={disabled}
                                        placeholder="example: (01800000008)" className="mt-1 block w-full px-3 py-2 bg-white border h-12 border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                                )}
                            />
                        </label>
                        <div className="flex md:flex-nowrap flex-wrap justify-between gap-5">
                            <label className="w-full">
                                <span className="block text-md font-medium text-black">Project Category*</span>

                                <Controller
                                    name="projectCategory"
                                    control={control}
                                    rules={{ required: 'Project Category is required' }}
                                    render={({ field }) => (
                                        <input type="text"
                                            {...field}
                                            disabled={disabled}
                                            placeholder="example: (category)" className="mt-1 block w-full px-3 py-2 bg-white border h-12 border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                                    )}
                                />

                            </label>
                            <Controller
                                name="occupation"
                                control={control}
                                rules={{ required: 'Occupation is required' }}
                                render={({ field }) => (
                                    <div className="dropdown w-full">
                                        <span className="block text-md font-medium mb-1 text-black">Occupation*</span>
                                        <select
                                            {...field}
                                            id="occupation-select"
                                            disabled={disabled}
                                            className="dropbtn border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 px-3 py-2 h-12 border-slate-300 rounded-md text-lg shadow-sm flex items-center gap-2 w-full"
                                        >
                                            <option value="">Select</option>
                                            <option value="student">Student</option>
                                            <option value="jobholder">Job Holder</option>
                                            <option value="freelancer">Freelancer</option>
                                            <option value="other">Others</option>
                                        </select>
                                    </div>
                                )}
                            />

                        </div>
                        <div>
                            <span className="block text-md font-medium mb-1 text-black">Subject Category*</span>
                            <Controller
                                name="subjectCategory"
                                control={control}
                                defaultValue={[]} // Set the default value as an empty array
                                render={({ field }) => (
                                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                            <div className="flex items-center pl-3">
                                                <input
                                                    {...field}
                                                    id="frontend-checkbox"
                                                    disabled={disabled}
                                                    type="checkbox"
                                                    value="frontend" // Set the value to "frontend"
                                                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-none dark:ring-offset-gray-700 dark:border-gray-500"
                                                />
                                                <label htmlFor="frontend-checkbox" className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Frontend Development</label>
                                            </div>
                                        </li>
                                        
                                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                            <div className="flex items-center pl-3">
                                                <input
                                                    {...field}
                                                    id="backend-checkbox"
                                                    disabled={disabled}
                                                    type="checkbox"
                                                    value="backend" // Set the value to "backend"
                                                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-none dark:ring-offset-gray-700 dark:border-gray-500"
                                                />
                                                <label htmlFor="backend-checkbox" className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Backend Development</label>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                            />

                        </div>
                            {/* {(frontendId.checked == true) ? <><span>front end Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, odio?</span></> : <></>} */}
                            {/* {backendId.checked ? <><span>backend end Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, odio?</span></> : <></>} */}
                        <div>
                            <Controller
                                name="agree"
                                control={control}
                                defaultValue={false} // Set the default value to false (unchecked)
                                render={({ field }) => (
                                    <div className="flex items-center gap-2 justify-start my-10">
                                        <input
                                            {...field}
                                            id="link-checkbox"
                                            type="checkbox"
                                            disabled={disabled}
                                            value="agree"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:ring-offset-gray-800 focus:outline-none"
                                        />
                                        <label htmlFor="link-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                            I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>
                                        </label>
                                    </div>
                                )}
                            />

                        </div>
                        <div className="flex justify-end">
                            <button type="submit" disabled={disabled} className="btn bg-[#004282] px-5 py-3 text-white rounded-md">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;