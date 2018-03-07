'use strict'

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format (nestedArray) {
  let bigWrapArr = [];
  for(let i=1; i<nestedArray.length; i++){
    let objPlayer = {}
    objPlayer.number= nestedArray[i][0];
    objPlayer.name = nestedArray[i][1];
    objPlayer.position = nestedArray[i][2];
    objPlayer.pointsPerGame = nestedArray[i][3]
    bigWrapArr.push(objPlayer);
  }

  return bigWrapArr;
}

let object_roster = convert_roster_format(roster)
// console.log(object_roster)
console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]['name'] == 'Joe Schmo') // outputs true

module.exports = {
  convert_roster_format
}
