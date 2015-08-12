Date.prototype.getWeekNumber = function(){
    var d = new Date(+this);
    d.setHours(0,0,0);
    d.setDate(d.getDate()+4-(d.getDay()||7));
    return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
};

;(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var container = document.querySelector('#week');
        var today = new Date();
        var year = String(today.getFullYear()).substring(2);
        var week = today.getWeekNumber();
        var sprint = year + '.' + week;
        container.innerHTML = sprint;
        chrome.browserAction.setBadgeText({text: sprint});
    }, false);
})();
