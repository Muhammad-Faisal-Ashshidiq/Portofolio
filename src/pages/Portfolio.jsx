import { useState } from "react";
import { IconBrandGithub, IconTrendingUp3 } from "@tabler/icons-react";
import { IoMdCloseCircle } from "react-icons/io";

export default function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const projects = [
        {
            imgSrc: "/img/portfolio/1.png",
            imgAlt: "PakArbi",
            title: "PakArbi (Parkiran Ulbi)",
            description: "Sebuah project ke-3 dalam membuat aplikasi parkir perlu melakukan scan qr. project ini hanya UI/UX aja, karena datanya private",
            link: "https://mfaisal-ash.vaidiq.me/PakArbi/",
            github: 'https://github.com/mfaisal-Ash/PakArbi',
            aos: 'zoom-out-right'
        },
        {
            imgSrc: "/img/portfolio/2.png",
            imgAlt: "GIS",
            title: "GIS ((Geographic Information System) )",
            description: "Project sederhana untuk mendapatkan sebuah nilai di mata kuliah gis. aplikasi ini masih di tahap pengembang.",
            link: "https://nugisorange.vaidiq.cloud/",
            github: 'https://github.com/nugisorange/nugisorange.github.io',
            aos: 'zoom-in'
        },
        {
            imgSrc: "/img/portfolio/3.png",
            imgAlt: "TOE",
            title: "TOE (Tower of Extreme)",
            description: "Project pertama dalam pembuatan games roblox. game obby ini masih tahap pengembangan.",
            link: "",
            github: 'https://github.com/mfaisal-Ash/ObbyRoblox',
            aos: 'zoom-out-left'
        },
        {
            imgSrc: "/img/portfolio/4.png",
            imgAlt: "gasydisal",
            title: "Gasydisal",
            description: "Project terakhir dalam pembuatan aplikasi semacam chatgpt. namun project ini masih tahap pengembang, masih perlu diperbaiki.",
            link: "https://cerdas-buatan.projsonal.online/",
            github: 'https://github.com/cerdas-buatan/cerdas-buatan.github.io',
            aos: 'zoom-out-right'
        },
        {
            imgSrc: "/img/portfolio/5.png",
            imgAlt: "Yok ngopi",
            title: "Yok Ngopi",
            description: "Sebuah project yang menggunakan vanila language,html css javascript",
            link: "",
            github: '',
            aos: 'zoom-in'
        },
        {
            imgSrc: "/img/portfolio/6.png",
            imgAlt: "Dekstop Chat Api",
            title: "Web Chat Clone",
            link: '',
            github: "",
            description: "Sebuah project yang di kembangkan dengan MERN Stack, yang bisa digunakan secara online",
            aos: 'zoom-out-left'
        },
    ];
    return (
        <section id="portfolio" className={'pt-36 pb-32 bg-slate-100 dark:bg-[#CCCCCC]'}>
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-16" data-aos="zoom-in">
                        <h4 className={'text-lg text-primary font-semibold mb-2 dark:text-[#1A1A1A] uppercase'}>Portfolio</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-[#1A1A1A]">Project Saya</h2>
                        <p className="text-md font-medium text-secondary md:text-lg dark:text-[#1A1A1A]">project saya, yang saya kembangkan. projectnya masih perlu diperbaiki.</p>
                    </div>
                    <div className="w-full p-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                        {projects.map((project, index) => (
                            <div key={index} className="mb-12 p-4 md:w-1/3" data-aos={project.aos}>
                                <div className="card bg-white dark:bg-white shadow-xl rounded-lg overflow-hidden ">
                                    <figure>
                                        <img src={project.imgSrc} alt={project.imgAlt} className="w-full transform transition-transform duration-300 hover:scale-110" />
                                    </figure>
                                    <div className="card-body p-3">
                                        <h2 className="card-title font-bold">{project.title}</h2>
                                        <p className="font-base border-b-2 italic text-sm pb-1">{project.description}</p>
                                        <div className="card-actions flex justify-between items-center pt-2 gap-2">
                                            <a href={project.github} target="_blank" rel="noreferrer">
                                                <button className="flex gap-2 btn px-1 py-1 lg:px-3 lg:py-1 rounded-lg text-primary bg-white shadow hover:bg-primary hover:text-white transition duration-300">
                                                    Github <IconBrandGithub stroke={2} />
                                                </button>
                                            </a>
                                            {project.link ? (
                                                <a href={project.link} target="_blank" rel="noreferrer">
                                                    <button className="flex gap-2 btn px-1 py-1 lg:px-3 lg:py-1 rounded-lg text-white bg-primary shadow hover:bg-white hover:text-primary transition duration-300">
                                                        Demo <IconTrendingUp3 stroke={2} />
                                                    </button>
                                                </a>
                                            ) : (
                                                <button
                                                    onClick={openModal}
                                                    className="flex gap-2 btn px-1 py-1 lg:px-3 lg:py-1 rounded-lg text-white bg-primary shadow hover:bg-white hover:text-primary transition duration-300"
                                                >
                                                    Demo <IconTrendingUp3 stroke={2} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20" >
                    <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg" data-aos="zoom-in">
                        <div className="flex justify-center items-center gap-3 relative">
                            <h2 className="text-lg font-bold mb-4 dark:text-white">Segera Hadir</h2>
                            <button onClick={closeModal} className="mb-14 right-[-20px] absolute text-red-500">
                                <IoMdCloseCircle size={29} />
                            </button>
                        </div>
                        <p className="text-md font-medium dark:text-white">Project sedang tahap deployment, Harap tunggu beebrapa saat...</p>
                    </div>
                </div>
            )}
        </section>
    );
}    