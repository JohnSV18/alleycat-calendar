import './AboutUs.css'
function AboutUs() {
    return (
        <div className="AboutUs">
            <h2>About Us</h2>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/alleycatexample.jpg`} width="500" height="500" alt="hello" />
            </div>
            <p>Alleycat Calendar is the unofficial online Calendar of
              alleycat races that go on throughout the world. Take a look
              for any upcoming races around you.</p>
            <p>Welcome to the Alleycat Calender! Although alleycats are 
              unsanctioned races for bikes (normally for fixie/track bikes), 
              we still want to have some organization and be able to keep
              track of races that you or others have raced in. With alleycat
              races being made at different times by different groups in different
              locations, there isn't one single place where one can see what races
              had already passed or which are coming up. This is where we come in 
              as the online calendar of the Alleycat Races.</p>
        </div>
    )
}
export default AboutUs;
