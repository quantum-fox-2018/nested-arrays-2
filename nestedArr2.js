var roaster = [
    ['Number', 'Name','Position','Points per Game'],
    [12,'Joe Schmo','Center',[14,32,7,0,23]],
    [9,'Ms. Buckets','Point Guard',[19,0,11,22,0]],
    [31,'Harvey Kay','Shooting Guard',[0,30,16,0,25]],
    [7,'Sally Talls','Power Forward',[18,29,26,31,19]],
    [22,'MK. DiBoux','Small Forward',[11,0,23,17,0]],
    ];
    
  function convert_roaster_format(roaster){
    var result = [];
    for(var i =1; i < roaster.length; i++){
      var obj = {};
        for(var k =0; k < roaster[0].length; k++){
          obj[roaster[0][k]] = roaster [i][k]; 
        }      
      result.push(obj);
    }
    return result;
  }
  
  
  console.log(convert_roaster_format(roaster));
  var object_roaster = convert_roaster_format(roaster);
  
  console.log(object_roaster[2]);
  console.log(object_roaster[0]['Name'] == 'Joe Schmo');