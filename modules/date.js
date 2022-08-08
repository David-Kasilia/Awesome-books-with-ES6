import { DateTime } from '../luxon.js';

export const displayDate = document.getElementById('dateTime');
export const today = DateTime.local();
export const newDate = today.set();
