import { DownloadApp } from "./downloadApp"
import images from "../../../images/exporting";
import UpArrow from '../../../images/img/Result_UpArrow.svg'
export const Result = ({ title, message, tokenData }) => {
    const transformStyle = {
        transform: 'matrix(1, -0.1, 0.15, 0.99, 0, 0)',
      };
    return (
    <div id="success" className="flex flex-col relative items-center w-[275px]">
            
        <div className=" w-3/4 flex flex-col items-center ">
            <h3 className="font-['Amatic_SC'] tracking-tight text-[34.79px]  text-[#07212D] font-medium">{title}</h3>
        </div>
        <div className="w-[350px] flex flex-col items-center  ">
            <p className=" text-center text-black text-[18px] font-['Montserrat'] leading-[21.94px] font-medium">
                {message}
            </p>
        </div>
        <div  className='justify-center items-center'>
            <img src={images.result_side} className=' absolute -left-[50px] w-1/3 h-10  bottom-[160px] '  />
            </div>
        <DownloadApp></DownloadApp>
        <div  className='flex flex-row justify-between  w-full h-30 relative'>
            <img src={UpArrow} className='flex align-self-end  relative  w-3/4 h-24 bottom-[10px]'  />
            <p style={transformStyle} className="font-['Amatic_SC'] relative  w-[200px] lg:w-[230px] lg:right-[50px] h-[78px] font-medium text-[28px] text-[#07212D] leading-[26px] right-[56px] top-[44px] bg-white"> { 'descarga, y gana 10 €!'} </p>
            <img src={images.result_right} className='flex right-0 w-1/4 h-1/3 relative bottom-[14px] lg:w-1/2 lg:-right-20'  />

            </div>
      
    </div>)
}