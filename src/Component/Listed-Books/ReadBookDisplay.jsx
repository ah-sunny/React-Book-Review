import PropTypes from 'prop-types';
import { BsFileEarmarkText, BsPeople } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

const ReadBookDisplay = ({ book }) => {
    const { bookName, image, author, rating, category, tags, totalPages, publisher, yearOfPublishing } = book

    return (
        <div className='mt-7 border-2 rounded-2xl'>
            <div className="card card-side bg-base-100 flex-col lg:flex-row p-6 shadow-xl">
                <div className='lg:w-[30%] items-center '>
                    <figure className='bg-base-200 py-5 rounded-2xl h-full'><img src={image} alt="book" className='h-56 w-auto' /></figure>
                </div>


                <div className="card-body space-y-3">
                    <h2 className="card-title text-4xl">{bookName}</h2>
                    <p className='text-lg font-medium'>By: {author}</p>
                    {/* tag-year */}
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-10'>
                        {/* tag */}
                        <div className='flex gap-4'>
                            <h1 className="text-xl font-semibold text-black">Tag</h1>
                            {
                                tags.map((item, idx) =>
                                    <span className='bg-base-200 px-5 py-1 rounded-xl text-[#23BE0A]'
                                        key={idx}>
                                        #{item}
                                    </span>
                                )
                            }

                        </div>
                        <div className='flex items-center gap-2 text-lg font-medium text-[#1313139b]'>
                            <GrLocation></GrLocation> <h1 >Year of Publishing : {yearOfPublishing}</h1>
                        </div>
                    </div>
                    {/* publish-page */}
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 border-b-2 font-medium text-[#13131394] pb-4'>
                        <div className='flex gap-2 items-center'>
                            <BsPeople></BsPeople>
                            <h1>Publisher : {publisher}</h1>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <BsFileEarmarkText></BsFileEarmarkText>
                            <h1>Page : {totalPages}</h1>
                        </div>
                    </div>
                    {/* last div */}
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 items-center font-medium'>
                        <div>
                            <h1 className='bg-[#328eff2c] rounded-3xl p-2 px-5 text-[#1173eb]'>Category : {category}</h1>
                        </div>
                        <div>
                            <h1 className='bg-[#ffad3316] rounded-3xl p-2 px-5 text-[#c97e0cf3]'>Rating : {rating}</h1>
                        </div>
                        <div>
                            <button className=' bg-success px-5 rounded-3xl py-2 text-white'>View Details</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

ReadBookDisplay.propTypes = {
    book: PropTypes.object.isRequired,
}
export default ReadBookDisplay;