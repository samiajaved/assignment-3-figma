import Image from "next/image";
import buttonLogo from "@/app/assets/Group 212.png";
import workTogether from "@/app/assets/Work Together Image.png";
import sponsers from "@/app/assets/sponsors.png";


export default function MainContant (){
    return (
        <div>
        <div className=" h-[1588px] w-full py-[80px] px-[130px] ">
            <div className=" w-[1080px] h-[500px] mt-[160px]  gap-[40px] flex ">
                <div className="w-[450px] h-[360px] mt-16 ">
                    <div className="w-[450px] h-[230px] gap-6">
                        <h1 className="font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-[#212529] ">
                        Project Management
                        </h1>
                        <p className="font-normal text-xs leading-6 text-[#212529] mt-4">
                        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams 
                        directly from the app. Take photos with the mobile app and save them to a note.
                        </p>

                        {/* button */}
                      
                    <div className="w-[140px] h-[45px] bg-[#4F9CF9] text-white rounded-lg gap-[10px] py-3 pl-2
                    font-normal tracking-[-2%] text-sm mt-20">
                        <button className="flex justify-between gap-4">Get Started
                        <Image src={buttonLogo} alt="buttonLogo" className="w-auto mt-1 " />
                             </button>
                    </div>


                     </div>
            </div>


                {/* empty container */}
                <div className="w-[600px] h-[500px] bg-[#C4DEFD] "></div>
        </div>

{/* work together page */}

            <div  className=" w-[1080px] h-[500px] mt-[160px] flex gap-[150px]">
                {/* image div */}
                <div>
                    <Image src={workTogether} alt="workTogetherImage" className=" w-[480px] mt-7" />
                </div>

                {/* work together div */}
                <div className="w-[455px] h-[230px]  mt-32 items-end">
                    <div className="w-[455px] h-[171px] ">
                        <h1 className="font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-[#212529]">
                        Work together
                        </h1>
                        <p className="font-normal text-xs leading-6 text-[#212529] mt-4">
                        With whitepace, share your notes with your colleagues and collaborate on them.
                        You can also publish a note to the internet and share the URL with others.
                        </p>

                        
                            {/* button */}
                        
                        <div className="w-[120px] h-[45px] bg-[#4F9CF9] text-white rounded-lg gap-[10px] py-3 pl-2
                        font-normal tracking-[-2%] text-sm mt-12">
                            <button className="flex justify-between gap-4">Try it now
                            <Image src={buttonLogo} alt="buttonLogo" className="w-auto mt-1 " />
                                </button>
                        </div>

                        </div>
                    </div>

                </div>
            </div>


{/* use an Extension page */}
        
        <div className=" h-[800px] w-full py-[8px] px-[130px] bg-[#043873] ">
            <div className=" w-[1080px] h-[500px] mt-[160px] gap-[40px] flex ">
                
                <div className="w-[450px] h-[280px]  mt-28 ">
                    <div className="w-[450px] h-[180px] gap-6">
                        <h1 className="font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-white ">Use as Extension</h1>
                        <p className="font-normal text-xs leading-6 text-white mt-4">
                        Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                        </p>

                   
                        {/* button */}
                      
                        <div className="w-[140px] h-[45px] bg-[#4F9CF9] text-white rounded-lg gap-[10px] py-3 pl-6
                        font-normal tracking-[-2%] text-sm mt-24">
                        <button className="flex justify-between gap-4">Let's Go
                            <Image src={buttonLogo} alt="buttonLogo" className="w-auto mt-1 " />
                             </button>
                        </div>

                   </div>
                </div>

                  {/* empty container */}
                  <div className="w-[600px] h-[500px] bg-[#C4DEFD] "></div>

            </div>  
         </div>

 {/* costumize it to your needs page */}
        <div className=" h-[850px] w-full py-[8px] px-[130px] bg-white ">
            <div className=" w-[1080px] h-[500px] mt-[160px] gap-[40px] flex ">


                  {/* empty container */}
                <div className="w-[650px] h-[500px] bg-[#C4DEFD] "></div>

                    <div className="w-[440px] h-[325px]  mt-24  ">
                        <div className="w-[440px] h-[230px] gap-6">
                            <h1 className="font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-[#212529] ">
                            Customise it to your needs
                            </h1>
                            <p className="font-normal text-xs leading-6 text-[#212529] mt-4">
                            Customise the app with plugins, custom themes and multiple text editors 
                            (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                            </p>

                            {/* button */}
                            
                            <div className="w-[140px] h-[45px] bg-[#4F9CF9] text-white rounded-lg gap-[10px] py-3 pl-6
                            font-normal tracking-[-2%] text-sm mt-12">
                                <button className="flex justify-between gap-4">Let's Go
                                    <Image src={buttonLogo} alt="buttonLogo" className="w-auto mt-1 " />
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>

{/* your work every whre you are */}
            <div className=" h-[400px] w-full py-[85px] px-[150px] bg-[#043873] ">
                <div className=" w-[1080px] h-[250px] ">
                    <div className="w-[738px] h-[150px] ml-[180px] ">
                    <h1 className="font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-white  ">Your work, everywhere you are</h1>
                    <p className="font-normal text-xs leading-6 text-white mt-4 text-center">
                    Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, 
                    Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                    </p>

                        {/* button */}
                            
                        <div className="w-[140px] h-[45px] bg-[#4F9CF9] text-white rounded-lg gap-[10px] py-3 pl-6
                            font-normal tracking-[-2%] text-sm mt-16 ml-[280px]">
                            <button className="flex justify-between gap-4">Try Taskey
                                <Image src={buttonLogo} alt="buttonLogo" className="w-auto mt-1 " />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


{/* our sponsers page */}
        <div className=" h-[386px] w-full py-[85px] px-[150px] bg-white ">
            <div className=" w-[1080px] h-fit  text-[#212529] font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-center">Our sponsors
                <div className=" w-[1080px] h-fit mt-[84px]">
                    <Image src={sponsers} alt="sponsers logo" />
                </div>   
            </div>
        </div>



        </div>   
    )
}

