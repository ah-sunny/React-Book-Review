const getStoredWishlistBook = ()=>{
    const storeWishlist  = localStorage.getItem('wishlist-Book');
    if(storeWishlist){
        return JSON.parse(storeWishlist)
    }
    return [];
}

const saveWishlistBookInLocalStorage = id=>{
    const storeBookOfWishlist = getStoredWishlistBook();
    const exists = storeBookOfWishlist.find(bookId => bookId=== id);
    if(!exists){
        storeBookOfWishlist.push(id)
        localStorage.setItem('wishlist-Book',JSON.stringify(storeBookOfWishlist))
    }
}

export { getStoredWishlistBook, saveWishlistBookInLocalStorage };

