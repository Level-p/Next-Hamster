import { BsFacebook, BsGooglePlay, BsInstagram, BsYoutube } from "react-icons/bs";


export default function Footer() {
  return (
    <div className="roboto mt-16">
        <footer className="bg-slate-50 dark:bg-black">
            <div className="max-w-6xl mx-auto pt-20 px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-center pb-16">
                    <div className="flex flex-col space-y-4 text-left">
                        <h3 className="font-bold text-lg">Services</h3>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">About</p>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">Our careers</p>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">Design</p>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">Customer serivce</p>
                    </div>

                    <div className="flex flex-col space-y-4 text-left">
                        <h3 className="font-bold text-lg">Downloads</h3>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">Apps & Devices</p>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">media server</p>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">Where to watch</p>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">Video quality</p>
                    </div>

                    <div className="flex flex-col space-y-4 text-left">
                        <h3 className="font-bold text-lg">Surport</h3>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">Finding help</p>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">Status</p>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">Support Library</p>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">Get in Touch</p>
                    </div>

                    <div className="flex flex-col space-y-4 text-left">
                        <h3 className="font-bold text-lg">Privacy</h3>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">Terms and conditions</p>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">Licence</p>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">Location verify</p>
                        <p className="text-base hover:text-amber-600 transition-all duration-200 cursor-pointer">Partners</p>
                    </div>
                </div>

                    <div className="flex flex-col md:flex-row items-center justify-between py-2 border-t">
                        <div className="space-y-2">
                            <h1 className="font-bold text-2xl md:text-3xl">Hamster</h1>
                            <div className="flex gap-2 items-center">
                                <h3 className="font-medium text-lg ">Gracella Ltd.</h3>
                                <p>Providing reliable tech &copy; 2023</p>
                            </div>
                        </div>

                        <div className="flex gap-3 text-3xl">
                            <BsFacebook className="cursor-pointer hover:text-amber-600"/>
                            <BsYoutube className="cursor-pointer hover:text-amber-600"/>
                            <BsInstagram className="cursor-pointer hover:text-amber-600"/>
                        </div>
                    </div>
            </div>
        </footer>
    </div>
  )
}
