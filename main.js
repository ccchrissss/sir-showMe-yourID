function showMe(yourID) {
  
  // let nameSplit = yourID.split(' ')

  // return nameSplit.length > 1 ? false : true  

  let nameParts = yourID.split('-')

  for (let part of nameParts) {
    
    if (part.length < 2 || part[0] !== part[0].toUpperCase()) {
      return false
    }
    
    for (let i = 1; i < part.length; i++) {
      
      if (part[i] !== part[i].toLowerCase()) {
        return false
      }

    }

  }

  return true
}





console.log(showMe('Le Sir'))
console.log(showMe('Pierre-Luc'))



// parameters: yourID   // a string
// return: boolean
// e.g. showMe('Le Sir')
// results in false

// split the string into an array called nameSplit by the space
// if the length of the array is more than 1 return false
// else return true