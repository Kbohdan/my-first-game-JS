let name = prompt('Привет как тебя зовут?');

while (name == '' || name == null) {
    name = prompt('Привет как тебя зовут?');
}

alert(name + ', я загадал число от 1 до 100. Попробуй отгодать его за наименьшее количество попыток. После каждой попытки я скажу "мало" , "много" или  "угадал".');

let number = Math.ceil(Math.random() * 100);
let guess = prompt('Какое число я загадал?)');
let numberOfGuesses = 0;

while (guess != number) {

    if (guess > number) {
        guess = prompt('Много, попробуй еще раз!');
        numberOfGuesses = numberOfGuesses + 1; // Почему не работает с ++
    }

    if (guess < number) {
        guess = prompt('Мало, попробуй еще раз');
        numberOfGuesses = numberOfGuesses + 1;
    }

}

alert('Ты угадал, это число, ' + number + '.' + 'Твое число попыток' + numberOfGuesses);