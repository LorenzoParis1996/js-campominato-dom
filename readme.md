Consegna

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

- una volta creata la griglia di gioco, mi creo una funzione per dei numeri random (che saranno le bombe)
- (dentro function createNewGrid) mi creo un array vuoto e lo itero con un ciclo while per il numero di bombe richieste e gli la condizione in modo che siano numeri random unici (ovvero che in una cella ci sia massimo una bomba)
- mi creo delle nuove classi che andro' ad aggiungere al event listener, in modo modo che quando clicco sulle celle, nel campo siano presenti sia celle active che celle bomb
- creo una variabiale che poi richiamo nella condizione di active (dento l event listener) in cui la sommo per se stessa + 1, in modo da fare un punto per ogni cella active cliccata (che poi verra' mostrato anche nel dom)
- richiamo un elemento dom, che quando si clicca una bomba, appare un messaggio in cui si indica la fine della partita


BONUS:

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;