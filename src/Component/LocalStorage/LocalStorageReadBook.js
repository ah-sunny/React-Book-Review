const getStoredReadBook = ()=>{
    const storeBook  = localStorage.getItem('read-Book');
    if(storeBook){
        return JSON.parse(storeBook)
    }
    return [];
}

const saveReadBookInLocalStorage = id=>{
    const storedReadBook = getStoredReadBook();
    const exists = storedReadBook.find(bookId => bookId=== id);
    if(!exists){
        storedReadBook.push(id)
        localStorage.setItem('read-Book',JSON.stringify(storedReadBook))
    }
}

export { getStoredReadBook, saveReadBookInLocalStorage };

