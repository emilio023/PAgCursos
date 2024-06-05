const Inicio = () => {
    return (
        <section className="text-gray-600 body-font">

            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://imgs.search.brave.com/HiEnNt7TBUjhppldvFvHJHuUesjgFTCbmAK860pFm2s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0M1/NjFCQVFHelhqNHB3/NnBWcEEvY29tcGFu/eS1iYWNrZ3JvdW5k/XzEwMDAwLzAvMTU5/NDE0MzEzMzkwNi90/ZWNub2xnaWNvX25h/Y2lvbmFsX2RlX214/aWNvX2NvdmVyP2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD1KdlRJ/OXJ4eGhnd0hGalhL/T1l1YWhpcW44c1JB/OEZmQlVrUkxMWDNu/dGtZ" alt="blog" />
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Cursos Tec</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">La plataforma donde cualquier alumno del tec puede capacitarse gratiutamente en temas de su carrera.</p>

                </div>
                <div className="flex justify-center mb-10">
                    <iframe
                        className="w-full lg:w-2/3 h-64"
                        src="https://www.youtube.com/embed/XTUV0SB_qF4"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                            <p className="leading-relaxed">Descargas</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">5K</h2>
                            <p className="leading-relaxed">Usuarios activos</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                            <p className="leading-relaxed">Cursos</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">+1k</h2>
                            <p className="leading-relaxed">Valoraciones</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inicio