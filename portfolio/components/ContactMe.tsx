import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs ={
    name: string;
    email: string;
    subject: string;
    message: string;
}
type Props = {}

export default function ContactMe({}: Props) {
    const {register, handleSubmit} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:lukascodes64@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
    }
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-white text-2xl'>Contact</h3>

        <div className='flex flex-col space-y-10'>
          <h4 className = "text-white text-4xl font-semibold text-center">I have got what you need. <span className='underline decoration-[#2272FF] animate-pulse'>Let&apos;s Talk</span></h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className="h-7 w-7 animate-pulse"/>
                <p className = "text-white text-2xl">+1765.546.1064</p>
                </div>
            </div>
            <div>
                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className="h-7 w-7 animate-pulse"/>
                <p className = "text-white text-2xl">lukascodes64@gmail.com</p>
                </div>
            </div>  
            <div>
                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className="h-7 w-7 animate-pulse"/>
                <p className = "text-white text-2xl">Parker City, IN</p>
                </div>
            </div>  
            <form onSubmit ={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder = "Name" className = "contactInput" type="text" />
                    <input {...register('email')} placeholder = "Email" className = "contactInput" type="email" />
                </div>

                <input {...register('subject')}placeholder = "Subject" className = "contactInput" type="text"/>

                <textarea {...register('message')}placeholder = "Message" className = "contactInput"/>

                <button type ="submit" className='bg-[#2272FF] py-5 px-10 rounded-md text-white font-bold text-lg hover:bg-[#2272FF]/40 transition duration-300 ease-in-out'>Submit</button>
            </form>

        </div>
    </div>
  )
}