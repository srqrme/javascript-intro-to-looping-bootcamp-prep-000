function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i===1) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
<<<<<<< HEAD

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())
=======
  
  do {
    array = array.slice(1)
  } while ([array.length > 0 && maybeTrue()])
>>>>>>> e91cc9d45b05489358a6b02164f5ffeb534ae406

  return array
}
