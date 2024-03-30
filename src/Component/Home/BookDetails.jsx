import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredReadBook, saveReadBookInLocalStorage } from "../LocalStorage/LocalStorageReadBook";
import { getStoredWishlistBook, saveWishlistBookInLocalStorage } from "../LocalStorage/LocalStorageWishlistBook";


const BookDetails = () => {

    const books = useLoaderData();
    const { Id } = useParams();
    const intID = parseInt(Id)

    const book = books.find(book => book?.bookId === intID)
    const { bookName, image, author, review, rating, category, tags, totalPages, publisher, yearOfPublishing } = book

    const handleRead = () => {
        const storeReadBook = getStoredReadBook()
        const exitsBook = storeReadBook.includes(intID)

        if (exitsBook) {
            toast.error('already read this book')
        } else {
            saveReadBookInLocalStorage(intID)
            toast.success('added readlist succcesfully')
        }
    }

    const handleWishlist = () => {
        const storeWishlistBook = getStoredWishlistBook()
        const exitsWishlistBook = storeWishlistBook.includes(intID)

        const storeReadBook = getStoredReadBook()
        const exitsBook = storeReadBook.includes(intID)

        if (!exitsWishlistBook) {
            if (exitsBook) {
                toast.error('already read this book')
            } else {
                saveWishlistBookInLocalStorage(intID)
                toast.success('added Book Wishlist succcesfully')
            }
        } else {
            toast.error('already added wishlist')
        }
    }

    return (
        <div className="container mx-auto mt-14">

            <div className="card lg:card-side bg-base-100 ">
                <div className="lg:w-[45%] p-9 lg:h-auto bg-base-200 rounded-xl">
                    <figure >
                        <img src={image} alt="Album" className="h-72 lg:h-auto" />
                    </figure>
                </div>

                <div className="lg:w-[50%] mt-7 lg:mt-1 flex flex-col pl-14 space-y-5 text-[#131313B3] ">
                    <h2 className="card-title text-5xl text-black">{bookName}</h2>
                    <p className="text-lg font-medium ">By : {author}</p>
                    <h2 className="border-y-2 py-3 my-5 font-bold text-xl text-black">{category}</h2>

                    <h1 className="flex-grow leading-[2rem] ">
                        <span className="text-xl font-semibold text-black">Review : </span>{review}
                    </h1>

                    <div className='flex gap-4 border-b-2 pb-7'>
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

                    <div className="text-xl font-medium space-y-3">
                        <h1>Number Of Pages :  <span className="text-black font-bold ml-12">{totalPages}</span> </h1>
                        <h1>Publisher : <span className="text-black font-bold ml-32 ">{publisher}</span> </h1>
                        <h1>Year of Publishing: <span className="text-black font-bold ml-12">{yearOfPublishing}</span></h1>
                        <h1>Rating : <span className="text-black font-bold ml-40">{rating}</span></h1>

                    </div>


                    <div className="card-actions gap-6 ">
                        <button onClick={handleRead} className="btn btn-outline text-xl">Read</button>
                        <button onClick={handleWishlist} className="btn btn-success text-xl">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default BookDetails;