const firstName = 'John';
const lastName = 'Doe';
const patronymic = 'Smith';
const birthYear = 1990;
const major = 'Информационные технологии';

const result1 = firstName + ' ' + lastName + '\n' +
                patronymic + '\n' +
                'Год рождения: ' + birthYear + '\n' +
                'Направление: ' + major;

const result2 = `${firstName} ${lastName}
${patronymic}
Год рождения: ${birthYear}
Направление: ${major}`;

console.log('1-й способ:');
console.log(result1);

console.log('\n2-й способ:');
console.log(result2);
