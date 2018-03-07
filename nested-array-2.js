
var roster = [
  ["Number", "Name", "Position", "Points per Game"],
  [12, "Joe Schmo", "Center", [14, 32, 7, 0, 23] ],
  [9, "Ms. Buckets","Point Guard", [19, 0, 11, 22, 0] ],
  [31, "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
  [7, "Sally Talls", "Power Forward", [18, 29, 26, 31, 19] ],
  [22, "MK DiBoux", "Small Forward", [11, 0, 23, 17, 0]]
]

function convert_roster_format(arr){
  let result  = [];

  for(var i = 1; i < arr.length; i++){
    let obj     = {};

    obj.number        = arr[i][0];
    obj.name          = arr[i][1];
    obj.position      = arr[i][2];
    obj.pointsPerGame = arr[i][3];

    result.push(obj);
  }
  return result;
}

var object_roster = convert_roster_format(roster);

console.log(object_roster);
console.log(object_roster[2]);
console.log(object_roster[0]["name"] == "Joe Schmo");
console.log(object_roster[0].name);
