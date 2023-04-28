import {BengaliNumber} from "./bengali-number";

const monthsInBengali = [
    'জানুয়ারী', 'ফেব্রুয়ারী', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
];

const daysInBengali = [
    "রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"
];

export class BengaliDate {
    private dateTime: Date;

    constructor(dateTime: Date = new Date()) {
        this.dateTime = dateTime;
    }

    get bngDate() {
        const date = this.dateTime.getDate();
        return new BengaliNumber(date).bngValue;
    }

    get bngMonthInNumber() {
        const monthNumber = this.dateTime.getMonth() + 1;
        return new BengaliNumber(monthNumber).bngValue;
    }

    get bngMonth() {
        const monthNumber = this.dateTime.getMonth();
        return monthsInBengali[monthNumber];
    }

    get bngFullYear() {
        const fullYear = this.dateTime.getFullYear();
        return new BengaliNumber(fullYear).bngValue;
    }

    get bngYear() {
        const year = this.dateTime.getFullYear();
        return new BengaliNumber(year).bngValue.slice(-2);
    }

    get bngHours() {
        const hours = this.dateTime.getHours();
        return new BengaliNumber(hours).bngValue;
    }

    get bngHoursInTwelveHourFormat() {
        const hours = this.dateTime.getHours() % 12 === 0 ? 12 : this.dateTime.getHours() % 12;
        return new BengaliNumber(hours).bngValue;
    }

    get bngMinutes() {
        const minutes = this.dateTime.getMinutes();
        return new BengaliNumber(minutes).bngValue;
    }

    get bngSeconds() {
        const seconds = this.dateTime.getSeconds();
        return new BengaliNumber(seconds).bngValue;
    }

    get bngTimeName() {
        const hours = this.dateTime.getHours();
        if (hours >= 4 && hours <= 6) {
            return 'ভোর';
        }
        if (hours >= 7 && hours <= 11) {
            return 'সকাল';
        }
        if (hours >= 12 && hours <= 15) {
            return 'দুপুর';
        }
        if (hours >= 16 && hours <= 17) {
            return 'বিকাল';
        }
        if (hours >= 18 && hours <= 19) {
            return 'সন্ধ্যা';
        }
        return 'রাত';
    }

    get bngDay() {
        const dayNumber = this.dateTime.getDay();
        if (dayNumber < 0) {
            return '';
        }
        if (dayNumber > 6) {
            return '';
        }
        return daysInBengali[dayNumber];
    }

    get bngFullDay() {
        const dayNumber = this.dateTime.getDay();
        if (dayNumber < 0) {
            return '';
        }
        if (dayNumber > 6) {
            return '';
        }
        return daysInBengali[dayNumber] + 'বার';
    }

    get engTimeName() {
        if (this.dateTime.getHours() >= 12) {
            return 'PM';
        }
        return 'AM';
    }

    format(pattern = 'date-time') {
        if (pattern === 'date') {
            return `${this.bngDate} ${this.bngMonth}, ${this.bngFullYear}`;
        }

        if (pattern === 'time') {
            return `${this.bngTimeName} ${this.bngHoursInTwelveHourFormat}:${this.bngMinutes}`;
        }

        if (pattern === 'date-time') {
            return `${this.bngDate} ${this.bngMonth}, ${this.bngFullYear} ${this.bngTimeName} ${this.bngHoursInTwelveHourFormat}:${this.bngMinutes}`;
        }

        if (pattern === 'date-day-time') {
            return `${this.bngDate} ${this.bngMonth}, ${this.bngFullYear} ${this.bngFullDay} ${this.bngTimeName} ${this.bngHoursInTwelveHourFormat}:${this.bngMinutes}`;
        }

        pattern = pattern.replace(/YYYY/g, this.bngFullYear);
        pattern = pattern.replace(/YY/g, this.bngYear);
        pattern = pattern.replace(/MMMM/g, this.bngMonth);
        pattern = pattern.replace(/MM/g, this.bngMonthInNumber.padStart(2, '০'));
        pattern = pattern.replace(/M/g, this.bngMonthInNumber);
        pattern = pattern.replace(/DD/g, this.bngDate.padStart(2, '০'));
        pattern = pattern.replace(/D/g, this.bngDate);
        pattern = pattern.replace(/dddd/g, this.bngFullDay);
        pattern = pattern.replace(/dd/g, this.bngDay);
        pattern = pattern.replace(/AAAA/g, this.bngTimeName);
        pattern = pattern.replace(/AA/g, this.engTimeName);
        pattern = pattern.replace(/aa/g, this.engTimeName.toLowerCase());
        pattern = pattern.replace(/hh/g, this.bngHoursInTwelveHourFormat.padStart(2, '০'));
        pattern = pattern.replace(/h/g, this.bngHoursInTwelveHourFormat);
        pattern = pattern.replace(/HH/g, this.bngHours.padStart(2, '০'));
        pattern = pattern.replace(/H/g, this.bngHours);
        pattern = pattern.replace(/mm/g, this.bngMinutes.padStart(2, '০'));
        pattern = pattern.replace(/m/g, this.bngMinutes);
        pattern = pattern.replace(/ss/g, this.bngSeconds.padStart(2, '০'));
        pattern = pattern.replace(/s/g, this.bngSeconds);

        return pattern;
    }
}
