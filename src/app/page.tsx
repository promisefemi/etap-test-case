import { url } from "inspector";
import Image from "next/image";
import { FormEvent } from "react";

export default function Home() {



  const inputClass = "w-full border rounded-md px-4 py-3 active:border-[#240d4a] outline-none"
  const completeLogin = (e: FormEvent) => {
    e.preventDefault();

  }

  return (
    <main className=" relative flex min-h-screen flex-col items-center justify-center p-5">
      <div className="w-full login-bg h[30px] rounded fixed bottom-0 left-0 right-0 p-2"></div>

      <div className="lg:w-1/3 md:w-1/2 w-4/5 max-w h-full flex flex-col bg-white p-10 rounded-2xl drop-shadow-xl ">

        <Image src="/image.avif" alt="logo" width={80} height={10} />

        <div className="mb-8 mt-4">
          <h4 className="text-[30px] font-bold">Login</h4>
          <p className="text-gray-400 italic">Welcome back, continue learning</p>
        </div>
        <form >
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input type="text" className={inputClass} />
          </div>

          <div className="mb-5">
            <label htmlFor="password">Password</label>
            <input type="password" className={inputClass} />
          </div>

          <div className="flex justify-stretch">
            <button type="submit" className="bg-primary text-white px-5 py-3 rounded-md">Submit</button>
          </div>
        </form>


      </div>


    </main>
  );
}
