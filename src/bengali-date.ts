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
            return null;
        }
        if (dayNumber > 6) {
            return null;
        }
        return daysInBengali[dayNumber];
    }

    get bngFullDay() {
        const dayNumber = this.dateTime.getDay();
        if (dayNumber < 0) {
            return null;
        }
        if (dayNumber > 6) {
            return null;
        }
        return daysInBengali[dayNumber] + 'বার';
    }
}
