
import Image from "next/image";
import logo from "@/app/assets/Logo.png";
import footerLogo from "@/app/assets/©2021 Whitepace LLC..png";


export default function Footer (){
    return (
        <div>
             <div className=" h-[400px] w-full py-[120px] px-[130px] bg-[#043873] ">
                <div className="w-[1080px] h-[180px]   gap-[20px] flex">
{/* div1 */}
                    <div className="w-[258px]  text-white">
                        <Image src={logo} alt="logo" />
                        <div className="w-[205px] mt-5" >
                        <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                        </div>
                    </div>

{/* div2 */}

                    <div className="w-[258px] text-white">
                        <h1 className="font-bold text-base  leading-[21.78px]">Product</h1>
                        <ul >
                            <li  className="mt-3">Overveiw </li>
                            <li  className="mt-3">Pricig</li>
                            <li  className="mt-3">Costumer Stories</li>
                        </ul>
                    </div>




{/* div3 */}
                    <div className="w-[258px]  text-white">
                        <h1 className="font-bold text-base  leading-[21.78px]">Resources</h1>
                        <ul >
                            <li  className="mt-3">Blog</li>
                            <li  className="mt-3">Guides & Totorials</li>
                            <li  className="mt-3">Help Center</li>
                        </ul>
                    </div>




{/* div4 */}
                    

                    <div className="w-[258px]  text-white">
                        <h1 className="font-bold text-base  leading-[21.78px]">Company</h1>
                        <ul >
                            <li  className="mt-3">About us</li>
                            <li  className="mt-3">Careers</li>
                            <li  className="mt-3">Media Kit</li>
                        </ul>
                    </div>


                   


                </div>

                <Image src={footerLogo} alt="footerLogo"  className="mt-20 ml-[450px]"/>
             </div>
        </div>
    )
}