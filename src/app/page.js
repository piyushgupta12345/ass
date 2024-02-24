import BigCard from "./components/BigCard/page";
import Card from "./components/Card/page";

export default function Home() {
  return (
    <main className=" flex justify-between flex-col items-center">
      <h1 className=" text-6xl mt-[50px] w-[66%] mb-[10px] max-[800px]:text-3xl">Best Website builders in the US</h1>
      <hr className="w-[66%] h-[2px] bg-[#4B5665]"/>
      <div className=" flex justify-between text-[#4B5665] items-center w-[66%] px-[5px] my-[10px]">
        <div>
          <span className=" mr-[20px]">✅Last Updated - febraury 23, 2024</span>
          <span>Advertising Disclosure</span>
        </div>
        <label htmlFor="relevant">
          <select name="" id="relevant">
            <option value="top">Top Relevant</option>
            <option value="other">Other Relevant</option>
          </select>
        </label>
      </div>
      <hr className="w-[66%] h-[2px] bg-[#4B5665]"/>

      <div className=" flex w-[66%] justify-start flex-wrap py-[20px] gap-[20px] items-start text-[#4B5665]">
        <div>Tools</div>
        <div>AWS Builder</div>
        <div>Start Build</div>
        <div>Build Supplies</div>
        <div>Tooling</div>
        <div>BlueHosting</div>
      </div>

      <div className=" flex w-[66%] justify-start py-[20px] gap-[20px] items-start text-[#4B5665]">
        Home &gt; Hosting for all &gt; Hosting &gt; Hosting6 &gt; Hosting5
      </div>

      <div className="w-[66%] flex flex-col gap-[15px] mb-[40px]">
        <BigCard/>
        <BigCard/>
        <BigCard/>
        <BigCard/>
      </div>

      <div className="px-[20px] mt-[10px]">
        <h2 className="text-[#2C384A] text-3xl mb-[25px]">Related deals you might like for</h2>
        <div className=" flex gap-[40px] flex-wrap justify-center">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      {/* Sign Up */}
      <div className=" flex  p-[50px] flex-wrap mt-[30px] w-[66%]">
        <h1 className=" text-3xl text-[#5C6874] w-[400px]">Sign up and get exclusive special deals</h1>
        <div>
          <input className="px-[20px] py-[13px]" type="text" />
          <button className=" bg-[#2456d5] px-[20px] py-[13px] rounded-r-md text-white border-none ">Sign up</button>
        </div>
      </div>

    </main>
  );
}
