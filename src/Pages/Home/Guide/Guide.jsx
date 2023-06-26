import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Guide = () => {
    return (
        <div>
            <div className="md:flex p-5 justify-center gap-10 mx-auto" data-aos="fade-left" data-aos-delay="50" data-aos-duration="500">
                <div className="md:w-7/12" >
                    <h2 className="text-orange-200 text-3xl font-bold mb-4">Fitness Basics</h2>
                    <p className="text-justify text-white">To have a fit body, basics of fitness must have to be known. Explaining the importance of regular exercise for overall health and wellness. Discuss the benefits of different types of workouts, such as cardiovascular exercises, strength training, and flexibility exercises.Discuss the benefits of different types of workouts, such as cardiovascular exercises, strength training, and flexibility exercises and flexibility exercises.Discuss the benefits of different types of workouts, such as cardiovascular exercises, strength training, and flexibility exercises.</p>
                </div>
                <div data-aos="fade-left">
                    <img src="https://i.ibb.co/vz5sR28/concept-power-strength-healthy-lifestyle-sport-powerful-attractive-muscular-man-gym.jpg" className="rounded-lg" width={550} alt="" />
                </div>
            </div>


            <div className="md:flex p-5 justify-center gap-12 mx-auto mt-10" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500">
                <div>
                    <img src="https://i.ibb.co/DkHcDrb/athletic-man-woman-with-dumbbells.jpg" className="rounded-lg" width={550} alt="" />
                </div>
                <div className="md:w-7/12">
                    <h2 className="text-orange-200 text-3xl font-bold mb-4">Goal Setting</h2>
                    <p className="text-justify text-white">This section provides an introduction to fitness fundamentals. Explaining the importance of regular exercise for overall health and wellness. Discuss the benefits of different types of workouts, such as cardiovascular exercises, strength training, and flexibility exercises.Discuss the benefits of different types of workouts, such as cardiovascular exercises, strength training, and flexibility exercises and flexibility exercises.Discuss the benefits of different types of workouts, such as cardiovascular exercises, strength training, and flexibility exercises.</p>
                </div>
            </div>

            <div className="md:flex p-5 justify-center gap-12 mx-auto mt-10" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500">
                <div className="md:w-7/12">
                    <h2 className="text-orange-200 text-3xl font-bold mb-4">Nutrition and Meal Planning</h2>
                    <p className="text-justify text-white">Role of nutrition in supporting fitness goals. Provide guidance on developing a balanced and nutritious meal plan. Explain the importance of macronutrients (carbohydrates, proteins, and fats) and micronutrients (vitamins and minerals) in fueling the body for workouts and promoting recovery. Offer tips for meal prepping, portion control, and choosing whole, nutrient-dense foods.role of nutrition in supporting fitness goals. Provide guidance on developing a balanced and nutritious meal plan. Explain the importance of macronutrients (carbohydrates, proteins, and fats) and micronutrients (vitamins and minerals) in fueling the body for workouts and promoting recovery. Offer tips for meal.</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/t2CWRCr/fitness-woman-preparing-detox-juice.jpg" className="rounded-lg" width={550} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Guide;