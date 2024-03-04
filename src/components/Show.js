function Show( {name, price, seatsAmount, seatLocation} ) {
    return (
        <div>
            <h3>{name} - ${price}; {seatsAmount} tickets in {seatLocation}</h3>
        </div>
    )
}

export default Show;