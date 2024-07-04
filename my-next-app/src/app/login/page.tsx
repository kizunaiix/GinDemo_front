import Image from 'next/image'

export default function page() {
  return (
    <div className="flex flex-col min-h-dvh">

      <div className="flex justify-between items-center bg-lime-50/50 mx-auto p-4 w-full">
        <h1 className="font-bold text-xl">logo</h1>
        <nav>
          <ol className='flex space-x-6'>
            <li><a href="/" className="hover:underline">首页</a></li>
            <li><a href="#about" className="hover:underline">历史</a></li>
            <li><a href="/tic-tac-toe" className="hover:underline">收藏</a></li>
            <li><a href="/img/miku_long.jpg" className="hover:underline">自杀</a></li>
          </ol>
        </nav>
      </div>

      <div className="flex flex-grow">

        <div id="aa" className="md:block relative hidden backdrop-blur-sm w-[360px] fill-transparent">
          <Image
            className='hover:blur-none rounded-lg'
            src="/img/喜多ちゃん❤️.jpg"
            layout="fill"
            alt="Picture of 喜多ちゃん"
          />
        </div>

        <div className="flex-grow bg-slate-100/50">
          <div className="bg-green-800 mb-4 w-[30dvw] h-dvh">
            <form action="demo_form.php" method="post/get" className="flex flex-col p-1">
              <p className='text-black'>类型</p>
              <input type="text" name="email" size={40} maxLength={50} className="block border-gray-300 focus:border-indigo-500 shadow-sm mt-1 px-3 py-2 border rounded-md w-full focus:outline-none focus:ring-indigo-500 sm:text-sm" />
              <p className='text-black'>姓名</p>
              <input type="email" id="email" name="email" required className="block border-gray-300 focus:border-indigo-500 shadow-sm mt-1 px-3 py-2 border rounded-md w-full focus:outline-none focus:ring-indigo-500 sm:text-sm" />
              <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600 shadow-md m-4 px-4 py-2 border border-transparent rounded-md w-16 font-medium text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                注册
              </button>
              <button type="button" className="bg-indigo-600 hover:bg-indigo-700 shadow-sm m-4 px-4 py-2 border border-transparent rounded-md w-16 font-medium text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                登录
              </button>

            </form>
          </div>
        </div>

      </div>
    </div >
  );
}
