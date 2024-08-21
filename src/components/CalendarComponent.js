// CalendarComponent.js
import React from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns';
import '../styles/calendarComponent.css';

const CalendarComponent = () => {
    const renderHeader = () => {
        const dateFormat = 'MMMM yyyy';
        const today = new Date();

        return (
            <div className="header">
                <div className="current-month">
                    {format(today, dateFormat)}
                </div>
            </div>
        );
    };

    const renderDays = () => {
        const dateFormat = 'EEEE';
        const days = [];

        let startDate = startOfWeek(new Date());

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="day-name" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="days-row">{days}</div>;
    };

    const renderCells = () => {
        const monthStart = startOfMonth(new Date());
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = 'd';
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = '';

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                days.push(
                    <div className={`day-cell ${format(day, 'M') !== format(monthStart, 'M') ? 'disabled' : ''}`} key={day}>
                        <span className="day-number">{formattedDate}</span>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="days-row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }

        return <div className="calendar-body">{rows}</div>;
    };

    return (
        <div className="calendar-container">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    );
};

export default CalendarComponent;
