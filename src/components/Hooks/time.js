
let today = new Date().toLocaleDateString();
let currentTime = parseInt(Date.now()/(1000*60));
// let stateDailyObject = {...state.DailyObject};
// let dailyObjectTime=stateDailyObject[`${today}`];
// let clickNum = (dailyObjectTime[state.screen.objectProceeding].timeClick)+1;

module.exports={today, currentTime,}
