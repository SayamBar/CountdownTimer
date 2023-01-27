const endDate = "4 February 2023 08:00 PM";
 
document.getElementById('end-date').innerHTML = endDate;
const inputs = document.querySelectorAll("input");


const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    console.log(end);
    console.log(now);
    var diff = (end - now) / 1000;
    console.log(diff);
    // Convert into days
    const days = Math.floor(diff / (3600*24));
    inputs[0].value = days;
    
    // Convert into hours
    inputs[1].value = Math.floor((diff / 3600) % 24);

    // Convert into minutes
    inputs[2].value = Math.floor((diff / 60) % 60);

    // Convert into seconds
    inputs[3].value = Math.floor((diff % 60));

}

setInterval(
    () => {
        clock();
    }
,1000);