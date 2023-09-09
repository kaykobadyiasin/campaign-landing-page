import { Icon } from "@iconify/react";

const Form = ({ disabled }) => {

    return (
        <div className="mb-20">
            <div className="container mx-auto">
                <div className="max-w-3xl lg:mx-auto py-5 px-10 bg-white rounded-lg shadow-lg mx-5">
                    <form className="my-5 space-y-6">
                        <label className="block">
                            <span className="block text-md font-medium text-black">Name*</span>
                            <input type="text" disabled={disabled} placeholder="example: Jhon Die" className="mt-1 block w-full px-3 py-2 bg-white border h-12 border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                        </label>
                        <label className="block">
                            <span className="block text-md font-medium text-black">Email*</span>
                            <input type="email" disabled={disabled} placeholder="example: (example@gmail.com)" className="mt-1 block w-full px-3 py-2 bg-white border h-12 border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                        </label>
                        <label className="block">
                            <span className="block text-md font-medium text-black">Phone*</span>
                            <input type="text" disabled={disabled} placeholder="example: (01800000008)" className="mt-1 block w-full px-3 py-2 bg-white border h-12 border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                        </label>
                        <div className="flex md:flex-nowrap flex-wrap justify-between gap-5">
                            <label className="w-full">
                                <span className="block text-md font-medium text-black">Project Category*</span>
                                <input type="text" disabled={disabled} placeholder="example: (category)" className="mt-1 block w-full px-3 py-2 bg-white border h-12 border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                            </label>
                            <div className="dropdown w-full">
                                <span className="block text-md font-medium mb-1 text-black">Occupation*</span>
                                <button disabled={disabled} className="dropbtn border px-3 py-2 h-12 border-slate-300 rounded-md text-lg shadow-sm flex items-center gap-2 w-full" type="button">Select <Icon icon="mingcute:down-fill" /></button>

                                <div className="hidden z-10 shadow-lg w-48 bg-white rounded-lg dropdown-content">
                                    <ul className="p-3 space-y-1 text-sm">
                                        <li htmlFor="student-radio">
                                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">

                                                <input id="student-radio" disabled={disabled} type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                                <label htmlFor="student-radio" disabled={disabled} className="w-full ml-2 text-md font-medium text-gray-900 rounded dark:text-gray-300">Student</label>
                                            </div>
                                        </li>
                                        <li htmlFor="job-holder-radio">
                                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">

                                                <input id="job-holder-radio" type="radio" disabled={disabled} value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                                <label htmlFor="job-holder-radio" className="w-full ml-2 text-md font-medium text-gray-900 rounded dark:text-gray-300">Job Holder</label>
                                            </div>
                                        </li>
                                        <li htmlFor="freelancer-radio">
                                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">

                                                <input id="freelancer-radio" type="radio" disabled={disabled} value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                                <label htmlFor="freelancer-radio" className="w-full ml-2 text-md font-medium text-gray-900 rounded dark:text-gray-300">Flelancer</label>
                                            </div>
                                        </li>
                                        <li htmlFor="others-radio">
                                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">

                                                <input id="others-radio" type="radio" disabled={disabled} value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                                <label htmlFor="others-radio" className="w-full ml-2 text-md font-medium text-gray-900 rounded dark:text-gray-300">Others</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="block text-md font-medium mb-1 text-black">Subject Category*</span>
                            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="frontend-checkbox" disabled={disabled} type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-none dark:ring-offset-gray-700 dark:border-gray-500" />
                                        <label htmlFor='frontend-checkbox' className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Frontend Development</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="backtend-checkbox" disabled={disabled} type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-none dark:ring-offset-gray-700 dark:border-gray-500" />
                                        <label htmlFor='backtend-checkbox' className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Back End Development</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 justify-start my-10">
                                <input id="link-checkbox" type="checkbox" disabled={disabled} value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:ring-offset-gray-800 focus:outline-none " />
                                <label htmlFor="link-checkbox" className=" text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a> </label>
                            </div>
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