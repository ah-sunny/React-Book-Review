import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ShowBook from "./ShowBook";

const Home = () => {

    const books = useLoaderData();

    return (
        <div className="container mx-auto ">
            <Banner></Banner>

            <div>
                <h1 className="text-center font-bold text-5xl mt-24 mb-7 ">Books </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 ">
                    {
                        books.map((book, idx) =>
                            <ShowBook
                                key={idx}
                                book={book}>

                            </ShowBook>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;