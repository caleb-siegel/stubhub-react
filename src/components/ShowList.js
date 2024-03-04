import Show from "./Show";

function ShowList( {showData} ) {
    return (
        <div>
            {showData.map((show) => <Show key={show.id} name={show.name} price={show.price} seatsAmount={show.seatsAmount} seatLocation={show.seatLocation}/>)}
        </div>
    )
}

export default ShowList;