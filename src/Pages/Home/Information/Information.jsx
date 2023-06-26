
const Information = () => {
    return (
        <div>
            <div className="border text-center p-8 rounded-lg">
                <p className="text-white mb-2">Information</p>
                <h2 className="text-5xl font-bold text-orange-200">About Us</h2>
            </div>
            <div className="text-white">

                <div className="text-justify px-3 mt-8 mx-auto">
                    <h3 className="text-3xl text-orange-200 font-bold mb-3">What We Are?</h3>
                    <p>Welcome to TrainHere, your ultimate destination for fitness training and transformation. Our holistic approach focuses on empowering individuals to prioritize their health, providing personalized programs designed by our expert team of trainers, nutritionists, and wellness professionals. </p>
                </div>
                <div className="text-justify flex px-3 gap-10 mt-5 mx-auto">
                    <p>With state-of-the-art facilities, a supportive community, and a commitment to your well-being, we are dedicated to helping you achieve your fitness goals and embark on a transformative journey to a healthier, stronger, and more vibrant life.We offer a wide range of fitness programs and classes designed to cater to diverse needs and interests. From high-intensity interval training  and strength training to yoga, Pilates, and meditation, our offerings are designed to engage and challenge individuals of all fitness levels. Our classes are led by experienced instructors who create an inclusive and supportive environment, ensuring that everyone feels comfortable and motivated to push their boundaries.

                        When you step into our state-of-the-art facilities, you will find an inviting and energizing space equipped with cutting-edge equipment and amenities.

                    </p>
                    <img src="https://i.ibb.co/MgS4wJ4/couple-training-together-gym.jpg" width={400} className="rounded-lg" height={400} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Information;