const Calendar = (function () {
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

    Calendar.prototype.showCalendar = function () {
        const container = document.getElementById(this.container);
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

    Calendar.prototype.calendarHeader = function () {
        const _this = this;
        const calendarHeader = document.createElement('thead');
        calendarHeader.classList.add('calendar__header');
        const navDay = document.createElement('tr');
        const navRow = document.createElement('tr');
        navRow.classList.add('calendar__nav');


        const number = document.createElement('td');
        number.setAttribute('colspan', '7');
        number.classList.add('calendar__date');
        navDay.appendChild(number);
        number.innerHTML = this.currentDay;

        const prev = document.createElement('td');
        prev.classList.add('prev');
        prev.innerHTML = '<span class="calendar__left-arrow"></span>';
        navRow.appendChild(prev);

        prev.addEventListener('click', function (e) {
            _this.previous();
            _this.showCalendar();
        });
        const current = document.createElement('td');
        this.monthAndYear = this.months[this.selectMonth];
        current.setAttribute('colspan', '5');
        current.classList.add('calendar__month');
        current.appendChild(document.createTextNode(this.monthAndYear));
        navRow.appendChild(current);
        const next = document.createElement('td');
        next.classList.add('next');
        next.innerHTML = '<span class="calendar__right-arrow"></span>';
        navRow.appendChild(next);

        next.addEventListener('click', function (e) {
            _this.next();
            _this.showCalendar();
        });

        const headerDays = document.createElement('tr');
        headerDays.classList.add('calendar__days-name');
        for (let i = 0; i < this.days.length; i++) {
            const daysCell = document.createElement('td');
            daysCell.appendChild(document.createTextNode(this.days[i]));
            headerDays.appendChild(daysCell);
        }
        calendarHeader.appendChild(navDay);
        calendarHeader.appendChild(navRow);
        calendarHeader.appendChild(headerDays);
        return calendarHeader;
    };

    Calendar.prototype.calendarFooter = function () {
        const _this = this;
        const tr = document.createElement('tr');
        tr.classList.add('calendar__footer');
        const today = document.createElement('td');
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
        const _this = this;
        const firstDay = (new Date(this.selectYear, this.selectMonth)).getDay();
        const tbl = document.createElement('tbody');
        tbl.classList.add('calendar__body');
        tbl.innerHTML = "";
        this.selectYear = this.currentYear;
        this.selectMonth = this.currentMonth;
        let date = 1;
        for (let i = 0; i < 5; i++) {
            const row = document.createElement("tr");
            row.classList.add('calendar__row');
            const loop = function (j) {
                if (i === 0 && j < firstDay - 1) {
                    const cell = document.createElement("td");
                    cell.classList.add('calendar__cell');
                    row.appendChild(cell);
                } else {
                    const cell = document.createElement("td");
                    cell.classList.add('calendar__cell');
                    if (date === thisOne.today.getDate() && thisOne.selectYear === thisOne.today.getFullYear() && thisOne.selectMonth === thisOne.today.getMonth()) {
                        cell.innerHTML = date;
                        cell.classList.add('calendar__day');
                        cell.classList.add('calendar__today');
                        cell.classList.add('calendar__day_selected');
                    } else if (date < thisOne.daysInMonth(thisOne.selectMonth, thisOne.selectYear)) {
                        cell.innerHTML = date;
                        cell.classList.add('calendar__day');
                    } else {
                        cell.classList.add('calendar__day');
                    }

                    const idOne = date < 10 ? '0' + date : date;
                    cell.setAttribute('id', idOne);

                    cell.addEventListener('click', function (e) {
                        _this.select(idOne);
                    });
                    row.appendChild(cell);
                    date++;
                }
            };
            const thisOne = this;

            for (let j = 0; j < 7; j++) {
                const stateOne = loop(j);
                if (stateOne === "break") {
                    break;
                }
            }
            tbl.appendChild(row);
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
        const els = document.querySelectorAll('.calendar__day_selected');
        for (var i = 0; i < els.length; i++) {
            els[i].classList.remove('calendar__day_selected');
        }
        const x = document.getElementById(id);
        x.classList.add('calendar__day_selected');

        const selected = document.querySelector('.calendar__day_selected');
        const number = document.querySelector('.calendar__date');
        number.innerHTML = selected.innerHTML;
    };

    Calendar.prototype.daysInMonth = function (iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    };

    return Calendar;

}());
new Calendar('calendar');