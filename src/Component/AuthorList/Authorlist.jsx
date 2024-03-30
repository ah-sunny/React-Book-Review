import { useLoaderData } from "react-router-dom";
import DisplayAuthor from "./DisplayAuthor";


const Authorlist = () => {

    const books = useLoaderData();

    return (
        <div className="container mx-auto ">
            <div className="my-12 bg-base-300 py-12 rounded-2xl">
                <h1 className="text-center text-4xl font-bold ">Author list </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3   w-fit text-center mx-auto  gap-14">
                {
                    books.map((book, idx) => <DisplayAuthor
                        key={idx} book={book}>

                    </DisplayAuthor>)
                }
            </div>

        </div>
    );
};

export default Authorlist;