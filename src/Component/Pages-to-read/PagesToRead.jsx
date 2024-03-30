import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { getStoredReadBook } from '../LocalStorage/LocalStorageReadBook';

const PagesToRead = () => {
    const Books = useLoaderData();
    const [readBookData, setReadBookData] = useState([]);

    useEffect(() => {
        const storedReadBookData = getStoredReadBook();
        if (Books.length > 0) {
            const listOfReadBook = Books.filter(book => storedReadBookData.includes(book.bookId))
            setReadBookData(listOfReadBook);
        }
    }, [Books])

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='lg:w-[90%] text-center mx-auto bg-base-200 lg:p-10 rounded-2xl mt-5'>

            <div className='w-[100%] h-[420px] text-center'>
                <ResponsiveContainer>
                    <BarChart data={readBookData}
                        margin={{
                            top: 30,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="bookName" />
                        <YAxis />
                        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {readBookData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>

                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};


PagesToRead.propTypes = {
    props: PropTypes.object.isRequired,
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
}
export default PagesToRead;