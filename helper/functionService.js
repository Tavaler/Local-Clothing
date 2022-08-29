import {DateTime} from 'luxon';
import {default as statusOrderData} from './json/OrderStatus.json';

var monthNamesThai = [
  'มกราคม',
  'กุมภาพันธ์',
  'มีนาคม',
  'เมษายน',
  'พฤษภาคม',
  'มิถุนายน',
  'กรกฎาคม',
  'สิงหาคม',
  'กันยายน',
  'ตุลาคม',
  'พฤษจิกายน',
  'ธันวาคม',
];

var dayNames = [
  'วันอาทิตย์ที่',
  'วันจันทร์ที่',
  'วันอังคารที่',
  'วันพุทธที่',
  'วันพฤหัสบดีที่',
  'วันศุกร์ที่',
  'วันเสาร์ที่',
];

var monthNamesEng = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

var dayNamesEng = [
  'Sunday',
  'Monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

function toThaiDateString(date) {
  let monthNames = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม.',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ];

  let year = date.getFullYear() + 543;
  let month = monthNames[date.getMonth()];
  let numOfDay = date.getDate();

  let hour = (date.getHours() - 7).toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');

  return `${numOfDay} ${month} ${year} ` + `${hour}:${minutes}`;
}

function toDateFormat(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let numOfDay = date.getDate();

  let hour = (date.getHours() - 7).toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');

  return (
    `${numOfDay}-${month < 10 && '0'}${month}-${year} ` + `${hour}:${minutes}`
  );
}

export const DateTH02 = date => toDateFormat(new Date(date));
export const DateTH03 = date => toThaiDateString(new Date(date));

export const Dateformat = date =>
  Intl.DateTimeFormat('th-TH', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(Date.parse(new Date(date)));

export const DateTH = date =>
  Intl.DateTimeFormat('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(Date.parse(new Date(date)));

export const DateDayTH = date =>
  Intl.DateTimeFormat('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  }).format(Date.parse(new Date(date)));

export const IntMoney = int => {
  var money = new Intl.NumberFormat('th-TH');
  return money.format(int);
};

export const ScrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

export const OrderStatusFilter = status =>
  statusOrderData.filter(a => a.id === status)[0].NameTH;

export function timeSince(date) {
  date = DateTime.fromISO(date);
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' ปีที่แล้ว';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' เดือนที่แล้ว';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' วันที่แล้ว';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' ชั่วโมงที่แล้ว';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' นาทีที่แล้ว';
  }
  return Math.floor(seconds) + ' วินาทีที่แล้ว';
}
