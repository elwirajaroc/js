//zadanie 1
function combine(operation, array1, array2) {
    if (array1.length !== array2.length) {
        throw new Error("Obie tablice muszą być tej samej długości.");
    }

    const result = [];
    for (let i = 0; i < array1.length; i++) {
        result.push(operation(array1[i], array2[i]));
    }

    return result;
}

// Przykład użycia:
const suma = (a, b) => a + b;
const stworzPunkt = (x, y) => ({x, y});
const array1 = [4, 5, 6];
const array2 = [10, 20, 30];


const wynik = combine(suma, array1, array2);
const tablicaWynik = combine(stworzPunkt, array1, array2);
console.log(wynik); // Wyświetli: [14, 25, 36]
console.log(tablicaWynik);

//zadanie 2
function skarbonka(imie, stan=0) {
    console.log(`${imie} set ${stan}`);

    return function (kwota) {
        if(kwota==undefined) {
            console.log(`${imie} ma ${stan}`);
            return stan;
        } else {
            stan+=kwota;
            console.log(`${imie} set ${stan}`);
        }
    };
}
//przyklad uzycia
const s1 = skarbonka("Piotr", 100);
s1(20);
const ile1 = s1();

const s2 = skarbonka("Anna");
s2(50);
const ile2 = s2();

//zadanie 3
const listaStudentow = [
    { imię: "Piotr", nazwisko: "Nowak", punkty: 63 },
    { imię: "Tomasz", nazwisko: "Kowalski", punkty: 88 },
    { imię: "Julia", nazwisko: "Bagińska", punkty: 75 },
    { imię: "Anna", nazwisko: "Kowalczyk", punkty: 92 },
    { imię: "Marta", nazwisko: "Wójcik", punkty: 67 },
];

// 1. Oblicz średnią liczbę punktów
const srednia = listaStudentow.reduce((suma, student) => suma + student.punkty, 0)/listaStudentow.length;
console.log("Średnia liczba punktów: ", srednia);

// 2. Imiona i nazwiska osób, które zdobyły więcej niż średnia
const powyzejSredniej = listaStudentow
    .filter(student => student.punkty>srednia)
    .map(student => `${student.imię} ${student.nazwisko}`);
console.log("Osoby z wynikiem powyżej średniej: ", powyzejSredniej);

//3. Imiona i nazwiska trzech osób z największą liczbą punktów
const top3 = listaStudentow
    .sort((a, b) => b.punkty - a.punkty)
    .slice(0, 3)
    .map(student => `${student.imię} ${student.nazwisko}`);
console.log("Trzy osoby z największą ilością punktów: ", top3);

//4. Lista nazwisk z ocenami posortowana alfabetycznie
const oceny = listaStudentow.map(student => {
    if (student.punkty >= 90) return {nazwisko: student.nazwisko, ocena: "bdb"};
    if (student.punkty >= 80) return {nazwisko: student.nazwisko, ocena: "db+"};
    if (student.punkty >= 70) return {nazwisko: student.nazwisko, ocena: "db"};
    if (student.punkty >= 60) return {nazwisko: student.nazwisko, ocena: "dst+"};
    if (student.punkty >= 50) return {nazwisko: student.nazwisko, ocena: "dst"};
    return {nazwisko: student.nazwisko, ocena: "ndst"};
});

const posortowaneNazwiskaZOcenami = oceny
    .sort((a, b) => a.nazwisko.localeCompare(b.nazwisko))
    .map(student => `${student.nazwisko} - ${student.ocena}`);
console.log("Posortowane nazwiska z ocenami: ", posortowaneNazwiskaZOcenami);

// 5. Liczba osób zdobywających dany stopień
const statystykiOcen = listaStudentow.reduce(
    (statystyki, student) => {
        if (student.punkty >= 90) statystyki.bdb++;
        else if (student.punkty >= 80) statystyki.dbp++;
        else if (student.punkty >= 70) statystyki.db++;
        else if (student.punkty >= 60) statystyki.dstp++;
        else if (student.punkty >= 50) statystyki.dst++;
        else statystyki.ndst++;
        return statystyki;
    },
    { bdb: 0, dbp: 0, db: 0, dstp: 0, dst: 0, ndst: 0 }
);

console.log("Liczba osób zdobywających stopnie:");
console.log("bdb: " + statystykiOcen.bdb);
console.log("db+: " + statystykiOcen.dbp);
console.log("db: " + statystykiOcen.db);
console.log("dst+: " + statystykiOcen.dstp);
console.log("dst: " + statystykiOcen.dst);
console.log("ndst: " + statystykiOcen.ndst);

