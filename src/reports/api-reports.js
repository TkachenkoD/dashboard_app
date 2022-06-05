import { demodata } from './demoData';

// const SERVER_URL = 'http://localhost:5000';
const list = async (signal) => {
  try {
    // let response = await fetch(`${SERVER_URL}/api/reports/`, {
    //   // let response = await fetch('http://*.**.**.**:3000/api/reports/', {
    //   method: 'GET',
    //   signal: signal,
    // })
    // return await response.json()
    return demodata;
  } catch (err) {
    console.log(err)
  }
}


export {
  list,
}