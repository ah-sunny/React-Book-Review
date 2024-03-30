const wishListBookSortingPage = (wishlistBook)=>{

    const rattingWishArr = wishlistBook.map((book) => book?.totalPages)
    const sortWish= rattingWishArr.sort((a, b) => b - a)
const resultWish =[]
    for (const i of sortWish) {
        for (const j of wishlistBook) {
            if(i=== j.totalPages){
                resultWish.push(j)
            }
        } 
    }

    return  resultWish
}


const readBookSortingPage = (readBookList)=>{
    const rattingArr = readBookList.map((book) => book?.totalPages)
    const sortRating = rattingArr.sort((a, b) => b - a)

    const resultRead =[]
    for (const i of sortRating) {
        for (const j of readBookList) {
            if(i=== j.totalPages){
                resultRead.push(j)
            }
        } 
    }

return resultRead
}

export { readBookSortingPage, wishListBookSortingPage }

