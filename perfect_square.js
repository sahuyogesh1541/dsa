var isPerfectSquare = function(num) {
  let i = 1

    while (i > 0) {
        if ((i * i) == num) {
            return true
        } 
        else if ((i * i) > num) {
            return false
        }

        i++
    }
};
