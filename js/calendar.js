document.addEventListener('DOMContentLoaded', function () {
    const calendarDates = document.getElementById('calendarDates');
    const prevDayButton = document.getElementById('prevDay');
    const nextDayButton = document.getElementById('nextDay');
    const calendarHeader = document.getElementById('calendarHeader');
    const calendarBody = document.getElementById('calendarBody');
    const calendarFooter = document.getElementById('calendarFooter');
    const currentDateElement = calendarHeader.querySelector('.current-date');

    let today = new Date();
    let selectedDate = today;
    let isCalendarOpen = false;

    const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];

    function formatDate(date) {
        let day = String(date.getDate()).padStart(2, '0');
        let month = months[date.getMonth()];
        let year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }

    function updateHeader(date) {
        currentDateElement.textContent = formatDate(date);
    }

    function renderCalendar(date) {
        updateHeader(date);
        calendarDates.innerHTML = '';
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;

            if (i === date.getDate()) {
                dayDiv.classList.add('selected');
            }

            dayDiv.addEventListener('click', function () {
                document.querySelectorAll('.calendar-dates div').forEach(div => {
                    div.classList.remove('selected');
                });
                dayDiv.classList.add('selected');
                selectedDate = new Date(date.getFullYear(), date.getMonth(), i);
                updateHeader(selectedDate);
            });

            calendarDates.appendChild(dayDiv);
        }
    }

    prevDayButton.addEventListener('click', function () {
        if (isCalendarOpen) {
            // Décrémente le mois si le calendrier est ouvert
            selectedDate.setMonth(selectedDate.getMonth() - 1);
        } else {
            // Décrémente le jour si le calendrier est fermé
            selectedDate.setDate(selectedDate.getDate() - 1);
        }
        renderCalendar(selectedDate);
    });

    nextDayButton.addEventListener('click', function () {
        if (isCalendarOpen) {
            // Incrémente le mois si le calendrier est ouvert
            selectedDate.setMonth(selectedDate.getMonth() + 1);
        } else {
            // Incrémente le jour si le calendrier est fermé
            selectedDate.setDate(selectedDate.getDate() + 1);
        }
        renderCalendar(selectedDate);
    });

    // Ouvre ou ferme le calendrier quand on clique sur la date actuelle
    currentDateElement.addEventListener('click', function () {
        if (isCalendarOpen) {
            calendarBody.style.display = 'none';  // Ferme le calendrier
            calendarFooter.style.display = 'none';
            isCalendarOpen = false; // Calendrier est fermé
        } else {
            calendarBody.style.display = 'block'; // Ouvre le calendrier
            calendarFooter.style.display = 'flex';
            isCalendarOpen = true; // Calendrier est ouvert
        }
    });

    updateHeader(today);
    renderCalendar(today);
});