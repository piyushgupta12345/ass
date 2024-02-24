import Image from 'next/image'

function Card() {
  return (
    <div className=' w-[300px] p-[15px] bg-[white] rounded-lg border-none'>
       <Image
      src="/assets/3.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      <div className=''>
        <spna className="rounded-lg px-[8px] mr-[10px] py-[4px] text-[#2456d5] bg-[#F2F4F7] border-none">20% Off</spna>
        <spna className="rounded-lg px-[8px] py-[4px] text-[#2456d5] bg-[#F2F4F7] border-none">Limited time</spna>
      </div>
      <h2 className='text-center text-[#626E79] font-bold mt-[10px]'>Webbuilder 1</h2>
      <p className=' text-[#626E79] font-normal mt-[5px] mb-[5px]'>Computer  Modern clasic with wix support</p>
      <div>
        <spna className='text-[#5C6874] text-2xl font-normal ml-[8px]'>$39.96</spna>
        <spna className='text-[#9FA9B3] font-normal ml-[8px]'>$49.96</spna>
        <spna className='text-[red] font-normal ml-[8px]'>(20% Off)</spna>
      </div>
      <button className='bg-[#2456d5] mt-[15px] w-[270px] text-white px-[20px] py-[12px] border-none rounded-xl'>View Deal</button>
    </div>
  )
}

export default Card
