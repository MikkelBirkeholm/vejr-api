export function convertDateTime(timestamp) {
    let days = ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør']
    let dateFormat = new Date(timestamp * 1000);
    let date = days[dateFormat.getDay()] + ' ' + dateFormat.getDate() +
        "/" + (dateFormat.getMonth() + 1)
    return date;
}