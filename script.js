const date = () =>{
    let date_main = new Date("Nov, 04, 2022, 10:50:58");

    let current_date = new Date();

    let date_day = parseInt((date_main - current_date) / 1000 / 60 / 60 / 24);

    let date_hou = parseInt((date_main - current_date) / 1000 / 60 / 60) % 24;

    let date_min = parseInt((date_main - current_date) / 1000 / 60) % 24;


}
date();