
const Profile=({name,age,bio})=>{
    return(
        <>
             <img src="https://media-mba1-1.cdn.whatsapp.net/v/t61.24694-24/353314354_1240018909986285_8300716115042743758_n.jpg?ccb=11-4&oh=01_Q5AaIA1jIhl_G3ydrdljigxeHaasxsbt5yVR69zhOOUYqir1&oe=667E890A&_nc_sid=e6ed6c&_nc_cat=111" alt="" srcset="" />
       
            <h1>am {name}</h1>
            <p>am {age} years old</p>
           <p>{bio}</p>
           {/* <h1>am {name2}</h1>
           <p>am {age2} years old</p>
           <p>{bio2}</p> */}

        
        </>
    )

}
export default Profile