import { FormikProps, ErrorMessage, Field } from "formik"
import { FormInitialVal } from "../types"

const PageOne = ({ setCurrentPage, formik }: { setCurrentPage: (arg0: number) => void, formik: FormikProps<FormInitialVal> }) => {
    return (
        <>
            <h3 className='lg:w-[598px] mt-[38.25px] text-center font-gotham font-medium text-customBlack text-pretty text-[30px] mb-[12.25px] leading-[41px]'>What party would you throw if you won the ultimate entertainer’s kitchen?</h3>
            <h5 className='text-customBlack font-gotham font-light text-[17px] leading-[25px]'>Tell us in 25 words or less.</h5>
            <div>
                <Field
                    as="textarea"
                    name='partyDescription' 
                    className='lg:w-[674px] h-[240px] border-[0.5px] border-customGreen outline-none resize-none mt-[31px] text-[16px] p-[5px] font-medium' 
                    onChange={formik.handleChange}
                    value={formik.values.partyDescription}
                />
                <ErrorMessage name="partyDescription" component="div" className='text-red text-[12px]'/>
            </div>
            <button 
                className='mt-[38px] bg-customGreen w-[150px] h-[42px] font-gotham font-light text-white text-[20px] leading-[28px] hover:bg-white border-[1px] border-customGreen hover:text-customGreen' 
                onClick={() => setCurrentPage(2)}
                disabled={formik.values["partyDescription"].length === 0 || formik.values["partyDescription"].split(" ").length > 25}
                >
                    Next


            </button>
        </>
    )
}

export default PageOne