import * as React from 'react'
import  { useState } from 'react'
import { useFormik } from 'formik'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import { FormInitialVal } from './types'

const KinsmanForm  = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const formik = useFormik<FormInitialVal>({
        initialValues: {
          partyDescription: '',
          firstName: '',
          lastName: '',
          mobile: '',
          state: '',
          email: '',
          postcode: '',
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(values)
          // move to page 3 if successfully submitted
          setCurrentPage(3)
        },
      });


    return (
        <div className="text-gotham text-[30px] flex flex-col items-center justify-center w-[100vw] h-[100vh] lg:bg-[url('../public/images/img-02.jpg')] bg-center bg-no-repeat">
                <form 
                    className={`flex flex-col font-bold font-gotham items-center w-[100%] lg:w-[1088px] lg:mx-0 mx-[100px] h-[700px] ${currentPage === 3 ? '' : 'bg-white shadow-custom'} p-[54.75px] translate-y-[50px]`}
                    onSubmit={formik.handleSubmit}
                >
                    <div className='flex flex-row items-center '>
                        <h2 className={`${currentPage === 3 ? 'text-white' : 'text-black'} font-philosopher`}>KINSMAN</h2>
                        <div className='w-[1px] h-[52px] ml-[21.05px] bg-customGray'></div>
                        <img src='/images/theblock-logo.png' alt="the block logo" className='w-[127px] h-auto'/>
                    </div>
                    
                    {currentPage === 1 && (
                        <>
                            <PageOne setCurrentPage={setCurrentPage} formik={formik} />
                        </>
                    )}
                    {currentPage === 2 && (
                        <>
                            <PageTwo formik={formik} />
                        </>
                    )} 
                    {currentPage === 3 && (
                        <React.Fragment>
                            <PageThree />
                        </React.Fragment>
                    )}
                </form>
            <p className='font-gotham text-center text-[12px] leading-[16px] lg:w-[760px] text-white mt-[86px]'>T&Cs apply, see <a className='underline' href="https://nine.com.au/the-block">www.nine.com.au/the-block</a>. Open to NSW, QLD, VIC & SA res 18+ homeowners living within 100km radius from a Kinsman showroom (see <a className='underline' href="https://kinsman.com.au/showrooms">kinsman.com.au/showrooms</a>). Ends: 11.59 AEDT 17/11/24. Max 1 entry p/person.</p>
        </div>
    )
}

export default KinsmanForm