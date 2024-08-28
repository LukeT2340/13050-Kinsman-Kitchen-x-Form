import { ErrorMessage, Field } from 'formik'
import { formFields } from '../utils/formFields'

const PageTwo = () => {
    return (
        <>
            <h5 className="font-gotham font-[500] text-[21px] leading-[39px] mt-[32.85px] mb-[40.75px]">To finalise your entry please fill in your details below</h5>
            <div className='grid grid-cols-2 gap-x-[40px] gap-y-[18px] text-customForestGreen lg:w-[567px]'>
                {formFields.map((field) => (
                    <div className='flex flex-col w-[265px] mr-[40px]'>
                        <label htmlFor={field.fieldType} className='text-[13px] leading-[23px]'>{field.label}*</label>
                        <Field type={field.fieldType}  name={field.name} className="border border-customLighterGray outline-none w-full text-[13px] h-[36px] p-[6px]" required/>
                        <ErrorMessage name={field.name} component="div" />
                    </div>
                ))}
            </div>
            <button type='submit' className='mt-[38px] bg-customGreen w-[192px] h-[42px] font-gotham font-light text-white text-[20px] leading-[28px] hover:bg-white border-[1px] border-customGreen hover:text-customGreen transition ease-in-out duration-150'>Submit</button>
            <div className='text-[9px] leading-[12px] mt-[26px] text-center font-light lg:w-[621px] tracking-[-0.18px]'>
                <p className='text-[#414040]'>Competition closes 17/11/24 at 11:59pm AEDT. NSW, QLD, VIC & SA res. 18+. Judging will take place by the Promoter at 1 Denison Street, North Sydney, NSW 2060 on 19/11/24 at 10am AEDT. The Winner will be notified by phone and email within two (2) business days from the judging date. Prizes: A Kinsman kitchen package valued at up to $40,000. Full terms and conditions at <a className='underline' href="https://9now.nine.com.au/the-block">https://9now.nine.com.au/the-block</a>.</p>
                <p className='text-[#FF4DF1]'>ACT: TBC, NSW: TBC, SA: TBC.</p>              
            </div>
        </>
    )
}

export default PageTwo