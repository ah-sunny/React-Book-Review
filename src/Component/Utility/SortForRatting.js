const wishListBookSortingOfRatting = (wishlistBook)=>{

    const rattingWishArr = wishlistBook.map((book) => book?.rating)
    const sortWish= rattingWishArr.sort((a, b) => b - a)
const resultWish =[]
    for (const i of sortWish) {
        for (const j of wishlistBook) {
            if(i=== j.rating){
                resultWish.push(j)
            }
        } 
    }

    return  resultWish
}


const readBookSortingRatting = (readBookList)=>{
    const rattingArr = readBookList.map((book) => book?.rating)
    const sortRating = rattingArr.sort((a, b) => b - a)

    const resultRead =[]
    for (const i of sortRating) {
        for (const j of readBookList) {
            if(i=== j.rating){
                resultRead.push(j)
            }
        } 
    }

return resultRead
}

export { readBookSortingRatting, wishListBookSortingOfRatting }

