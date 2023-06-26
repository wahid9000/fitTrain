import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import SingleUpcoming from "./SingleUpcoming";
AOS.init();


const Upcoming = () => {

    const [upcoming, setUpcoming] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setUpcoming(data))
    }, [])
    return (
        <div className="mt-24">
            <div className="text-center">
                <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="500">
                    <h2 className=" text-5xl font-bold text-orange-200 ">Upcoming Session</h2>
                    <p className="mt-4">Join Our Upcoming Session to enjoy benefits and get a free certificate..</p>
                </div>
                <div className="grid md:grid-cols-3 text-black mt-16 " data-aos="fade-up" data-aos-delay="50" data-aos-duration="500">
                    {
                        upcoming.map(item => <SingleUpcoming key={item.id} item={item}></SingleUpcoming>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Upcoming;