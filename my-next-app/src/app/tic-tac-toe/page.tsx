export default function page() {
    return (
        <div className="grid grid-rows-2 bg-red-100 font-sans leading-normal tracking-normal">
            <div className="flex-grow bg-black">
                <header className="bg-gray-800 text-white p-4 fixed w-screen">
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className="text-xl font-bold">我的网站</h1>
                        <nav>
                            <ul className="flex space-x-4">
                                <li><a href="#home" className="hover:underline">首页</a></li>
                                <li><a href="#about" className="hover:underline">关于</a></li>
                                <li><a href="#services" className="hover:underline">服务</a></li>
                                <li><a href="#contact" className="hover:underline">联系</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
            <div>
                <main className="container min-h-screen mx-auto flex flex-wrap py-6">
                    <article className="w-full md:w-3/4 p-4">
                        <h2 className="text-2xl font-bold mb-4">主要文章标题</h2>
                        <section className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">章节标题 1</h3>
                            <p>这是第一个章节的内容。介绍一些主要的信息。</p>
                        </section>
                        <section className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">章节标题 2</h3>
                            <p>这是第二个章节的内容。进一步讨论相关的主题。</p>
                        </section>
                    </article>
                    <aside className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4">侧边栏</h2>
                        <p>这是侧边栏内容，通常包括相关链接、广告、或者其他附加信息。</p>
                    </aside>
                </main>

            </div>

            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2024 我的公司。保留所有权利。</p>
            </footer>
        </div>
    );
}