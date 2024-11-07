import React from "react";
import Image from "next/image";
import buttonLogo from "@/app/assets/Group 212.png";
import MainContant from "./contant";
import Footer from "./footer";

 export default function Hero (){
    return (
        <div>
            <div className="py-[140px] px-[200px] top-[92px] bg-[#043873] flex justify-between">

                <div className="w-[1080px]  h-[520px]  -ml-24 flex ">
                    <div className="w-[470px] h-[230px] mt-32 ">
                        <h2 className="font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-white  mb-5">
                        Get More Done with whitepace
                        </h2>
                        <p className="font-normal text-xs leading-6 text-white mt-4 " >
                        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                        </p>

                           {/* button */}
                            
                    <div className="w-fit h-[45px] bg-[#4F9CF9] text-white rounded-lg gap-[10px] py-3 pl-6
                            font-normal tracking-[-2%] text-sm mt-8 ">
                            <button className="flex justify-between gap-4">Try Whitepace Free
                                <Image src={buttonLogo} alt="buttonLogo" className="w-auto mt-2 pr-2" />
                            </button>
                        </div>
                    </div>

                 

                            {/* empty container */}
                <div className="w-[620px] h-[520px] bg-[#C4DEFD] "></div>

                </div>

 
              
            
            </div>

            <MainContant />

            <Footer />
        </div>
    )
}