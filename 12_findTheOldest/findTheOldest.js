const findTheOldest = (arr) => {
    return oldestArray = arr.sort(
        (a, b) => {
            let result = 0;
            let thisYear = new Date();
            if ('yearOfDeath' in a && 'yearOfDeath' in b) {
                const lastGuy = a.yearOfDeath - a.yearOfBirth;
                const nextGuy = b.yearOfDeath - b.yearOfBirth;
                result = lastGuy > nextGuy ? -1 : 1;
            } else if ('yearOfDeath' in a && !('yearOfDeath' in b)) {
                const lastGuy = a.yearOfDeath - a.yearOfBirth;
                const nextGuy = thisYear.getFullYear() - b.yearOfBirth;
                result = lastGuy > nextGuy ? -1 : 1;
            }else if (!('yearOfDeath' in a) && 'yearOfDeath' in b) {
                const lastGuy = thisYear.getFullYear() - a.yearOfBirth;
                const nextGuy = b.yearOfDeath - b.yearOfBirth;
                result = lastGuy > nextGuy ? -1 : 1;
            }else if (!('yearOfDeath' in a) && !('yearOfDeath' in b)) {
                const lastGuy = thisYear.getFullYear() - a.yearOfBirth;
                const nextGuy = thisYear.getFullYear() - b.yearOfBirth;
                result = lastGuy > nextGuy ? -1 : 1;
            }
            return result;
        }
    )[0];
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

const people2 = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]
// Do not edit below this line
module.exports = findTheOldest;
console.log(findTheOldest(people2))