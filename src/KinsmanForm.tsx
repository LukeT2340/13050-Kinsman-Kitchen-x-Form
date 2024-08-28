import { useState } from 'react'
import { Formik, Form } from 'formik'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import { PageNumber } from './PageNumber'

/*
Questions for Josh:
- Font size not matching.
- Text, divider and logo not equally separated
- Can't see mobile design on xd
- How to add animations when state changes
- Font weight
- What should happen when the user clicks next but hasn't entered anything. General form error handling
- Fonts for text inside textarea
*/

const KinsmanForm  = () => {
    const [currentPage, setCurrentPage] = useState(PageNumber.one)

    const handleSubmit = (values:any) => {
        // Post user data to API here
        // Go to next page if successful
        setCurrentPage(PageNumber.three)
        console.log(values)
    }

    return (
        <div className="text-gotham text-[30px] flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-[url('../public/images/img-02.jpg')] bg-cover bg-center bg-no-repeat">
            <Formik
                initialValues={{ partyDescription: '' , firstName: '', lastName: '', mobile: '', state: '', email: '', postcode: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    handleSubmit(values)
                setSubmitting(false)
                }}>
                <Form className={`flex flex-col font-bold font-gotham items-center w-[100%] lg:w-[1088px] lg:mx-0 mx-[100px] h-[700px] ${currentPage === PageNumber.three ? '' : 'bg-white'} p-[54.75px] translate-y-[43px]`}>
                    <div className='flex flex-row gap-[21.05px] items-center '>
                        <h2 className={`${currentPage === PageNumber.three ? 'text-white' : 'text-black'} font-philosopher`}>KINSMAN</h2>
                        <div className='w-[1px] h-[52px] bg-customGray'></div>
                        <img src='/images/theblock-logo.png' alt="the block logo" className='w-[127px] h-auto'/>
                    </div>

                    {currentPage === PageNumber.one && (
                        <PageOne setCurrentPage={setCurrentPage}/>
                    )}
                    {currentPage === PageNumber.two && (
                        <PageTwo />
                    )}
                    {currentPage === PageNumber.three && (
                        <PageThree />
                    )}
                </Form>
            </Formik>
            <p className='font-gotham text-center text-[12px] leading-[16px] lg:w-[760px] text-white mt-[86px]'>T&Cs apply, see <a className='underline' href="https://nine.com.au/the-block">www.nine.com.au/the-block</a>. Open to NSW, QLD, VIC & SA res 18+ homeowners living within 100km radius from a Kinsman showroom (see <a className='underline' href="https://kinsman.com.au/showrooms">kinsman.com.au/showrooms</a>). Ends: 11.59 AEDT 17/11/24. Max 1 entry p/person.</p>
        </div>
    )
}

export default KinsmanForm