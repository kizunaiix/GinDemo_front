export default function page() {
    return (
        <div className="grid grid-rows-2 bg-red-100 p-4 font-sans leading-normal tracking-normal">
            <ul><li>kk</li><li>kk</li><li>kk</li></ul>
            <ol><li>jj</li><li>jj</li><li>jk</li></ol>

            <form action="demo_form.php" method="post/get" className="flex flex-col p-1">
                <input type="text" name="email" size={40} maxLength={50} className="m-1 rounded-md" />
                <input type="text" name="email" size={40} maxLength={50} className="m-1" />
                <input type="text" name="email" size={40} maxLength={50} className="m-1" />
                <div className="mb-4">
                    <label for={'email'} className="block text-sm font-medium text-gray-700">邮箱</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">登录</button>
                    <button type="button" className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">登录</button>

                </div>
            </form>

            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2024 我的公司。保留所有权利。</p>
            </footer>
        </div>
    );
}