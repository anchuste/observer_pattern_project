"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreBoardEstadioUnico = void 0;
class ScoreBoardEstadioUnico {
    update(goal) {
        this.display(goal);
    }
    display(goal) {
        console.log("*********************************");
        console.log("Estadio Único Madre de Ciudades");
        console.log("*********************************");
        console.log("¡¡¡Gooooooooooooool!!!");
        console.log("Marcó el " + goal.getTeam());
        console.log("Gol de " + goal.getScorer() + " en el minuto " + goal.getMinute());
        console.log("El resultado actual es de " + goal.getCurrentResult() + " a favor del " + goal.getTeam());
    }
    suscribe(subject) {
        subject.registerObserver(this);
    }
}
exports.ScoreBoardEstadioUnico = ScoreBoardEstadioUnico;
