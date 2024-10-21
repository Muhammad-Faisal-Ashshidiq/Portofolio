import React from 'react';
import GitHubCalendar from 'react-github-calendar';
export default function Experience() {

    return (
        <section id={'experience'} className={'pt-36 pb-32 bg-[#333333] w-full dark:bg-[#1A1A1A]'}>
            <div className="container">
                <div className="w-full px-4">
                    <div className="=mx-auto text-center mb-20"
                        data-aos="zoom-out">
                        <h4 className={'text-lg dark:text-[#CCCCCC] text-white font-semibold mb-2 uppercase'}>Pengalaman</h4>
                        <h2 className="font-bold text-slate-50 text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-[#CCCCCC]">Pengalaman
                            dan Skill </h2>
                        <p className="text-md font-medium  md:text-lg dark:text-[#CCCCCC] text-white">Pengalaman dari berbagai sumber
                            untuk membantu mengembangkan diri <span
                                className={'text-[#1A1A1A] font-bold dark:text-[#333333] dark:font-bold'}>...</span>
                        </p>
                    </div>

                    <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white" data-aos="fade-up">
                        <div className="pl-24 relative before:w-4 before:h-4 before:dark:bg-[#CCCCCC] before:bg-primary before:absolute before:rounded-full before:left-[58px]"
                            data-aos="zoom-out-right">
                            <h3 className="absolute left-0 text-lg dark:text-[#CCCCCC] text-white font-semibold">2022</h3>
                            <div className="container mx-auto p-4">
                                <div className="clearfix">
                                    <a href="https://www.progate.com/" target="_blank" rel="noreferrer"
                                        className="float-left max-w-[250px] mx-2.5 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 ">
                                        <img src="/img/experience/dicoding1.jpeg" alt="dicoding" className="w-full" />
                                    </a>
                                    <p className="text-lg dark:text-[#CCCCCC] text-white">
                                        <span className='font-bold'>Progate</span> adalah salah satu platform yang di gunakan oleh LUKANANAKIT 
                                        untuk pelatihan secara online.
                                    </p>
                                    <p className="text-lg dark:text-[#CCCCCC] text-white">
                                        Saya bangga menjadi lulusan <span className='font-bold'>Progate</span> karena menerima materi yang cukup membantu saya.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:dark:bg-slate-800 before:bg-primary before:absolute before:rounded-full before:left-[58px]"
                            data-aos="zoom-out-right">
                            <h3 className="absolute left-0 text-lg dark:text-[#CCCCCC] text-white font-semibold">2022</h3>
                            <div className="container mx-auto p-4">
                                <div className="clearfix">
                                    <a href="https://www.dicoding.com/" target="_blank" rel="noreferrer"
                                        className="float-left max-w-[250px] mx-2.5 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 ">
                                        <img src="/img/experience/idcamp.png" alt="dicoding" />
                                    </a>
                                    <p className="text-lg dark:text-[#CCCCCC] text-white">
                                        <span className='font-bold'>(LUKANAKIT)LU KA ANAK IT</span> adalah salah satu organisasi yang berfokus Pusat informasi, edukasi, 
                                        dan hiburan seputar dunia IT.
                                    </p>
                                    <p className="text-lg dark:text-[#CCCCCC] text-white">
                                        kerjasama dengan<span className='font-bold'>Progate</span> Untuk melakukan proses pelatihan secara online.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:dark:bg-slate-800 before:bg-primary before:absolute before:rounded-full before:left-[58px]"
                            data-aos="zoom-out-right">
                            <h3 className="absolute left-0 text-lg dark:text-[#CCCCCC] text-white font-semibold">2023</h3>
                            <div className="container mx-auto p-4">
                                <div className="clearfix">
                                    <a href="https://www.dicoding.com/" target="_blank" rel="noreferrer"
                                        className="float-left w-[150px] lg:w-[200px] lg:relative lg:bottom-7 mx-2.5 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 ">
                                        <img src="/img/experience/kampusmerdeka.png" alt="dicoding" />
                                    </a>
                                    <p className="text-lg dark:text-[#CCCCCC] text-white">
                                        <span className='font-bold'>Camp404</span> adalah media pembelajaran digital yang menawarkan
                                        berbagai program untuk meningkatkan keahlian tanpa latar belakang. saya mengikuti pelatihan react untuk 
                                        bisa memahami dari react.  
                                    </p>
                                    <p className="text-lg dark:text-[#CCCCCC] text-white ">
                                        saya berterima kasih dengan adanya program pelatihan yang diadakan secara gratis, 
                                        karena memberikan pengalaman dalam menangani studi kasus yang nyata yaitu membuat project kecil.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:dark:bg-[#CCCCCC] before:bg-primary before:absolute before:rounded-full before:left-[58px]"
                        data-aos="zoom-out-right">
                        <h3 className="absolute left-0 text-lg dark:text-[#CCCCCC] text-white font-semibold">Skill</h3>
                        <div className="hidden lg:flex lg:flex-wrap justify-center items-center">
                        <a className={''} rel="noreferrer">
                                <img src="https://skillicons.dev/icons?i=react,tailwind,javascript,laravel,nodejs,mongodb,php,mysql,html,css,github,python" alt="Skills" useMap="#skillmap" />
                            </a>
                            <map name="skillmap">
                                <area shape="rect" coords="0,0,64,64" alt="React" href="https://reactjs.org/docs/getting-started.html" target='_blank' />
                                <area shape="rect" coords="64,0,128,64" alt="Tailwind" href="https://tailwindcss.com/docs" target='_blank' />
                                <area shape="rect" coords="128,0,192,64" alt="Express" href="https://expressjs.com/en/starter/installing.html" target='_blank' />
                                <area shape="rect" coords="192,0,256,64" alt="JavaScript" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target='_blank' />
                                <area shape="rect" coords="256,0,320,64" alt="PHP" href="https://www.php.net/docs.php" target='_blank' />
                                <area shape="rect" coords="320,0,384,64" alt="Laravel" href="https://laravel.com/docs" target='_blank' />
                                <area shape="rect" coords="384,0,448,64" alt="Node.js" href="https://nodejs.org/en/docs/" target='_blank' />
                                <area shape="rect" coords="448,0,512,64" alt="MongoDB" href="https://docs.mongodb.com/" target='_blank' />
                                <area shape="rect" coords="512,0,576,64" alt="MySQL" href="https://dev.mysql.com/doc/" target='_blank' />
                                <area shape="rect" coords="576,0,640,64" alt="HTML" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank' />
                                <area shape="rect" coords="640,0,704,64" alt="CSS" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank' />
                                <area shape="rect" coords="704,0,768,64" alt="GitHub" href="https://github.com" target='_blank' />
                                <area shape="rect" coords="710,0,800,64" alt="ETL" href="https://cloud.google.com/learn/what-is-etl?hl=id" target='_blank' />
                            </map>

                        </div>

                        <div className="grid grid-cols-3 lg:hidden lg:flex-wrap justify-center items-center">
                            <a href="https://reactjs.org/docs/getting-started.html" target="_blank"
                                className="mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                                rel="noreferrer">
                                <img src="https://skillicons.dev/icons?i=react" alt="React skill" />
                            </a>
                            <a href="https://expressjs.com/en/starter/installing.html" target="_blank"
                                className="mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                                rel="noreferrer">
                                <img src="https://skillicons.dev/icons?i=express" alt="Express skill" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank"
                                className="mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                                rel="noreferrer">
                                <img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript skill" />
                            </a>
                            <a href="https://nodejs.org/en/docs/" target="_blank"
                                className="mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                                rel="noreferrer">
                                <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js skill" />
                            </a>
                            <a href="https://www.php.net/docs.php" target="_blank"
                                className="mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                                rel="noreferrer">
                                <img src="https://skillicons.dev/icons?i=php" alt="PHP skill" />
                            </a>
                            <a href="https://laravel.com/docs" target="_blank"
                                className="mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                                rel="noreferrer">
                                <img src="https://skillicons.dev/icons?i=laravel" alt="Laravel skill" />
                            </a>
                            <a href="https://tailwindcss.com/docs" target="_blank"
                                className="mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                                rel="noreferrer">
                                <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS skill" />
                            </a>
                            <a href="https://docs.mongodb.com/" target="_blank"
                                className="mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                                rel="noreferrer">
                                <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB skill" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"
                                className="mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                                rel="noreferrer">
                                <img src="https://skillicons.dev/icons?i=html" alt="HTML skill" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"
                                className="mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                                rel="noreferrer">
                                <img src="https://skillicons.dev/icons?i=css" alt="CSS skill" />
                            </a>
                            <a href="https://dev.mysql.com/doc/" target="_blank"
                                className="mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                                rel="noreferrer">
                                <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL skill" />
                            </a>
                            <a href="https://github.com" target="_blank"
                                className="mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                                rel="noreferrer">
                                <img src="https://skillicons.dev/icons?i=github" alt="GitHub skill" />
                            </a>

                            {/* <a href="https://www.w3schools.com/Css/" target={'_blank'}
                                className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                                rel="noreferrer">
                                <img src="/img/experience/css-3.png" alt="css skill" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/javascript" target={'_blank'}
                                className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                                rel="noreferrer">
                                <img src="/img/experience/js.png" alt="javascript skill" />
                            </a>
                            <a href="https://nodejs.org/en" target={'_blank'}
                                className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                                rel="noreferrer">
                                <img src="/img/experience/nodejs.png" alt="dicoding" />
                            </a>
                            <a href="https://react.dev/" target={'_blank'}
                                className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                                rel="noreferrer">
                                <img src="/img/experience/science.png" alt="reactjs skill" />
                            </a>
                            <a href="https://tailwindcss.com/" target={'_blank'}
                                className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                                rel="noreferrer">
                                <img src="/img/experience/tailwind.png" alt="tailwind skill" />
                            </a> */}
                        </div>
                    </div>

                    <div className='hidden lg:block  mt-10 py-5 px-48'
                        data-aos="zoom-in-up"
                        data-aos-offset="200">
                        <GitHubCalendar username="farhnDev" />
                    </div>
                    <div className="lg:hidden mt-10"
                        data-aos="zoom-in-up"
                        data-aos-offset="200"
                        data-aos-duration="800">
                        <GitHubCalendar username="farhnDev" />
                    </div>
                </div>
            </div>
        </section>
    )
}