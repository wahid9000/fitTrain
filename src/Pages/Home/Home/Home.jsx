import Upcoming from '../../../Components/Upcoming';
import image from '../../../assets/image1.jpg';
const Home = () => {
    return (
        <div className='text-white'>
            <div className='flex justify-center gap-10 w-11/12 items-center gap'>
                <div className=" w-10/12 text-white">
                    <h2 className='text-5xl font-bold text-orange-200 leading-tight'>Join Our Training Session & Keep Your Body Fit</h2>
                    <p className='mt-4 w-11/12 leading-snug'>TrainHere is a global training center where people from all over the world takes the training and keep themselves fit.</p>
                </div>
                <div className=' w-8/12'>
                    <img src={image} alt="" />
                </div>
            </div>

            <Upcoming></Upcoming>


        </div>
    );
};

export default Home;