import { getCurrentServer } from 'constants/config.js'

let icxContractData = [
  {
    "address": "cx0000000000000000000000000000000000000001",
    "name": "GOV"
  }
];

if (getCurrentServer('icx') == 'sejong') {
  icxContractData[0].address = "cx0000000000000000000000000000000000000000";
}

export const icxContract = icxContractData
