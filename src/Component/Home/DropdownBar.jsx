import PropTypes from 'prop-types';

const DropdownBar = ({handleSort}) => {

  return (
    <div className="my-20 h-16 text-center ">
      <select onClick={(e)=>handleSort(e.target.value)}  className="border-2 bg-success rounded-xl select text-2xl h-full font-semibold text-white ">
        <option disabled selected>Sort By</option>
        <option value='k' >Rating</option>
        <option value='page' >Number of pages</option>
        <option value='year' > Publisher year</option>
      </select>
    </div>
  );
};

DropdownBar.propTypes = {
  handleSort: PropTypes.func
}

export default DropdownBar;