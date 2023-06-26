import { FaAddressBook, FaMailBulk, FaPhoneAlt } from "react-icons/fa";

const GetInTouch = () => {
    return (
        <div className="mt-10">
            <div className="text-4xl font-bold text-orange-200 mb-6">
                Get In Touch
            </div>
            <div className="flex items-center gap-40">
                <div>
                    <div className="flex items-center gap-5">
                        <input type="text" placeholder="Email*" className="input bg-black  input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Name*" className="input bg-black  input-bordered w-full max-w-xs" />
                    </div>
                    <textarea className="textarea mt-5 textarea-bordered placeholder:text-lg placeholder:text-gray-500 bg-black w-full h-40" placeholder="Write your opinion..."></textarea>
                    <button className="btn btn-warning text-white w-24 mt-3 hover:bg-orange-200">Send</button>
                </div>
                <div className="space-y-9 border p-10 rounded-lg text-white">
                <div className="flex items-center gap-2">
                       <p><FaMailBulk></FaMailBulk></p>
                       <p>trainhere@email.com</p>
                   </div>
                   <hr />
                    <div className="flex items-center gap-2">
                        <p><FaPhoneAlt></FaPhoneAlt></p>
                        <p>+8801763-955074</p>
                    </div>
                    <hr />
                   
                    <div className="flex items-center gap-2">
                        <p><FaAddressBook></FaAddressBook></p>
                        <p>52/A, Dhanmondi, Dhaka</p>
                    </div>
                  
                   
                  
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;