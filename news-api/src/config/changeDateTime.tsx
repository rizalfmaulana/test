export const changeDateTime = (date: string) => {
  let timestamp = new Date(date).getTime();
  let Day = new Date(timestamp).getDate();
  let Month = new Date(timestamp).getMonth() + 1;
  let Year = new Date(timestamp).getFullYear();
  let OurNewDateFormat = `${Day}/${Month}/${Year}`;
  return OurNewDateFormat;
};
