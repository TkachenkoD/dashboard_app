import { demodata } from './demoData';

// const SERVER_URL = 'http://localhost:5000';
const list = async (signal) => {
  try {
    // let response = await fetch(`${SERVER_URL}/api/reports/`, {
    // let response = await fetch('http://*.**.**.**:3000/api/reports/', {
    let response = await fetch('http://3.84.53.46:3000/api/reports/', {
      method: 'GET',
      signal: signal,
    })
    return await response.json()

  } catch (err) {
    console.log(err)
    console.log("TEST: demo data loaded")
    return demodata;
  }
}


export {
  list,
}