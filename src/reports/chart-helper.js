export const customizedAxisTick = (props) => {
  const { x, y, payload } = props; // "stroke" is argument as well
  let { dx, dy } = 0;
  let textAnchor = "middle";
  let verticalAnchor = "middle";

  if (props.className.includes("xAxis")) {
    dy = 16;
    verticalAnchor = "end";
  } else if (props.className.includes("yAxis")) {
    dx = -8;
    textAnchor = "end";
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dx={dx}
        dy={dy}
        textAnchor={textAnchor}
        vertical-anchor={verticalAnchor}
        transform="translate(0 3.5)"
        fill="#FFF"
        style={{ fontSize: "1.0rem" }}
      >
        {payload.value}
      </text>
    </g>
  );
};

let data = [{
  clientid: 1234,
  countryid: 'il',
  date: '2020-07-25',
  whatelse: 7
},
{
  clientid: 3456,
  countryid: 'ca',
  date: '2022-06-09',
  whatelse: 7
},
{
  clientid: 1234,
  countryid: 'ukr',
  date: '2020-01-25',
  whatelse: 6
},
{
  clientid: 1111,
  countryid: 'il',
  date: '2022-06-09',
  whatelse: 4
},
{
  clientid: 9999,
  countryid: 'il',
  date: '2022-06-09',
  whatelse: 7
},]

// key list of data
// the same >>>>> let dataKeys = ['clientid', 'countryid', 'date', 'whatelse']
//get object's keys in the data


//get uniq data
// let uniqs = (obj) => {
//   let key = Object.keys(data[0]);
//   let map = new Map(); // map of uniqs

//   for (let i of key) { // keys names
//     // filling Set (by category)
//     let uniqData = new Set();
//     for (let j of obj) {
//       uniqData.add(j[i]);
//       map.set(i, uniqData)   // i - key name,  uniqData - uniq set
//     }
//   }

//   return map;
// }

// how to work
// let res = uniqs(data);


// for (let entries of res) {
//   console.log(entries)
// } 
