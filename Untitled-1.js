// Write your function here:

const howOld = (age, year) => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    
    const yearDifference = year - currentYear
    const newAge = age + yearDifference
    
    if (newAge > age) {
      return `You will be ${newAge} in the year ${year}`
    }
    else if (newAge < 0) {
      return `The year ${year} was ${-newAge} years before you were born`
    }
    else {
     return `You were ${newAge} in the year ${year}`
    }
    }
    
    
    
    // Once your function is written, write function calls to test your code!
    
    console.log(howOld(userinputday, userinputyear)
    
