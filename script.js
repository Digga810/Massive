let names = []

var x = true

for (let i = 0; x == true; i++) {

    let comand = prompt('Введите команду')
    let comands = comand.split(', ')
    if (comands[0] == 'add') {
        names.push({
            name: comands[1]
        })
        comands.pop()
        comands.pop()
    } else if (comands[0] == 'del') {
        names.pop()
        comands.pop()
        comands.pop()
    }
    if (comand == 'stop') {
        var x = false
    }
}
for (const key in names) {
        for (const keys in names[key]) {
            console.log(keys == 'name' ? `Ваше имя ${names[key][keys]}` : '');
        }
    }
