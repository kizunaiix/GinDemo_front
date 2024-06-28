// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';

export default function Homjdse() {
    return (
        <div >
            <Head>
                <title>二次元看番网站</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <header className="bg-pink-500 text-white p-4 text-center">
                    <h1 className="text-3xl font-bold">二次元看番</h1>
                    <button
                        className="mt-2 bg-gray-800 text-white py-1 px-4 rounded"
                    >
                    </button>
                </header>

                <main className="p-6">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">热门番剧推荐</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
                                <Image src="/images/anime1.jpg" alt="番剧封面" className="rounded mb-2" width={20} height={20} />
                                <h3 className="text-xl font-bold">番剧名称</h3>
                                <p>番剧简介...</p>
                                <p>评分: 9.0</p>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
                                <Image src="/images/anime2.jpg" alt="番剧封面" className="rounded mb-2" width={20} height={20} />
                                <h3 className="text-xl font-bold">番剧名称</h3>
                                <p>番剧简介...</p>
                                <p>评分: 8.5</p>
                            </div>
                            {/* 添加更多番剧卡片 */}
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">最近更新</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
                                <Image src="/images/anime3.jpg" alt="番剧封面" className="rounded mb-2" width={20} height={20} />
                                <h3 className="text-xl font-bold">番剧名称</h3>
                                <p>番剧简介...</p>
                                <p>评分: 8.8</p>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
                                <Image src="/images/anime4.jpg" alt="番剧封面" className="rounded mb-2" width={20} height={20} />
                                <h3 className="text-xl font-bold">番剧名称</h3>
                                <p>番剧简介...</p>
                                <p>评分: 7.9</p>
                            </div>
                            {/* 添加更多番剧卡片 */}
                        </div>
                    </section>
                </main>

                <footer className="bg-pink-500 text-white p-4 text-center">
                    <p>© 2024 二次元看番网站</p>
                </footer>
            </div>
        </div>
    );
}
