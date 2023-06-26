import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import ActiveLink from "./ActiveLink";
import { FaBars } from 'react-icons/fa';
import { Outlet } from "react-router-dom";
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div> 
            <div className="drawer lg:drawer-open font-primary ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mt-2 mx-2 bg shadow border ml-6 rounded-xl">
                    <div>
                        <label htmlFor="my-drawer-2" className="btn btn-primary bg-blue-950 lg:hidden mt-4 ml-2"><FaBars className="text-white"></FaBars></label>
                    </div>
                    <div className="p-5 ">
                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.3,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        >
                            <Outlet></Outlet>
                        </motion.div>

                    </div>
                </div>
                <div className="drawer-side mt-2 mx-2 rounded-xl">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu pt-6 w-60 h-full bg-black text-base-content p-3" >


                        <div>
                            <Slide>
                                <div className="space-y-5">
                                    <li><h2 className="text-2xl font-bold text-white">TrainHere</h2></li>
                                    <div className="divider bg-white h-1"></div>

                                    <li><ActiveLink to='/' className="text-xl font-semibold"><p className="mt-4">Home</p></ActiveLink></li>
                                    <li><ActiveLink to='/contact' className="text-xl font-semibold"><p className="mt-4">Contact</p></ActiveLink></li>
                                    <li><ActiveLink to='/information' className="text-xl font-semibold"><p className="mt-4">Information</p></ActiveLink></li>
                                    <li><ActiveLink to='/guide' className="text-xl font-semibold"><p className="mt-4">Guide</p></ActiveLink></li>


                                </div>
                            </Slide>
                        </div>


                    </ul>


                </div>
            </div>
        </div>
    );
};

export default Sidebar;