import React from "react"
import { Controller } from 'react-hook-form';
import Select from 'react-select'
export const MobileForm = ({countries, spain, form, tokenData }) => {
    const {
        handleSubmit,
        errors,
        onSubmit,
        control,
    } = form
    const customFilter = (option, searchText) => {
        if (
          option.data.name.toLowerCase().includes(searchText.toLowerCase()) ||
          option.data.code.toLowerCase().includes(searchText.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      };
    return (
        <div
            id="preregister"
            className='flex flex-col  items-center w-[275px] '
        >
           <div className='flex flex-col items-center mt-2 w-full '>
                { tokenData && <div className=" text-center text-black text-lg leading-5 font-medium font-['Montserrat'] ">Introduce tu móvil y consigue 
                <span className="font-bold"> {tokenData.emitAmount} € </span>  por tu compra de <span className="font-bold">{tokenData.transactionAmount} € </span>  en {tokenData.companyName} </div>}
            </div>
            <form className='flex flex-col w-full  items-center '>
                <div className='flex w-full justify-end items-center mt-8'>
                    <div className='w-1/5 h-full mr-2'>
                    {countries?.length > 0 && <Controller
                            control={control}
                            name="countryCode"
                            className="h-full"
                            render={({ value, name, ref, field }) => (
                                <>
                                    <Select 
                                        name={name}
                                        ref={ref}
                                        onChange={val => field.onChange(val.value)}
                                        options={countries}
                                        value={countries.find(c => c.value === value)}
                                        defaultValue={spain}
                                        isSearchable={true}
                                        filterOption={customFilter}
                                        styles={
                                            {
                                                option: (provided) => ({
                                                    ...provided,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }),
                                                input: (provided) => ({
                                                    ...provided,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    justifyItems: 'center',
                                                    textAlign: 'center',
                                                    textAlignLast: 'center',
                                                }),
                                            }
                                        }
                                        classNames={
                                            {
                                                control: () => " rounded  border border-slate-300 bg-white h-full ",
                                                container: () => "h-full",
                                                singleValue: () => "flex items-center justify-center h-full",
                                            }
                                        } 
                                        components={{
                                            IndicatorSeparator: () => null,
                                            DropdownIndicator: () => null,
                                          }}
                                    ></Select>
                                </>
                            )}
                        ></Controller>}
                    </div>
                    <div className='w-3/4'>
                        <Controller
                            control={control}
                            name="mobile"
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type='tel'
                                    placeholder='000 000 000'
                                    required
                                    className={`p-2 rounded text-black w-full border-[1px] ${errors?.mobile ? 'border-[#db4446]' : 'border-slate-300'}`} />
                            )}
                        >

                        </Controller>
                    </div>
                </div>

                <div className='flex w-full justify-center mt-6 '>
                    <div className="w-full bg-gradient-to-b from-[#eb00ff]  to-[#1bffe4] p-[1px] rounded-[10.67px] 2xl:w-full">
                        <div className="flex h-full w-full items-center justify-center bg-white back rounded-[10.67px]">
                            <button
                                className='bg-white text-stone-900 text-base font-medium font-["Montserrat"] py-2 px-4 rounded-[10.67px] w-full'
                                type="submit"
                                onClick={handleSubmit(onSubmit)}>Acumular</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className='flex flex-col items-center mt-3 w-[240px]'>
                <div className="text-center">
                    <span className="text-slate-400 text-[8.90px] font-medium font-['Montserrat']">Al continuar, aceptas nuestros </span>
                    <a  href="https://perkss.io/terms_of_use.html"><span className="text-slate-400 text-[8.90px] font-medium font-['Montserrat'] underline leading-tight"> Términos de Uso </span></a>
                    <span className="text-slate-400 text-[8.90px] font-medium font-['Montserrat'] leading-3">   y  </span>
                         <a href="https://perkss.io/privacy_policy.html"> 
                         <p className="text-slate-400 text-[8.90px] font-medium font-['Montserrat'] underline leading-tight">
                         Políticas de Privacidad
                         </p>
                         </a>
                    
                </div>

            </div>
        </div>
    )
}