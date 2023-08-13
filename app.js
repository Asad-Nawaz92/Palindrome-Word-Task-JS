var userInp = prompt("Enter a word")

var check = ""

for (var i = userInp.length - 1; i >= 0; i--) {
    check = check + userInp[i]
}

if (userInp === check) {
    document.write(userInp + " is a Palindrome word")
}
else {
    document.write(userInp + " is not a Palindrome word")
}