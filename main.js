"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const laliga_hub_communication_subject_class_1 = require("./laliga-hub-communication-subject-class");
const scoreboard_estadio_unico_observer_class_1 = require("./scoreboard-estadio-unico-observer-class");
const scoreboard_la_ceramica_observer_class_1 = require("./scoreboard-la-ceramica-observer-class");
let laligaHubCommunication = new laliga_hub_communication_subject_class_1.LaligaHubCommunication();
let estadioCeramica = new scoreboard_la_ceramica_observer_class_1.ScoreBoardLaCeramica();
let estadioUnico = new scoreboard_estadio_unico_observer_class_1.ScoreBoardEstadioUnico();
estadioCeramica.suscribe(laligaHubCommunication);
laligaHubCommunication.goalReceivedAtTheHub();
estadioUnico.suscribe(laligaHubCommunication);
laligaHubCommunication.goalReceivedAtTheHub();
