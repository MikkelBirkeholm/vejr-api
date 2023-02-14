export function getUrlDates() {
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let urlNow = y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    let urlWeek = y + '-' + (m <= 9 ? '0' + m : m) + '-' + Number(6 + (d <= 9 ? '0' + d : d));

    return [urlNow, urlWeek];
}