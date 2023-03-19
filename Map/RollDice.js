function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function findMinMax(resultDict) {
    let maxKey = null;
    let minKey = null;
  
    for (let key in resultDict) {
      if (maxKey == null || resultDict[key] > resultDict[maxKey]) {
        maxKey = key;
      }
      if (minKey == null || resultDict[key] < resultDict[minKey]) {
        minKey = key;
      }
    }
  
    return { maxKey, minKey };
  }
  
  function rollAndRecord() {
    let resultDict = {};
  
    while (true) {
      let rollResult = rollDie();
  
      if (resultDict[rollResult]) {
        resultDict[rollResult]++;
      } else {
        resultDict[rollResult] = 1;
      }
  
      if (resultDict[rollResult] == 10) {
        break;
      }
    }
  
    let { maxKey, minKey } = findMinMax(resultDict);
  
    console.log("Results: ", resultDict);
    console.log(`Max number: ${maxKey}, rolled ${resultDict[maxKey]} times`);
    console.log(`Min number: ${minKey}, rolled ${resultDict[minKey]} times`);
  }
  
  rollAndRecord();
  