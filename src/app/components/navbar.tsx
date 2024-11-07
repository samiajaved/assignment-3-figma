import Image from "next/image"
import logo from "@/app/assets/Logo.png";


export default function Navbar (){
    return (
        <div>
            <div className="w[1920px] h-[92px] px-[220px] py-4 bg-[#043873] flex justify-between ">
                <div className="w-[191px] h-[34px]">
                    <Image src={logo} alt='logo' className="w-auto justify-between items-center mt-3 -ml-24"/>
                </div>

{/* all page navigators */}
                <div className=" w-[373.5px] h-[60px] gap-[60px] flex items-center justify-between -mr-6 ">
                    <div className="w-[549px] h-[23px]">
                        <ul className="flex flex-row justify-between text-white"> 
                            <li className="hover:text-slate-400">Product</li>
                            <li className="hover:text-slate-400">Solution</li>
                            <li className="hover:text-slate-400">Resources</li>
                            <li className="hover:text-slate-400">Pricing</li>
                        </ul>
                    </div>
                </div>
                
                <div className="w-[126px] h-[60px] bg-[#FFE492] rounded-lg -mr-20 py-4 px-10 ">
                        <button className=" text-[#043873] w-[46px] h-[23px]">login </button>
                    </div>


            </div>
        </div>
    )
}

