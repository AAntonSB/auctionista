import React, {useEffect, useState} from 'react'

const UserPageItem = (props) => {

    const [image, setImage] = useState(null);
    const [timeString, setTimeString] = useState(null);

    useEffect(() => {
        //
        setImage("/rest/v1/download/" + props.listing.images[0].filename)
        let workingDate = new Date(props.listing.endDate);
        console.log(workingDate.toUTCString())
        let day = workingDate.getDate();
        let month = workingDate.getMonth() + 1;
        let hours = workingDate.getHours();
        let minutes = workingDate.getMinutes();
        let seconds = workingDate.getSeconds();
        console.log("day is: " + day);
        let stringDate = day +"/" + month +" " + hours + ":" + minutes + ":" + seconds;
        setTimeString(day +"/" + month +" " + hours + ":" + minutes + ":" + seconds)
        console.log("day is: " + stringDate);

    }, [])

    return (
        
        <div class="user-listings-grid-container">
            <div class="time-ending">End date: {timeString}</div>

            <div class="current-bid">{props.listing.bids.length > 0 ? props.listing.bids.length[0].amount : "No current bid"}</div>
            <div class="number-of-bids">{"Bids: " + props.listing.bids.length}</div>

            <div class="highestbidder">{props.listing.bids.length > 0 ? props.listing.bids.length[0].amount : "No current bid"}</div>
            
            
            <div class="display-image">
            <img class="object-fit-contains" src={image} alt="" />
            </div>
            <div class="listing-text">
            <p class="center-my-text">{props.listing.title}</p>
            <p>{props.listing.description}</p>
            </div>
        </div>
        
    )
}

export default UserPageItem;
