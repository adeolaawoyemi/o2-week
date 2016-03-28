function ISO8601_week_no(dt) {
    var tdt = new Date(dt.valueOf());
    var dayn = (dt.getDay() + 6) % 7;
    tdt.setDate(tdt.getDate() - dayn + 3);
    var firstThursday = tdt.valueOf();
    tdt.setMonth(0, 1);
    if (tdt.getDay() !== 4) {
        tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - tdt) / 604800000);
}

var padNumber = function(num) {
    return num < 10 ? '0' + num : num;
};

;(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var container = document.querySelector('#week');
        var today = new Date();
        var year = String(today.getFullYear()).substring(2);
        var week = ISO8601_week_no(today);
        var sprint = year + '.' + padNumber(week);
        console.log('sprint:', sprint);
        if (container) container.innerHTML = sprint;
        chrome.browserAction.setBadgeText({text: sprint});
        chrome.browserAction.setBadgeBackgroundColor({color: "#11abe0"});
    }, false);
})();
