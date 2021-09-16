module.exports = function isWeekday(day) {
    return day.startsWith('Mon', 'Tue', 'Wednes', 'Thurs', 'Fri');
    }