function PriceSearch( { priceSearch, handlePriceSearch } ) {
    return (
        <div>
            <form>
                <input type="text" placeholder="Search for prices..." value={priceSearch} onChange={(event) => handlePriceSearch(event)}/>
            </form>
        </div>
    )
}

export default PriceSearch;