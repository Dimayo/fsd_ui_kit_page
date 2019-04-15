var Calendar = (function () {
    function Calendar(container) {
        if (container === void 0) {
            container = 'calendar';
        }
        this.container = container;
        this.today = new Date();
        this.currentMonth = this.today.getMonth();
        this.currentYear = this.today.getFullYear();
        this.currentDay = this.today.getDate();
        this.selectYear = this.currentYear;
        this.selectMonth = this.currentMonth;
        this.selectDay = this.currentDay;
        this.selectDate = this.selectYear + '-' + ((this.selectMonth < 10) ? '0' + (this.selectMonth + 1) : this.selectMonth + 1) + '-' + (this.currentDay < 10 ? '0' + this.currentDay : this.currentDay);
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        this.container = container;
        this.showCalendar();
    }
    //showCalendar();
    Calendar.prototype.showCalendar = function () {
        var container = document.getElementById(this.container);
        if (container) {
            var table = document.createElement('table');
            table.classList.add('calendar__table');
            table.appendChild(this.calendarHeader());
            table.appendChild(this.calendarBody());
            table.appendChild(this.calendarFooter());
            container.innerHTML = '';
            container.appendChild(table);
        }
    };
    //calendarHeader
    Calendar.prototype.calendarHeader = function () {
        var _this = this;
        //create calendar header
        var calendarHeader = document.createElement('thead');
        calendarHeader.classList.add('calendar__header');
        var navDay = document.createElement('tr');
        var navRow = document.createElement('tr');
        navRow.classList.add('calendar__nav');
        //get current year and month

        var number = document.createElement('td');
        number.setAttribute('colspan', '7');
        number.classList.add('calendar__date');
        navDay.appendChild(number);
        number.innerHTML = this.currentDay;

        var prev = document.createElement('td');
        prev.classList.add('prev');
        prev.innerHTML = '<span class="calendar__left-arrow"></span>';
        navRow.appendChild(prev);
        //prev action
        prev.addEventListener('click', function (e) {
            _this.previous();
            _this.showCalendar();
        });
        var current = document.createElement('td');
        this.monthAndYear = this.months[this.selectMonth];
        current.setAttribute('colspan', '5');
        current.classList.add('calendar__month');
        current.appendChild(document.createTextNode(this.monthAndYear));
        navRow.appendChild(current);
        var next = document.createElement('td');
        next.classList.add('next');
        next.innerHTML = '<span class="calendar__right-arrow"></span>';
        navRow.appendChild(next);
        //next action
        next.addEventListener('click', function (e) {
            _this.next();
            _this.showCalendar();
        });
        //get days calendar
        var headerDays = document.createElement('tr');
        headerDays.classList.add('calendar__days-name');
        for (var i = 0; i < this.days.length; i++) {
            var daysCell = document.createElement('td');
            daysCell.appendChild(document.createTextNode(this.days[i]));
            headerDays.appendChild(daysCell);
        }
        calendarHeader.appendChild(navDay);
        calendarHeader.appendChild(navRow);
        calendarHeader.appendChild(headerDays);
        return calendarHeader;
    };
    Calendar.prototype.calendarFooter = function () {
        var _this = this;
        var tr = document.createElement('tr');
        tr.classList.add('calendar__footer');
        var today = document.createElement('td');
        today.setAttribute('colspan', '7');
        today.classList.add('calendar__today-button');
        today.innerHTML = 'Today';
        tr.appendChild(today);
        today.addEventListener('click', function (e) {
            _this.getToday();
            _this.showCalendar();
        });
        return tr;
    };
    Calendar.prototype.calendarBody = function () {
        var _this = this;
        //get calendar body
        var firstDay = (new Date(this.selectYear, this.selectMonth)).getDay();
        var lastDay = (new Date(this.selectYear, this.selectMonth + 1, 0)).getDate();
        var lastDayOfLastMonth = this.selectMonth == 0 ? new Date(this.selectYear - 1, 11, 0).getDate() : new Date(this.selectYear, this.selectMonth, 0).getDate();
        var tbl = document.createElement('tbody');
        tbl.classList.add('calendar__body');
        tbl.innerHTML = "";
        // filing data about month and in the page via DOM.
        this.selectYear = this.currentYear;
        this.selectMonth = this.currentMonth;
        // creating all cells
        var date = 1;
        for (var i = 0; i < 6; i++) {
            // creates a table row
            var row = document.createElement("tr");
            row.classList.add('calendar__row');
            var _loop_1 = function (j) {
                if (i === 0 && j < firstDay - 1) {
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                } else if (date > this_1.daysInMonth(this_1.selectMonth, this_1.selectYear)) {
                    return "break";
                }else {
                    var cell = document.createElement("td");
                    cell.classList.add('calendar__cell');
                    var cellText = document.createTextNode('' + date + '');
                    if (date === this_1.today.getDate() && this_1.selectYear === this_1.today.getFullYear() && this_1.selectMonth === this_1.today.getMonth()) {
                        cell.innerHTML = date;
                        cell.classList.add('calendar__day');
                        cell.classList.add('calendar__today');
                        cell.classList.add('calendar__day_selected');
                    } // color today's date
                    else {
                        cell.innerHTML = date;
                        cell.classList.add('calendar__day');
                    }
                    var id_1 = this_1.selectYear + '-' + ((this_1.selectMonth < 10) ? '0' + (this_1.selectMonth + 1) : this_1.selectMonth + 1) + '-' + (date < 10 ? '0' + date : date);
                    cell.setAttribute('id', id_1);
                    //next action
                    cell.addEventListener('click', function (e) {
                        _this.select(id_1);
                    });
                    row.appendChild(cell);
                    date++;
                }
            };
            var this_1 = this;
            //creating individual cells, filing them up with data.
            for (var j = 0; j < 7; j++) {
                var state_1 = _loop_1(j);
                if (state_1 === "break")
                    break;
            }
            tbl.appendChild(row); // appending each row into calendar body.
        }
        return tbl;
    };

    Calendar.prototype.next = function () {
        this.currentMonth = (this.currentMonth + 1) % 12;
        this.showCalendar();
    };
    Calendar.prototype.previous = function () {
        this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;
        this.showCalendar();
    };
    Calendar.prototype.getToday = function () {
        this.currentYear = this.today.getFullYear();
        this.currentMonth = this.today.getMonth();
        this.showCalendar();
    };
    Calendar.prototype.select = function (id) {
        this.selectDate = id;
        var els = document.querySelectorAll('.calendar__day_selected');
        for (var i = 0; i < els.length; i++) {
            els[i].classList.remove('calendar__day_selected');
        }
        var x = document.getElementById(id);
        x.classList.add('calendar__day_selected');

        var selected = document.querySelector('.calendar__day_selected');
        var number = document.querySelector('.calendar__date');
        number.innerHTML = selected.innerHTML;
    };

    Calendar.prototype.daysInMonth = function (iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    };

    return Calendar;

}());
new Calendar('calendar');