import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const SelectCmp = () => {
    return (
        <div className="grid grid-cols-7 h-screen">
            <div className="bg-muted">
                <div className="flex flex-col justify-center items-center h-[10%] ">
                    <p> GS khadya Suppliers</p>
                    <p className="text-muted-foreground text-sm"> since 2024</p>
                </div>
                <hr />
                <div className=" pt-5 ">
                    <li className="list-none p-1"><Button variant='ghost' className='font-normal hover:bg-gray-200 w-full justify-start'>Create Company</Button></li>
                    <li className="list-none p-1"><Button variant='ghost' className='font-normal hover:bg-gray-200 w-full justify-start'>Delete Company</Button></li>
                    <li className="list-none p-1"><Button variant='ghost' className='font-normal hover:bg-gray-200 w-full justify-start'>Alter Company</Button></li>
                </div>
            </div>
            <div className="col-span-6 ">
                <div className="p-10">
                    <p className="text-3xl font-medium ">Welcome back, owner Shirish</p>
                    <div className="h-[85vh] flex flex-col items-center justify-center space-y-5">
                        <h1>Select your Company</h1>

                        <ScrollArea className="h-102 w-180 rounded-md border">
                            <div className="text-xl list-none p-2 space-y-3">
                                <li className="hover:bg-gray-100 hover:rounded"><Button variant='ghost' className='font-normal'>PS kirana pasal</Button></li>
                                <li className="hover:bg-gray-100 hover:rounded"><Button variant='ghost' className='font-normal'>Team trade pvt.ltd</Button></li>
                                <li className="hover:bg-gray-100 hover:rounded"><Button variant='ghost' className='font-normal'>GS Khadya Supplier</Button></li>
                                <li className="hover:bg-gray-100 hover:rounded"><Button variant='ghost' className='font-normal'>Manichood Finance</Button></li>
                                <li className="hover:bg-gray-100 hover:rounded"><Button variant='ghost' className='font-normal'>Seto bagh pvt.ltd 2075/2076</Button></li>
                                <li className="hover:bg-gray-100 hover:rounded"><Button variant='ghost' className='font-normal'>CG group and INdustries</Button></li>
                                <li className="hover:bg-gray-100 hover:rounded"><Button variant='ghost' className='font-normal'>ss</Button></li>
                                <li className="hover:bg-gray-100 hover:rounded"><Button variant='ghost' className='font-normal'>vd</Button></li>
                                <li className="hover:bg-gray-100 hover:rounded"><Button variant='ghost' className='font-normal'>ds</Button></li>
                                <li className="hover:bg-gray-100 hover:rounded"><Button variant='ghost' className='font-normal'>fd</Button></li>
                                <li className="hover:bg-gray-100 hover:rounded"><Button variant='ghost' className='font-normal'>gs</Button></li>
                                <li className="hover:bg-gray-100 hover:rounded"><Button variant='ghost' className='font-normal'>kl</Button></li>
                                <li className="hover:bg-gray-100 hover:rounded"><Button variant='ghost' className='font-normal'>kk</Button></li>
                                <li className="hover:bg-gray-100 hover:rounded"><Button variant='ghost' className='font-normal'>jh</Button></li>
                            </div>

                        </ScrollArea>

                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    )
}