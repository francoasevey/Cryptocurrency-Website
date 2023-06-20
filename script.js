const date = () =>{
    let date_main = new Date("Nov, 04, 2023, 10:50:58");

    let current_date = new Date();

    let date_day = parseInt((date_main - current_date) / 1000 / 60 / 60 / 24);

    let date_hou = parseInt((date_main - current_date) / 1000 / 60 / 60) % 24;

    let date_min = parseInt((date_main - current_date) / 1000 / 60) % 60;

    let date_sec = parseInt((date_main - current_date) / 1000) % 60;

    document.getElementsByClassName('time')[0].innerHTML = `
            <span>${date_day}<br>
            <h6>DAYS</h6>
            </span>
            <h5>:</h5>
            <span>${date_hou}<br>
            <h6>HOURS</h6>
            </span>
            <h5>:</h5>
            <span>${date_min}<br>
            <h6>MINUTES</h6>
            </span>
            <h5>:</h5>
            <span>${date_sec}<br>
            <h6>SECONDS</h6>
            </span>
            `
}
//date();
setInterval(date, 1000);