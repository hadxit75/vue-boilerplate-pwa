export function getCurrentTime(t1) {
  var t = "";


  var yyyy = t1.getFullYear().toString();
  var mm = (t1.getMonth() + 1).toString();
  var dd = t1.getDate().toString();
  var hh = t1.getHours() < 10 ? "0" + t1.getHours() : t1.getHours();
  var min = t1.getMinutes() < 10 ? "0" + t1.getMinutes() : t1.getMinutes();
  var ss = t1.getSeconds() < 10 ? "0" + t1.getSeconds() : t1.getSeconds();

  t =
    yyyy +
    "/" +
    (mm[1] ? mm : "0" + mm[0]) +
    "/" +
    (dd[1] ? dd : "0" + dd[0]) +
    " " +
    hh +
    ":" +
    min +
    ":" +
    ss;

  return t;
}

export function getCurrentDate(val) {
  var t = "";

  var t1 = val;

  var yyyy = t1.getFullYear().toString();
  var mm = (t1.getMonth() + 1).toString();
  var dd = t1.getDate().toString();
  var hh = t1.getHours() < 10 ? "0" + t1.getHours() : t1.getHours();
  var min = t1.getMinutes() < 10 ? "0" + t1.getMinutes() : t1.getMinutes();
  var ss = t1.getSeconds() < 10 ? "0" + t1.getSeconds() : t1.getSeconds();

  t =
    yyyy + "/" + (mm[1] ? mm : "0" + mm[0]) + "/" + (dd[1] ? dd : "0" + dd[0]);

  return t;
}

export function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}
export function getCurrentDay(val) {
  var t = "";

  var t1 = val;

  var yyyy = t1.getFullYear().toString();
  var mm = (t1.getMonth() + 1).toString();
  var dd = t1.getDate().toString();

  t =
    yyyy + "." + (mm[1] ? mm : "0" + mm[0]) + "." + (dd[1] ? dd : "0" + dd[0]);

  return t;
}
