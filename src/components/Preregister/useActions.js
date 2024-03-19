import { useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useEffect, useState } from 'react';
import { preregister, qrScanned } from '../../api/api';
import { jwtDecode } from 'jwt-decode';
import {isValidPhoneNumber} from 'libphonenumber-js'
export const useActions = () => {
    const location = useLocation();
    const [token, setToken] = useState()
    const [tokenData, setTokenData] = useState()
    const [pageErrors, setPageErrors] = useState({
        isJwtExpired: false,
        isJwtInvalid: false,
        isPreregisterFailed: false,
        error: null
    })
    const [successResponse, setSuccessResponse] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [loadedAssetCount, setLoadedAssetCount] = useState(0)
    const handleImageLoad = () => {
        setLoadedAssetCount((prevCount) => prevCount + 1);
      };

    const searchParams = new URLSearchParams(location.search);
    useEffect(() => {
        setToken(searchParams.get('token'))
    }, [])

    useEffect(() => {
        if(token === undefined) return;
        if(token === null) return setPageErrors({...pageErrors, isJwtInvalid: true})
        try {
            const decoded = jwtDecode(token)
            const {exp} = decoded
            const now = Date.now() / 1000
            
            if(exp < now) setPageErrors({...pageErrors, isJwtExpired: true})
            qrScanned(token).then((response) => {
                const { emitAmount, welcomePerk } = response.data
                setTokenData({ ...jwtDecode(token), emitAmount, welcomePerkAmount: welcomePerk.active ? welcomePerk.reward : false })
            })
        } catch (error) {
            console.log(error)
            setPageErrors({...pageErrors, isJwtInvalid: true})
            setTokenData(null)
        }
    }, [token])

    const {
        handleSubmit,
        watch,
        formState: { errors },
        control,
        setError,
    } = useForm({
        defaultValues: {
            mobile: '',
            countryCode: '+34'
        }
    })
    
    
    
    const onSubmit = async (data) => {
        const {countryCode, mobile} = data
        if (!isValidPhoneNumber(`${countryCode}${mobile}`)) return setError("mobile", { type: "manual", message: "Invalid phone number" })
        try {
            setIsLoading(true)
            const response = await preregister({jwt: token, mobile: `${countryCode}${mobile}`})
            setSuccessResponse(response)
        } catch (error) {
            console.log(error, error?.response?.data)
            setPageErrors({...pageErrors, isPreregisterFailed: true , error: error?.response?.data})
        }
        setIsLoading(false)
    }


    return {
        tokenData,
        pageErrors, 
        setPageErrors,
        form: {
            handleSubmit,
            watch,
            errors,
            onSubmit,
            control,
        },
        successResponse,
        isLoading,
        loadedAssetCount, 
        handleImageLoad
    }
}