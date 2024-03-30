import { useNavigate } from 'react-router-dom';
import BannerImage from './banner.png';

const Banner = () => {

    const navigate = useNavigate()
    const handleBannerBtn = () => {
        navigate('/listed-book')
    }

    return (
        <div>

            <div className=" p-5 lg:px-20 rounded-3xl bg-base-200">
                <div className=" hero-content flex-col lg:flex-row-reverse justify-between">
                    <img src={BannerImage} className="max-w-sm h-80 lg:h-full " />
                    <div>
                        <h1 className=" text-4xl lg:text-7xl font-bold mb-9">Books to freshen  <br /> up your bookshelf</h1>

                        <button onClick={handleBannerBtn} className="btn px-6 bg-[#23BE0A] text-white hover:text-black text-xl">View The List</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;