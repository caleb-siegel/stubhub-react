function SeatLocationSearch( { seatLocationSearch, handleSeatLocationSearch } ) {
    return (
        <div>
            <form>
                <input type="text" placeholder="Search for seat locations..." value={seatLocationSearch} onChange={(event) => handleSeatLocationSearch(event)}/>
            </form>
        </div>
    )
}

export default SeatLocationSearch;