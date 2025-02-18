// NAME: Dalton Ken D. Cadsawan         DATE: 02/18/2025
// NICKNAME: Dal                        SECTION: C-1L

// FUNCTIONS
function validatePassword(pass, retyped){
    const passLen = 8;
    //Condition 1: passwords must be at least 8 in length
    if (pass.length < passLen || retyped.length < passLen){
        console.log("ERROR: Password should at least have 8 characters.");
        return false;
    }
    //Condition 2: passwords must match
    if (pass === retyped){
        //Condition 3: at least 1 number, 1 uppercase, and 1 lowercase
        if (checkPassword(pass) == true && checkPassword(retyped) == true){
            console.log("UPDATE: Passwords are at least 8 characters.");
            console.log("UPDATE: Passwords match!");
            console.log("UPDATE: Password accepted!");
            return true;
        }
    } else {
        console.log("ERROR: Password invalid. Try again.");
        return false;
    }
    

}

//HELPER FUNCTION for Condition 3
function checkPassword(input){
    const newinput = input.split(""); // turn string into an array
    const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    if (newinput.some(char => upperCase.includes(char))){
        //check if it has lowercase letters
        if (newinput.some(char => lowerCase.includes(char))){
            //check if it has numbers
            if(newinput.some(char => numbers.includes(char))){
                return true;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
    
}

// Function for reversing password
reversePassword(pass){
    
}


// Main Program


validatePassword("He34", "Hello1234");
// Reverse Password
reversePassword("Hello1234");