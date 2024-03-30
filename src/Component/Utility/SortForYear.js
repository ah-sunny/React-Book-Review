const wishListBookSortingYear = (wishlistBook)=>{

    const rattingWishArr = wishlistBook.map((book) => book?.yearOfPublishing)
    const sortWish= rattingWishArr.sort((a, b) => b - a)
const resultWish =[]
    for (const i of sortWish) {
        for (const j of wishlistBook) {
            if(i=== j.yearOfPublishing){
                resultWish.push(j)
            }
        } 
    }

    return  resultWish
}


const readBookSortingYear = (readBookList)=>{
    const rattingArr = readBookList.map((book) => book?.yearOfPublishing)
    const sortRating = rattingArr.sort((a, b) => b - a)

    const resultRead =[]
    for (const i of sortRating) {
        for (const j of readBookList) {
            if(i=== j.yearOfPublishing){
                resultRead.push(j)
            }
        } 
    }

return resultRead
}

export { readBookSortingYear, wishListBookSortingYear }

