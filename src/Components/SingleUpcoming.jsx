import { Link } from "react-router-dom";

const SingleUpcoming = ({ item }) => {
    const { name, image, price } = item;
    return (
        <div>
            <div className="card rounded-none w-80 mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="" />
                </figure>
                <div className="card-body ml-2">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions">
                        <Link><button className="btn btn-warning bg-[#D27D2D] text-white ">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUpcoming;