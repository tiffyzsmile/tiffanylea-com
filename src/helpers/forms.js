// format to send to AWS 'yyyy-mm-dd'
export const formatDateForAWS = date => {
  return date.toISOString().slice(0, 10);
};

// format to send to datepicker Date object
export const formatDateFromAWS = date => {
  // extra space is intentional or it will be 1 day off
  return new Date(`${date} `);
};

export default {
  formatDateForAWS,
  formatDateFromAWS
};
