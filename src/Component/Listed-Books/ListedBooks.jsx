import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DropdownBar from "../Home/DropdownBar";
import { getStoredReadBook } from "../LocalStorage/LocalStorageReadBook";
import { getStoredWishlistBook } from "../LocalStorage/LocalStorageWishlistBook";
import { readBookSortingPage, wishListBookSortingPage } from "../Utility/SortForPage";
import { readBookSortingRatting, wishListBookSortingOfRatting } from "../Utility/SortForRatting";
import { readBookSortingYear, wishListBookSortingYear } from "../Utility/SortForYear";
import ReadBookDisplay from "./ReadBookDisplay";


const ListedBooks = () => {
    const [clickedReadTab, setReadTab] = useState(true)
    const [clickedWishTab, setWishTab] = useState(false)

    const handletReadTab = () => {
        setReadTab(true);
        setWishTab(false)
    }
    const handletWishTab = () => {
        setWishTab(true);
        setReadTab(false)
    }

    const Books = useLoaderData();
    const [readBookList, setReadBookList] = useState([])
    const [wishlistBook, setWishlistBook] = useState([])
    const [sortData, setSorData] = useState([])
    const [sortWishData, setSortWishData] = useState([])

    useEffect(() => {
        const storedReadBook = getStoredReadBook();
        if (Books.length > 0) {
            const listOfReadBook = Books.filter(book => storedReadBook.includes(book.bookId))
            setReadBookList(listOfReadBook);
            setSorData(listOfReadBook);
        }
    }, [Books])

    useEffect(() => {
        const storedWishlistBook = getStoredWishlistBook();
        if (Books.length > 0) {
            const listOfWishlistBook = Books.filter(book => storedWishlistBook.includes(book.bookId))
            setWishlistBook(listOfWishlistBook)
            setSortWishData(listOfWishlistBook)
        }
    }, [Books])

    const handleSort = (value) => {
        if (value === 'k') {

            //Readlist Tab
            setSorData([])
            const resultOfRead = readBookSortingRatting(readBookList)
            setSorData(resultOfRead)
            //wishList tab 
            setSortWishData([])
            const resultOfWish = wishListBookSortingOfRatting(wishlistBook)
            setSortWishData(resultOfWish)


        } else if (value === 'year') {
            // const year = readBookList.sort((a, b) => b?.yearOfPublishing - a?.yearOfPublishing)
            //Readlist Tab
            setSorData([])
            const resultOfRead = readBookSortingYear(readBookList)
            setSorData(resultOfRead)
            //wishList tab 
            setSortWishData([])
            const resultOfWish = wishListBookSortingYear(wishlistBook)
            setSortWishData(resultOfWish)

        } else if (value === 'page') {
            //Readlist Tab
            setSorData([])
            const resultOfRead = readBookSortingPage(readBookList)
            setSorData(resultOfRead)
            //wishList tab 
            setSortWishData([])
            const resultOfWish = wishListBookSortingPage(wishlistBook)
            setSortWishData(resultOfWish)
        }
    }

    return (
        <div className="container mx-auto ">
            <div className="my-12 bg-base-300 py-12 rounded-2xl">
                <h1 className="text-center text-4xl font-bold ">Books</h1>
            </div>

            <DropdownBar handleSort={handleSort}  >
            </DropdownBar>

            <div>
                <div className="flex gap-7 text-xl font-semibold text-[#13131374] border-b-2 ">
                    <h1 onClick={handletReadTab}
                        className={clickedReadTab ? 'border-x-4 border-t-4 px-3 rounded-t-md text-black' : ''}
                    >Read Books</h1>
                    <h1 onClick={handletWishTab}
                        className={clickedWishTab ? 'border-x-4 border-t-4 px-3 rounded-t-md text-black' : ''}>Wishlisht Books</h1>
                </div>
            </div>

            {/* show book */}
            <div className={clickedReadTab || 'hidden'}>
                {
                    sortData.map((book, idx) => <ReadBookDisplay key={idx} book={book}></ReadBookDisplay>)

                }
            </div>
            {/* wishlist book */}
            <div className={clickedWishTab || 'hidden'}>
                {
                    sortWishData.map((book, idx) => <ReadBookDisplay key={idx} book={book}></ReadBookDisplay>)
                }
            </div>



        </div>
    );
};

export default ListedBooks;