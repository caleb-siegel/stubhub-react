
function ShowSearch( { showSearch, handleShowSearch } ) {
    return (
        <div>
            <form>
                <input type="text" placeholder="Search for shows..." value={showSearch} onChange={(event) => handleShowSearch(event)}/>
            </form>
        </div>
    )
}

export default ShowSearch;