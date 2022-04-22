// Import stylesheets
import './style.css';

// Esempio di codice TypeScript che mostra il suo funzionamento!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Work</h1>`;

// Scrivere di seguito qual'è il comando per compilare un file TS

// Creare una variabile foo che possa contenere qualsiasi tipo come Annotation

// Creare una variabile bar che sia di tipo numero

// Creare una variabile obj che sia di tipo oggetto

// Creare un variabile teams tipizzato come array di sole stringhe

// Creare una variabile obj di tipo Union Type che possa avere solo numeri e valori booleani

// Creare una funzione foo(obj) il cui obj sia di tipo numero, stringa, booleano e un array di stringhe inoltre al suo interno
// verificare il tipo di oggetto passato ed eseguire un console log del tipo passato

// Creare una costante promise che stampi 'test promise' se okay altrimenti il stampi in console il messaggio di errore

// Creare una classe Persona che abbia nome e cognome come tipo stinga ed età come tipo number, inoltre creare una variabile
// person che instanzi l'oggetto appena creato e passi i valori del tuo nome, cognome ed età

// Preso l'oggetto precedente person se volessimo aggiungere la seguente funzione come Decorator cosa dobbiamo fare
function Logger(constructor: Function) {
  console.log('Logging....');
}

// Creare una funzione sum che al suo interni abbia n1 e n2 come number e abbia una function cb come callbacks che ritorni come
// void il valore della somma, successivamente stampare il risultato a video, si prega di usare le arrow function