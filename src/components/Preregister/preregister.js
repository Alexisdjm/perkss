import React, {  useMemo,} from 'react';
import { useActions } from './useActions';
import { useCountries } from '../../hooks/useCountries';
import images from '../../images/exporting';
import { MobileForm } from './partials/mobileForm';
import { Result } from './partials/result';
import { Loading } from '../loader';
import { AppLoader } from '../appLoader';
import { companyCategory, messages, titles } from './common';
const PreRegister = () => {
    const { countriesSelectOptions, spainSelectOtion } = useCountries();
    const {
        tokenData,
        pageErrors,
        form,
        successResponse,
        isLoading,
        loadedAssetCount, 
        handleImageLoad
    } = useActions();

   
    
    const imageString=useMemo(() => {    
       return companyCategory?.[tokenData?.companyCategory?.name?.toUpperCase()]  
   }, [tokenData])  
   
    const render = () => {
        if(Object.values(pageErrors).every(error => !error) && !successResponse) return <MobileForm form={form} spain={spainSelectOtion} countries={countriesSelectOptions} tokenData={tokenData} ></MobileForm>
        const {isJwtExpired, isJwtInvalid, isPreregisterFailed, error } = pageErrors
        if(isJwtExpired) return <Result title={titles.jwtExpired} tokenData={tokenData} message={messages.jwtExpired} ></Result>

        if(isJwtInvalid) return <Result title={titles.jwtInvalid} tokenData={tokenData} message={messages.jwtInvalid} ></Result>

        if(isPreregisterFailed) return <Result title={titles.preregisterFailed} tokenData={tokenData} message={error?.message === "Transaction is already pre-registered" ? messages.transactionAlreadyUsed : messages.preregisterFailed} ></Result>

        if(successResponse) return <Result title={titles.success} tokenData={tokenData} message={messages.success} ></Result>

    }
   
   
    return (
        <>
        <div className="  flex flex-col justify-between items-center bg-white w-full h-dvh overscroll-y-contain overflow-clip	">
            { loadedAssetCount < 5 && <AppLoader/>} 
            {isLoading && <Loading /> }
            <div className='flex flex-row  h-full w-full '>
            <img src={images[`${imageString}Mobile_topLeft`]} className='h-1/4 w-auto absolute top-0 md:h-1/2' onLoad={handleImageLoad}   />
            <img src={images[`${imageString}Mobile_topRight`]} className='h-1/4 w-auto absolute top-0 right-0  md:h-1/3' onLoad={handleImageLoad}  />
            <img src={tokenData?.companyImage} className="object-cover w-20 h-16 absolute right-24  top-28 md:top-36" style={{ transform: 'rotate(3.58deg)',borderRadius:'8px' }} alt='companyLogo' onLoad={handleImageLoad}/>
            </div>
            <div className='flex flex-col justify-center items-center z-50 h-1/3 ' >
                {render()}
            </div>
            <div className='flex flex-row  h-full w-full '>
            <img src={images[`${imageString}Mobile_bottomLeft`]} className='h-1/2 w-auto absolute bottom-0 md:h-3/4' onLoad={handleImageLoad}   />
            <img src={images[`${imageString}Mobile_bottomRight`]} className='h-1/2 w-auto absolute bottom-0 right-0 md:h-3/4' onLoad={handleImageLoad}  />
            </div>
        </div>
  </>

    );
};

export default PreRegister;
