import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const DisplayAuthor = ({ book }) => {
    const { bookId, bookName, author, image } = book;

    const navigate = useNavigate()
    const handleAuthor = () => {
        navigate(`/home/book-details/${bookId}`)
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure className="h-96 p-5"><img src={image} alt="book" className="h-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold mb-7">{author}</h2>
                    <p>Book Name : {bookName}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleAuthor} className="btn btn-primary">Show Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
DisplayAuthor.propTypes = {
    book: PropTypes.object.isRequired,
}

export default DisplayAuthor;