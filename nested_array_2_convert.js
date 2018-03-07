'use strict'

let roster = [
  //['Number', 'Name', 'Position', 'Points per Game'],
  ['Number', 'Name', 'Position', 'pointsPerGame'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format (roster) {
  let users = []
  let keylist = roster[0]
  for(let i=1; i < roster.length; i++){
    let user = {}
    // user[keylist[0]] = roster[i][0]
    // user[keylist[1]] = roster[i][1]
    // user[keylist[2]] = roster[i][1]
    // user[keylist[3]] = roster[i][2]
    for(let j=0; j<keylist.length; j++){
      user[keylist[j]] = roster[i][j]
    }
    users.push(user)
  }
  return users
}

let object_roster = convert_roster_format(roster)
console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true

module.exports = {
  convert_roster_format
}
