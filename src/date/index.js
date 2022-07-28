// 转换时间
export const formateTime = (data) => {
  const da = data || new Date().getTime();
  const dt = new Date(da);
  const y = dt.getFullYear();
  const m = (`${dt.getMonth() + 1}`).padStart(2, '0');
  const d = (`${dt.getDate()}`).padStart(2, '0');
  const hh = (`${dt.getHours()}`).padStart(2, '0');
  const mm = (`${dt.getMinutes()}`).padStart(2, '0');
  const ss = (`${dt.getSeconds()}`).padStart(2, '0');
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
};
// 转换日期
export const formateDate = (data) => {
  const da = data || new Date().getTime();
  const dt = new Date(da);
  const y = dt.getFullYear();
  const m = (`${dt.getMonth() + 1}`).padStart(2, '0');
  const d = (`${dt.getDate()}`).padStart(2, '0');
  return `${y}-${m}-${d}`;
};
// 秒转换成时分秒
export const calcTimes = (data) => {
  // eslint-disable-next-line radix
  const h = parseInt(data / 3600) > 10 ? parseInt(data / 3600) : `0${parseInt(data / 3600)}`;
  // eslint-disable-next-line radix
  const m = parseInt((data % 3600) / 60) > 10 ? parseInt((data % 3600) / 60) : `0${parseInt((data % 3600) / 60)}`;
  const s = (data % 3600) % 60 > 10 ? (data % 3600) % 60 : `0${(data % 3600) % 60}`;
  return `${h}:${m}:${s}`;
};
// 时分秒转换成秒
export const calcSeconds = (data) => {
  const [h, m, s] = data.split(':');
  return (h * 60 + +m) * 60 + +s;
};