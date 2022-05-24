"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const laliga_hub_communication_class_1 = require("./laliga-hub-communication-class");
const scoreboard_la_ceramica_observer_1 = require("./scoreboard-la-ceramica-observer");
let laligaHubCommunication = new laliga_hub_communication_class_1.LaligaHubCommunication();
let estadioCeramica = new scoreboard_la_ceramica_observer_1.ScoreBoardLaCeramica();
laligaHubCommunication.registerObserver(estadioCeramica);
laligaHubCommunication.goalReceivedAtTheHub();
