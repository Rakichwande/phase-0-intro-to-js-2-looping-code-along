function writeCards (name, event) {
    let note =[]
    for (let i = 0; i < name.length; i++) {
    console.log (note.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`));
    }
    return note
}

writeCards(["Ada","Brendan","Ali"],"surprise");
function countDown () {
    let i = 0
    while (i <=10) {
        console.log(i)
        i++
    }
}

