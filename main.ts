import { LaligaHubCommunication } from "./laliga-hub-communication-class";
import { ScoreBoardLaCeramica } from "./scoreboard-la-ceramica-observer";

let laligaHubCommunication = new LaligaHubCommunication();
let estadioCeramica = new ScoreBoardLaCeramica();
laligaHubCommunication.registerObserver(estadioCeramica);
laligaHubCommunication.goalReceivedAtTheHub();