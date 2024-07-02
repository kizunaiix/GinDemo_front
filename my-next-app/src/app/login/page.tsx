import Image from 'next/image'

export default function page() {
  return (
    <div className="bg-red-50 min-h-dvh flex flex-col">

      <div className="bg-yellow-50 flex w-full p-4 justify-between items-center  mx-auto">
        <h1 className="text-xl font-bold">logo</h1>
        <nav>
          <ol className='flex space-x-6'>
            <li><a href="/" className="hover:underline">首页</a></li>
            <li><a href="#about" className="hover:underline">历史</a></li>
            <li><a href="/tic-tac-toe" className="hover:underline">收藏</a></li>
            <li><a href="/img/miku_long.jpg" className="hover:underline">自杀</a></li>
          </ol>
        </nav>
      </div>

      <div className="bg-blue-50 flex flex-grow">

        <div id="aa" className="hidden w-[360px] md:block relative">
          <Image
            className='rounded-lg hover:blur-none blur-sm'
            src="/img/喜多ちゃん❤️.jpg"
            layout="fill"
            alt="Picture of 喜多ちゃん"
          />
        </div>

        <div className="bg-white  flex-grow">
          {/* 这里要写login的界面部分 */}
        </div>

      </div>
    </div>
  );
}
