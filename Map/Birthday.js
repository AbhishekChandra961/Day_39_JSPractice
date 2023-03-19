function generateBirthMonth() {
    // Randomly generate birth month between Jan (1) and Dec (12)
    return Math.floor(Math.random() * 12) + 1;
  }
  
  function generateBirthdays() {
    let birthdays = [];
  
    // Generate 50 birth months and add them to array
    for (let i = 0; i < 50; i++) {
      let birthMonth = generateBirthMonth();
      birthdays.push(birthMonth);
    }
  
    return birthdays;
  }
  
  function findSameMonthBirthdays(birthdays) {
    let sameMonthBirthdays = {};
  
    // Group individuals by birth month
    for (let i = 0; i < birthdays.length; i++) {
      let birthMonth = birthdays[i];
      if (sameMonthBirthdays[birthMonth]) {
        sameMonthBirthdays[birthMonth].push(i + 1);
      } else {
        sameMonthBirthdays[birthMonth] = [i + 1];
      }
    }
  
    return sameMonthBirthdays;
  }
  
  function printSameMonthBirthdays(sameMonthBirthdays) {
    // Print out individuals with same birth month
    for (let month in sameMonthBirthdays) {
      console.log(`Birthdays in month ${month}: ${sameMonthBirthdays[month]}`);
    }
  }
  
  let birthdays = generateBirthdays();
  console.log("Generated birthdays:", birthdays);
  
  let sameMonthBirthdays = findSameMonthBirthdays(birthdays);
  console.log("Same month birthdays:", sameMonthBirthdays);
  
  printSameMonthBirthdays(sameMonthBirthdays);
  