const getUniqDate = (data) => {
  //get distinct dates
  let set = new Set();
  data.forEach((i) => {
    let date = new Date(i.creationdate);
    let dateStr = `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`
    set.add(dateStr);
  });

  return set;
};

const getNumbers = (str) => {
  //remove chars, return only numbers
  let regexp = /\d/g;
  let res = str.match(regexp) || [];
  return res.join('');
}

const uniqs = (obj) => {
  // console.log("obj", obj)
  let key = Object.keys(obj[0]);
  let map = new Map(); // map of uniqs

  for (let i of key) { // keys names 
    // filling Set (by category)
    let uniqData = new Set();
    for (let j of obj) {
      uniqData.add(j[i]);
      map.set(i, uniqData);// i - key name,  uniqData - uniq set
    }
  }

  return map;
}

const getChartsData = (data, countriesSet, categoriesSet) => {
  let reportsByWeekday = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  let reportsByCountries = {};
  let reportsByCategories = {};

  //make obj templates
  for (let i of countriesSet) {
    reportsByCountries[i] = 0;
  }
  for (let i of categoriesSet) {
    reportsByCategories[i] = 0;
  }

  //fill obj templates
  for (let i of data) {
    let weekDay = new Date(i.creationdate).getDay()
    reportsByWeekday[weekDay]++
    reportsByCountries[i.countryid]++
    reportsByCategories[i.category]++
  }
  // console.log("obj", obj)
  return {
    reportsByWeekday,
    reportsByCountries,
    reportsByCategories
  };
};

const convertToChartData = (obj) => {
  //prepare 
  let arr = []
  for (let [key, val] of Object.entries(obj)) {
    arr.push({ name: key, value: val })
  }

  return arr;
}

const setWeekdayName = (data) => {
  let names = ["S", "M", "T", "W", "T", "F", "S "];
  for (let i of data) {
    i.name = names[i.name];
  }
  return data;
};

const setCategoriesName = (data, handler) => {
  for (let i of data) {
    i.name = handler(i.name);
  }
  return data;
};

const getExtremumDates = (set) => {
  let extr = {}

  extr.min = Math.min(...set);
  extr.max = Math.max(...set);

  return extr;
}

const getEntriesMaxDate = (maxDate, allDates) => {
  let count = 0;
  maxDate = new Date(maxDate).setHours(0, 0, 0, 0);
  for (let i of allDates) {
    if (i.creationdate >= maxDate) count++;
  }
  return count;
}



export {
  getUniqDate,
  uniqs,
  getChartsData,
  convertToChartData,
  setWeekdayName,
  setCategoriesName,
  getNumbers,
  getExtremumDates,
  getEntriesMaxDate
};