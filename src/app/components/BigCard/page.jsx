import Image from 'next/image'

function BigCard() {
  return (
    <div className='flex justify-center items-center max-[1150px]:flex-wrap gap-[35px] rounded-md border-none bg-[white] p-[20px]'>
      <div>
        <div className=' bg-orange-600 w-[120px] text-center text-white rounded-md border-none px-[10px] py-[5px]'>Best Choice</div>
        <Image
          src="/assets/normal.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <div>
        <p className=''><strong>WixPro 72-Inch Responsive Website Builder-</strong> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
        <h2><strong>Main highlights</strong></h2>
        <p className=' mb-[20px]'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
        <label htmlFor="show">
          <select name="" id="show">
            <option value="show" className='text-[#074786] '>Show more</option>
          </select>
        </label>
      </div>
      <div className='flex justify-center items-center flex-col'>
        <div className='bg-[#F3F9FF] text-[#074786] p-[20px] rounded-xl border-none w-[120px] flex justify-center items-center flex-col'>
          <p className='text-2xl'>9.8</p>
          <p className=''>Exceptional</p>
          <div>
            <span className='text-[#ffac40]'>&#9733;</span>
            <span className='text-[#ffac40]'>&#9733;</span>
            <span className='text-[#ffac40]'>&#9733;</span>
            <span className='text-[#ffac40]'>&#9733;</span>
            <span className='text-[#ffac40]'>&#9733;</span>
          </div>
        </div>
        <button className="bg-[#2456d5] mt-[15px] w-[270px] text-white px-[20px] py-[12px] border-none rounded-xl">View</button>
      </div>
    </div>
  )
}

export default BigCard
