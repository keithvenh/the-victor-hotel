const displayDate = (date, format='dddd mmmm d, yyyy') => {

    format = format.split(' ');
    let month = date.getMonth();
    let day = date.getDate();
    let weekday = date.getDay();
    let year = date.getFullYear();

    switch(month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3: 
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
        default: 
            break;
    }

    switch(weekday) {
        case 0:
            weekday = "Sunday";
            break;
        case 1:
            weekday = "Monday";
            break;
        case 2:
            weekday = "Tuesday";
            break;
        case 3: 
            weekday = "Wednesday";
            break;
        case 4:
            weekday = "Thursday";
            break;
        case 5:
            weekday = "Friday";
            break;
        case 6:
            weekday = "Saturday";
            break;
        default:
            break;
    }

    format[0] = weekday + ',';
    format[1] = month;
    format[2] = day + ',';
    format[3] = year;
    let display = format.join(' ');

    return display;

}

export default displayDate;