// Please implement your solution in this file
import rocketData from "../fixtures/payload.json"

const prepareData = () => {
    const rocketResult = rocketData.sort(sortByLaunchDate).filter(item => item.launch_year ==='2018' 
    && String(item.rocket.second_stage.payloads.map(customer => customer.customers).flat()).match(/NASA/))
    .map(rockets => {
        return {
            flight_number: rockets.flight_number,
            mission_name: rockets.mission_name,
            payloads_count: rockets.rocket.second_stage.payloads.length
          }
    })
    return rocketResult.sort(sortByPayloadCount)
}

function sortByLaunchDate(a, b) {
  if (a.launch_date_utc < b.launch_date_utc) {
      return 1;
  }
  if (a.launch_date_utc > b.launch_date_utc) {
      return -1;
  }
  return 0;
}

function sortByPayloadCount(a, b) {
  if (a.payloads_count < b.payloads_count) {
      return 1;
  }
  if (a.payloads_count > b.payloads_count) {
      return -1;
  }
  return 0;
}

const renderData = () => {
    const outputRocketArray = JSON.stringify(prepareData(), null, 2);
    document.getElementById("out").innerHTML = outputRocketArray;
}

module.exports = {
  prepareData: prepareData,
  renderData: renderData
};
