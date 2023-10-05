# Acquistare il biglietto del treno da un form

- chiedere al passeggero i km da percorrere:
    - creare un input in index.html

- chiedere al passeggero l'età

- calcolare il prezzo del biglietto:
    - moltiplicare il numero dei km per la tariffa chilometrica
    - IF il passeggero ha meno di 18 anni:
        - applicare uno sconto del 20%
    - ELSE IF il passeggero ha più di 65 anni:
        - applicare uno sconto del 40%

 



Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
La differenza è che i dati dell’utente li prenderemo da degli input, e calcoleremo il prezzo quando l’utente clicca su un pulsante ‘calcola’
NB.
In questo esercizio NON USATE il tag form !!! input e select metteteli dentro ad un div senza troppe preoccupazioni
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente un input (dove l’utente inserirà il numero di km), una select (con cui l’utente potrà scegliere il tipo di sconto da applicare) e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
Inizialmente la risposta finale (o output) sarà da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Aggiungete anche un input per inserire il nome del passeggero. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
BONUS:
Aggiungete dei controlli: impedite ad un utente di calcolare il prezzo se:
il numero di km è NaN
il numero di km è negativo
non sono stati inseriti il nome del passeggero o il numero di km
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.