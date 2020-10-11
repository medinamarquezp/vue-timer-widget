const toTimeFormat = {};

const timeFormat = value => {
  return value < 10 ? `0${value}` : value;
};

toTimeFormat.install = Vue => {
  Vue.filter("toTimeFormat", function(value) {
    return timeFormat(value);
  });
};

export { toTimeFormat as default, timeFormat };
