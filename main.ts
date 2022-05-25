import { LaligaHubCommunication } from "./laliga-hub-communication-subject-class";
import { ScoreBoardEstadioUnico } from "./scoreboard-estadio-unico-observer-class";
import { ScoreBoardLaCeramica } from "./scoreboard-la-ceramica-observer-class";

let laligaHubCommunication = new LaligaHubCommunication();
let estadioCeramica = new ScoreBoardLaCeramica();
let estadioUnico = new ScoreBoardEstadioUnico();

estadioCeramica.suscribe(laligaHubCommunication);
laligaHubCommunication.goalReceivedAtTheHub();
estadioUnico.suscribe(laligaHubCommunication);
laligaHubCommunication.goalReceivedAtTheHub();
