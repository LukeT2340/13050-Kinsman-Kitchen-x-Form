import { ErrorMessage } from 'formik'
import { PageNumber } from '../PageNumber'

const PageOne = ({ setCurrentPage }) => {
    return (
        <>
            <h3 className='lg:w-[598px] mt-[38.25px] text-center font-gotham font-[500] text-customBlack text-pretty text-[30px] mb-[12.25px] leading-[41px]'>What party would you throw if you won the ultimate entertainer’s kitchen?</h3>
            <h5 className='text-customBlack font-gotham font-light text-[17px] leading-[25px]'>Tell us in 25 words or less.</h5>
            <div>
                <textarea name='partyDescription' className='lg:w-[674px] h-[240px] border-[0.5px] border-customGreen outline-none resize-none mt-[31px] text-[16px] p-[5px] font-medium' />
                <ErrorMessage name="partyDescription" component="div" />
            </div>
            <button className='mt-[38px] bg-customGreen w-[150px] h-[42px] font-gotham font-light text-white text-[20px] leading-[28px] hover:bg-white border-[1px] border-customGreen hover:text-customGreen' onClick={() => setCurrentPage(PageNumber.two)}>Next</button>
        </>
    )
}

export default PageOne