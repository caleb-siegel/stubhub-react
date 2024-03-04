function SeatAmountSearch( { seatAmountSearch, handleSeatAmountSearch } ) {
    return (
        <div>
            <form>
                <input type="text" placeholder="Search for number of seats..." value={seatAmountSearch} onChange={(event) => handleSeatAmountSearch(event)}/>
            </form>
        </div>
    )
}

export default SeatAmountSearch;