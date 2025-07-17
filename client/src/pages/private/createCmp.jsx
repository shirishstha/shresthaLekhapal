import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import axios from 'axios'
import { Building, CalendarDaysIcon, CalendarIcon, CircleDollarSign, MapPinHouse } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CreateCmp = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [currency, setCurrency] = useState("");
    const [date, setDate] = useState(null);
    const [open, setOpen] = useState(false);
    const token = useSelector(state => state.token);
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    const submitData = async (e) => {
        e.preventDefault();
        try {
            if (!name || !address || !currency || !date) {
                return toast.error("Please fill out all the details.");
            }
            const res = await axios.post(`${import.meta.env.VITE_BACKENDAPI}/cmp/create-company`,
                {
                    name, address, currency, date: date.toISOString(),createdBy:user._id
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

            if (!res.data.success) {
                return toast.error(res.data.message);
            }

            //if response is ok and company is created 
            toast.success("Company created successfully");
            setTimeout(() => {
                navigate('/private/selectCmp');
            }, 1000);

        } catch (error) {
            console.log(error);
            toast.error("something went wrong");
        }
    }

    //resets the form data
    const clearForm = (e) => {
        e.preventDefault();
        setName("");
        setAddress("");
        setCurrency("");
        setDate(null);
        toast.success("Form data cleared.");
    }

    //handles auto closing calender
    const handleDateSelect = (selectedDate) => {
        setDate(selectedDate);
        setOpen(false);

    }

    return (
        <div className='mx-[20%] my-10 grid gap-5'>
            <div className='px-10'>
                <h1 className='text-3xl font-medium text-orange-600'>Create Company</h1>
                <h2 className='text-sm text-muted-foreground'>Create your new company here by filling the details below . </h2>
            </div>
            <div className='shadow-xl p-10 rounded-lg '>
                <div className='flex flex-col space-y-6 '>
                    <div className=''>
                        <span className='flex py-2 space-x-2'>
                            <Building size={18} className='text-orange-600' />
                            <h1 className='text-sm font-medium text-gray-800'>Company Name</h1>
                        </span>
                        <Input
                            placeholder="Enter your company name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className=''>
                        <span className='flex py-2 space-x-2'>
                            <MapPinHouse size={18} className='text-orange-600' />
                            <h1 className='text-sm font-medium text-gray-800'>Address</h1>
                        </span>
                        <Input
                            placeholder="Company's location here"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className=''>
                        <span className='flex py-2 space-x-2'>
                            <CircleDollarSign size={18} className='text-orange-600 mt-0.5' />
                            <h1 className='text-sm font-medium text-gray-800'>Currency</h1>
                        </span>
                        <Input
                            placeholder="Enter your currency prefix"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)} />
                    </div>
                    <div className='mb-6'>
                        <div className='flex py-2 space-x-2 '>
                            <CalendarDaysIcon size={18} className='text-orange-600 mt-0.5' />
                            <h1 className='text-sm font-medium text-gray-800'>Financial year beginning</h1>

                        </div>

                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className=" w-full text-left justify-start">
                                    <CalendarIcon className='text-orange-600' />
                                    {date ? (<div className='font-normal'>{date.toLocaleString()}</div>) : (<div className='text-muted-foreground font-normal'>Pick a date</div>)}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={handleDateSelect}
                                    className="rounded-md selected:bg-orange-500"
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className='w-full flex justify-around'>
                    <Button onClick={(e) => submitData(e)} className="p-6 bg-orange-600 hover:bg-orange-500 w-70">Create Company</Button>
                    <Button onClick={(e) => clearForm(e)} className="p-6 border border-orange-600 bg-transparent hover:bg-transparent text-orange-600 w-70">Clear Form</Button>
                </div>
            </div>




        </div>

    )
}

export default CreateCmp