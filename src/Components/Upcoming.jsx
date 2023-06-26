import { useEffect, useState } from "react";
import SingleUpcoming from "./SingleUpcoming";

const Upcoming = () => {

    const [upcoming, setUpcoming] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setUpcoming(data))
    } , [])
    return (
        <div className="mt-24">
            <div className="text-center">
                <h2 className=" text-5xl font-bold text-orange-200 ">Upcoming Session</h2>
                <p className="mt-4">Jopin Our Upcoming Session to enjoy benefits and get a free certificate..</p>
                <div className="grid grid-cols-3 text-black mt-16">
                    {
                        upcoming.map(item => <SingleUpcoming key={item.id} item={item}></SingleUpcoming>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Upcoming;