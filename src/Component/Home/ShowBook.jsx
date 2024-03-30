import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ShowBook = ({ book }) => {

    const navigate = useNavigate();
    const { bookId, bookName, image, author, rating, category, tags } = book;

    const handleBookDetails = () => {
        navigate(`/home/book-details/${bookId}`)
    }

    return (
        <div onClick={handleBookDetails} className='text-center mx-auto'>

            <div className="card w-96 bg-base-100 shadow-xl border-2">
                <figure className="mx-6 mt-3 p-2 bg-base-300 rounded-xl ">
                    <img src={image} alt="BOOKS" className="h-60" />
                </figure>

                <div className="card-body ">
                    <div className='flex gap-4'>
                        {
                            tags.map((item, idx) =>
                                <span className='bg-base-200 px-4 rounded-xl text-[#23BE0A]'
                                    key={idx}>
                                    {item}
                                </span>
                            )
                        }

                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p className="font-medium pb-3 text-left">By : {author}</p>
                    <div className="card-actions flex justify-between border-t-2 border-dashed pt-4">
                        <div><p>{category}</p></div>

                        <div className='flex items-center gap-3'><p>{rating}</p>
                            <FaRegStar className='text-xl'></FaRegStar>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

ShowBook.propTypes = {
    book: PropTypes.object.isRequired,
}

export default ShowBook;