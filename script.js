document.addEventListener("DOMContentLoaded", function(){
        // weather api
        let locationLat = "";
        let locationLong = ""

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    let locationLat = position.coords.latitude;
                    let locationLong = position.coords.longitude;
    
                    console.log(`User location latitude is: ${locationLat}`);
                    const apiKey = 'ea6c596ca39b0d3bc539ada037070c7a'
                    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${locationLat}&lon=${locationLong}&units=metric&appid=${apiKey}`
            
                    fetch(url)
                    .then(
                        response => response.json()
                    )
                    .then( data=>{
                        console.log(data)
                        document.getElementById('temp').innerHTML = data.main.temp + '°C'
                    })
                    .catch(error=>console.error('Error!!',error))
                },
                function (error) {
                    console.log("Error getting location: ", error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        // timee and date
    function showTime(){
        const now = new Date()

    const monthNames = [
        'January','February','March','April','May','June','July',
        'August','September','October','November','December'
    ]
    const days = [
        'Sunday','Monday','Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]

    var date = now.getDate()
    var h = now.getHours()
    var m = now.getMinutes()
    var session = 'AM'
    let monthName = monthNames[now.getMonth()];
    let dayName = days[now.getDay()]

    if(h>=12){
        session = 'PM'
        h -= 12
    }

    h = (h<10)?'0'+h :h
    m = (m<10)?'0'+m :m
    document.querySelector('.dayTime').innerHTML = dayName + ',' + '' + monthName + '' + ' ' + date
    document.querySelector('.clock').innerHTML = h + ":" + m + " " + session
    setInterval(showTime,1000)
    }
    showTime()


})