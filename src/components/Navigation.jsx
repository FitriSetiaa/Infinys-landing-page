export default function Navigation() {
    return (
        <nav className="fixed z-30 w-full border-b bg-custom-gray" style={{ height: '65px' }}>
            <div className="container mx-auto flex items-center justify-between gap-3 h-full">
                <div className="flex items-center gap-1">
                    <img
                        src="/cloud-kilat.png"
                        alt="Cloudkilat Logo"
                        width="150"
                        height="30"
                        className="object-contain"
                    />
                </div>
                <ul className="flex space-x-20 mx-auto">
                    <li className="group relative">
                        <a href="#" className="text-sm font-medium text-black-700 hover:text-gray-900 flex items-center gap-1">
                            Product & Layanan
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down transition delay-150 ease-in-out group-hover:rotate-180">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </a>
                    </li>
                    <li className="group relative">
                        <a href="#" className="text-sm font-medium text-black-700 hover:text-gray-900 flex items-center gap-1">
                            Rujukan
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down transition delay-150 ease-in-out group-hover:rotate-180">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </a>
                    </li>
                    <li className="group relative">
                        <a href="#" className="text-sm font-medium text-black-700 hover:text-gray-900 flex items-center gap-1">
                            Bantuan
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down transition delay-150 ease-in-out group-hover:rotate-180">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
                <div className="flex items-center space-x-4">
                    <div className="group relative flex cursor-pointer items-center gap-1 text-sm font-medium text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="28" className="rounded-xs border">
                            <path fill="#fff" d="M0 0h3v2H0z"></path>
                            <path fill="red" d="M0 0h3v1H0z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down transition delay-150 ease-in-out group-hover:rotate-180">
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                    </div>
                    <button className= "bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 flex items-center shadow-[0_4px_15px_0_rgba(59,130,246,0.5)] hover:shadow-[0_6px_20px_0_rgba(59,130,246,0.75)] transition-shadow duration-300">
                        <svg width="15" height="15" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                            <path d="M18.9859 0.114519C19.1511 0.210265 19.2789 0.35919 19.3485 0.536964C19.418 0.714738 19.4253 0.910852 19.369 1.09327L16.3298 10.9685H21.9373C22.1021 10.9685 22.2633 11.0166 22.4011 11.1071C22.5388 11.1977 22.647 11.3265 22.7123 11.4778C22.7776 11.6291 22.7972 11.7962 22.7687 11.9585C22.7401 12.1208 22.6646 12.2712 22.5516 12.3911L9.0516 26.7348C8.92097 26.8737 8.74715 26.9643 8.55847 26.9918C8.36978 27.0192 8.17735 26.982 8.01255 26.8861C7.84775 26.7902 7.7203 26.6413 7.65096 26.4636C7.58162 26.286 7.57449 26.0902 7.63072 25.908L10.6699 16.031H5.06235C4.89756 16.0311 4.73635 15.9829 4.59863 15.8924C4.46092 15.8019 4.35272 15.673 4.28739 15.5217C4.22206 15.3705 4.20247 15.2033 4.23103 15.041C4.25959 14.8787 4.33505 14.7284 4.4481 14.6085L17.9481 0.264706C18.0786 0.125992 18.2521 0.0354909 18.4405 0.00791705C18.629 -0.0196568 18.8212 0.0190062 18.9859 0.114519Z" fill="#FED10B" stroke="#FED10B" strokeWidth="0.5"></path>
                        </svg>
                        Daftar Sekarang
                    </button>

                </div>
            </div>
        </nav>
    );
}
