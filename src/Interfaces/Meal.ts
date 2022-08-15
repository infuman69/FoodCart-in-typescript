interface Meal {
    idMeal : string,
    strMeal : string,
    strDrinkAlternate : null,
    strCategory: string,
    strArea:string,
    strMealThumb: string,
    strTags : string|null,
    strYoutube: string,
    strSource: string | null,
    strImageSource:null,
    strCreativeCommonsConfirmed:null,
    dateModified:null,
    price:number,
    fav:boolean,
}

export default Meal