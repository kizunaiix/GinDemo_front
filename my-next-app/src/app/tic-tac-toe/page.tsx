export default function page() {
    return (
        <div className="grid grid-rows-2 bg-red-100 p-4 font-sans leading-normal tracking-normal">
            <ul><li>kk</li><li>kk</li><li>kk</li></ul>
            <ol><li>jj</li><li>jj</li><li>jk</li></ol>
            
            <div>
                <form action="demo_form.php" method="post/get" className="flex flex-col p-1">
                    <input type="text" name="email" size={40} maxLength={50} className="m-1 rounded-md" />
                    <input type="text" name="email" size={40} maxLength={50} className="m-1" />
                    <input type="text" name="email" size={40} maxLength={50} className="m-1" />
                    <div className="mb-4">
                        <label for={'email'} className="block font-medium text-gray-700 text-sm">邮箱</label>
                        <input type="email" id="email" name="email" required className="block border-gray-300 focus:border-indigo-500 shadow-sm mt-1 px-3 py-2 border rounded-md w-full focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 shadow-sm px-4 py-2 border border-transparent rounded-md w-full font-medium text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">登录</button>
                        <button type="button" className="bg-indigo-600 hover:bg-indigo-700 shadow-sm px-4 py-2 border border-transparent rounded-md w-full font-medium text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">登录</button>

                    </div>
                </form>
            </div>


            <footer className="bg-gray-800 p-4 text-center text-white">
                <p>&copy; 2024 我的公司。保留所有权利。</p>
            </footer>
        </div>
    );
}