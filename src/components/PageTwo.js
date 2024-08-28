import { ErrorMessage, Field } from 'formik'

const PageTwo = () => {
    return (
        <>
            <h5 className="font-gotham font-medium text-[21px] leading-[39px] mt-[32.85px]">To finalise your entry please fill in your details below</h5>
            <div className='lg:w-[567px]'>
                <div className="flex content-between mt-[40.75px] text-customForestGreen">
                    <div className='flex flex-col w-[265px] mr-[40px]'>
                        <label htmlFor="text" className='text-[13px] leading-[23px]'>First Name*</label>
                        <Field type="text" name="first_name" className="border  outline-none w-full text-[13px] h-[36px] p-[6px]" />
                        <ErrorMessage name="first_name" component="div" />
                    </div>
                    <div className='flex flex-col w-[265px]'>
                        <label htmlFor="text" className='text-customForestGreen text-[13px] leading-[23px]'>Last Name*</label>
                        <Field type="text" name="last_name" className="border outline-none w-full text-[13px] h-[36px] p-[6px]" />
                        <ErrorMessage name="last_name" component="div" />
                    </div>
                </div>
                <div className="flex content-between mt-[18px] text-customForestGreen">
                    <div className='flex flex-col w-[265px] mr-[40px]'>
                        <label htmlFor="email" className='text-[13px] leading-[23px]'>Email Address*</label>
                        <Field type="email" name="email" className="border  outline-none w-full text-[13px] h-[36px] p-[6px]" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div className='flex flex-col w-[265px]'>
                        <label htmlFor="text" className='text-customForestGreen text-[13px] leading-[23px]'>Mobile*</label>
                        <Field type="tel" name="mobile" className="border outline-none w-full text-[13px] h-[36px] p-[6px]" />
                        <ErrorMessage name="mobile" component="div" />
                    </div>
                </div>
                <div className="flex content-between mt-[18px] text-customForestGreen">
                    <div className='flex flex-col w-[265px] mr-[40px]'>
                        <label htmlFor="text" className='text-[13px] leading-[23px]'>State*</label>
                        <Field type="email" name="state" className="border  outline-none w-full text-[13px] h-[36px] p-[6px]" />
                        <ErrorMessage name="state" component="div" />
                    </div>
                    <div className='flex flex-col w-[265px]'>
                        <label htmlFor="text" className='text-customForestGreen text-[13px] leading-[23px]'>Postcode*</label>
                        <Field type="text" name="postcode" className="border outline-none w-full text-[13px] h-[36px] p-[6px]" />
                        <ErrorMessage name="postcode" component="div" />
                    </div>
                </div>
                <div className='flex flex-col gap-[9.5px] mt-[43px]'>
                    <div className='flex gap-[14.5px]'>
                        <input type="checkbox" name="receiveNewsAndPromotions" />
                        <label for="receiveNewsAndPromotions" className='text-[12px] leading-[12px] font-light'>I would like to hear the latest news and promotions from Kinsman Kitchen.</label>
                    </div>
                    <div className='flex gap-[14.5px]'>
                        <input type="checkbox" name="acceptedTerms" className='text-customForestGreen' />
                        <label for="acceptedTerms" className='text-[12px] leading-[12px] font-light'>I’ve read and accept the terms and conditions and the privacy policy.</label>
                    </div>            
                </div>
            </div>
            <button type='submit' className='mt-[38px] bg-customGreen w-[150px] h-[42px] font-gotham font-light text-white text-[20px] leading-[28px] hover:bg-white border-[1px] border-customGreen hover:text-customGreen'>Submit</button>
            <div className='text-[9px] leading-[12px] mt-[26px] text-center font-light lg:w-[621px] tracking-[-0.18px]'>
                <p className='text-[#414040]'>Competition closes 17/11/24 at 11:59pm AEDT. NSW, QLD, VIC & SA res. 18+. Judging will take place by the Promoter at 1 Denison Street, North Sydney, NSW 2060 on 19/11/24 at 10am AEDT. The Winner will be notified by phone and email within two (2) business days from the judging date. Prizes: A Kinsman kitchen package valued at up to $40,000. Full terms and conditions at https://9now.nine.com.au/the-block.</p>
                <p className='text-[#FF4DF1]'>ACT: TBC, NSW: TBC, SA: TBC.</p>              
            </div>
        </>
    )
}

export default PageTwo