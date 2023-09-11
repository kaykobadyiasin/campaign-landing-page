import { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import Swal from 'sweetalert2'

const Form = ({ disabled }) => {

    const [selectedValue, setSelectedValue] = useState('');
    const { control, handleSubmit, setValue, formState: { errors }, reset } = useForm();

    // form submit 
    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.status === 200) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your submition completed',
                    showConfirmButton: false,
                    timer: 3000
                })
                reset();
            } else {
                console.error('Email not sent');
                Swal.fire(
                    '!Somthing wrong',
                    'Your submition not complete',
                    'error'
                )
            }
        } catch (error) {
            console.error('Error sending email:', error);
            Swal.fire(
                '!Somthing wrong',
                'Your submition not complete',
                'error'
            )
        }
    };


    return (
        <div className="mb-20">
            <div className="container mx-auto">
                <div className="max-w-3xl lg:mx-auto py-5 px-10 bg-white rounded-lg shadow-lg mx-5">
                    <form onSubmit={handleSubmit(onSubmit)} className="my-5 space-y-6">
                        {/* name  */}
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

                        {/* email  */}
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

                        {/* phone  */}
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
                            {/* project category  */}
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

                            {/* Occupation */}
                            <Controller
                                name="occupation"
                                control={control}
                                rules={{ required: 'occupation is required' }}
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
                                            <option value="Student">Student</option>
                                            <option value="Job Holder">Job Holder</option>
                                            <option value="Freelancer">Freelancer</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                )}
                            />
                        </div>

                        {/* subject category and subject  */}
                        <div>
                            <div className="flex gap-5 justify-between md:flex-nowrap flex-wrap">
                                <div className="w-full">
                                    <span className="block text-md font-medium mb-1 text-black">Subject Category*</span>
                                    <Controller
                                        name="subjectCategory"
                                        control={control}
                                        rules={{ required: 'Subject Category is required' }}
                                        render={({ field }) => (
                                            <select
                                                {...field}
                                                // value={selectedValue}
                                                onChange={(e) => {
                                                    field.onChange(e)
                                                    const selectedValue = e.target.value;
                                                    setValue('subjectCategory', selectedValue);
                                                    setSelectedValue(selectedValue);
                                                }}
                                                disabled={disabled}
                                                className=" border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 px-3 py-2 h-12 border-slate-300 rounded-md text-lg shadow-sm flex items-center gap-2 w-full"
                                            >
                                                <option value="">Select</option>
                                                <option value="Front-end Design/Development">Front-end Design/Development</option>
                                                <option value="Full-Stack Development">Full-Stack Development</option>
                                            </select>
                                        )}
                                    />
                                </div>
                                <div className="w-full">
                                    <span className="block text-md font-medium mb-1 text-black">Subject*</span>
                                    <Controller
                                        name="subject"
                                        control={control}
                                        rules={{ required: 'SubjectCategory is required' }}
                                        render={({ field }) => (
                                            <div className=" flex md:flex-nowrap flex-wrap gap-5 justify-between">
                                                {(selectedValue == 'Full-Stack Development') ? <select
                                                    {...field}
                                                    id="subjectone-select"
                                                    disabled={disabled}
                                                    className=" border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 px-3 py-2 h-12 border-slate-300 rounded-md text-lg shadow-sm flex items-center gap-2 w-full"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="eCommerce website">eCommerce website</option>
                                                    <option value="Educational website">Educational website</option>
                                                    <option value="News-portal website">News-portal website</option>
                                                    <option value="Job Portal Website">Job Portal Website</option>
                                                    <option value="Travel & Tourism Website">Travel & Tourism Website</option>
                                                    <option value="Rental Website">Rental Website</option>
                                                    <option value="Food Delivery Website">Food Delivery Website</option>
                                                </select>
                                                    :
                                                    <select
                                                        {...field}
                                                        id="subject-select"
                                                        disabled={disabled}
                                                        className=" border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 px-3 py-2 h-12 border-slate-300 rounded-md text-lg shadow-sm flex items-center gap-2 w-full"
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="Business Website">Business website</option>
                                                        <option value="Blog website">Blog website</option>
                                                        <option value="Nonprofit/NGO website">Nonprofit/NGO website</option>
                                                        <option value="Restaurants Website">Restaurants Website</option>
                                                        <option value="Travel website">Travel website</option>
                                                        <option value="News and magazine website">News and magazine website</option>
                                                        <option value="Entertainment or media website">Entertainment or media website</option>
                                                    </select>
                                                }
                                            </div>
                                        )}
                                    />
                                </div>

                            </div>
                            <div className="my-5">
                                {(selectedValue == 'Front-end Design/Development') ? <><span><b>Front-end Design/Development:</b> Lorem Ipsum is simply dummy text of the printing and date. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></> : <></>}

                                {(selectedValue == 'Full-Stack Development') ? <><span><b>Full-Stack Development:</b> Lorem Ipsum is simply dummy text of the printing and date. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></> : <></>}
                            </div>
                        </div>


                        {/* rolls  */}
                        <div>
                            <Controller
                                name="agree"
                                control={control}
                                rules={{ required: 'agree is required' }}
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