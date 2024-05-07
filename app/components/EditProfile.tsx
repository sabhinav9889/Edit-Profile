"use client"

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const EditProfile = ()=> {
    const Email = "sabhinav@gmail.com";
    const Dates = '12 Feb,2024';
    const [skill,setSkill] = useState<string>("");
    const [interest,setInterest] = useState<string>("");
    const [lis1, setList1] = useState<string[]>([]);
    const [lis2, setList2] = useState<string[]>([]);
    function getHTMLCode(lis:string[]){
        return(
            <div className="p-2">
                <div className="col-span-4 block">
                    {lis.map((ele, idx)=>(
                        <span className="bg-pink-200 mt-1 mr-1 p-3 inline-block"><FontAwesomeIcon icon={faXmark} className="pt-2 pr-2" />{ele}</span>
                    ))}
                </div>
            </div>
        )
    }
    function handleCall(e:React.KeyboardEvent<HTMLInputElement>, f:boolean){
        if(e.key!=="Enter") return;
        if(f){ setList1((prev)=>[...prev,(e.target as HTMLInputElement).value]);  setSkill("");  }
        else{  setList2((prev)=>[...prev,(e.target as HTMLInputElement).value]);  setInterest(""); }
    }
    return(
            <div className="text-black border rounded-md shadow-sm p-2 max-w-6xl m-auto w-full mt-10 mb-10">
            <div className="flex justify-end p-2 font-semibold">  
                <button className="rounded-md p-2 w-20 bg-gray-300 text-white">Back</button>
                <button className="rounded-md p-2 ml-2 bg-emerald-800 hover:bg-blue-300 text-white">Upload Resume</button>
            </div>
            <div className="p-4">
                <div className="lg:grid grid-cols-6">
                    <hr className="mt-2 mb-4 col-span-6"/>
                    <p className="text-pink-600 col-span-2 font-semibold">PERSONAL INFO</p>
                    <input type="text" placeholder="First Name" className="input input-bordered w-full  lg:mt-0 mt-4 h-10 text-sm col-span-2 p-4 bg-white" required/>
                    {/* <input type="text" placeholder="First Name" className="" required/> */}
                    <div className="col-span-2 lg:flex justify-end lg:mt-0 mt-4">
                      <input type="text" placeholder="Last Name" className="input input-bordered w-full lg:w-2/3 text-sm h-10  p-4  block bg-white" />
                    </div>
                    <div className="col-span-2">

                    </div>
                    <div className="col-span-4 pt-4 pb-4">
                        <div className="p-2 pl-3 bg-blue-100 rounded-md">
                        {Email}
                        </div>
                    </div>
                    <div className="col-span-2">

                    </div>
                    <div className="col-span-4 pt-4 pb-4">
                        <input type="text" placeholder="Contact Info" className="input input-bordered w-full h-10 text-sm p-2 bg-white" />
                    </div>
                    <div className="col-span-2">

                    </div>
                    <div className="col-span-4 pt-4 pb-4">
                       <input type="text" placeholder="Job Role" className="input input-bordered w-full  h-10 p-2 text-sm bg-white" />
                    </div>
                    <div className="col-span-2">

                    </div>
                    <div className="col-span-4 pt-4 pb-4">
                        <input type="text" placeholder="Company" className="input input-bordered w-full bg-white h-10  p-2 text-sm" />
                    </div>
                    <hr className="mt-2 mb-4 col-span-6"/>
                    <div className="text-pink-600 col-span-2">
                        <p className="font-semibold p-2">UPLOAD PROFILE IMAGE</p>
                        <p className="text-sm p-2">Image Resulation {'('}200{'*'}200{')'}</p>
                    </div>
                    <div className="col-span-2">
                        <Image src="/7abc56.jpg" alt="profile" width={250} height={250}/>       
                    </div>
                    <div className="col-span-2 flex">
                        {/* <div className="h-8 border mt-48"></div> */}
                        {/* <button className="border h-8 rounded-md mt-48">Select</button> */}
                        {/* <input type="file" className="text-gray-600 h-8 lg:mt-48 w-auto" /> */}
                        <input type="file" className="file-input file-input-bordered file-input-accent w-full  h-10 mt-2 lg:mt-56 bg-white" />
                    </div>
                    <hr className="mt-2 mb-4 col-span-6"/>
                    <p className="text-pink-600 col-span-2 font-semibold">DATE JOINED</p>
                    <div className="col-span-4 pt-4 pb-4">
                        <div className="p-2 pl-3 bg-blue-100 rounded-md">
                        {Dates}
                        </div>
                    </div>
                    <hr className="mt-2 mb-4 col-span-6"/>
                    <p className="text-pink-600 col-span-2 font-semibold">CURRENT SKILLS</p>
                    <div className="col-span-4 pt-4 pb-4">
                       <input type="text" onChange={(e)=>setSkill(e.target.value)} value={skill} placeholder="Type in your skill and press Enter." className="input input-bordered w-full bg-white h-10 p-2 text-sm" onKeyDown={(e)=>handleCall(e,true)}/>
                       {getHTMLCode(lis1)}
                    </div>
                    <hr className="mt-2 mb-4 col-span-6"/>
                    <p className="text-pink-600 col-span-2 font-semibold">AREAS OF INTEREST</p>
                    <div className="col-span-4 pt-4 pb-4">
                        <input type="text" onChange={(e)=>setInterest(e.target.value)} value={interest} placeholder="Type in your interest and press Enter." className="input input-bordered w-full bg-white h-10  p-2 text-sm" onKeyDown={(e)=>handleCall(e,false)} />
                        {getHTMLCode(lis2)}
                    </div>
                </div>
                <div className="flex justify-end">
                  <button className="rounded-md p-2 w-24 font-semibold  bg-emerald-800 hover:bg-blue-300 text-white">Update</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;