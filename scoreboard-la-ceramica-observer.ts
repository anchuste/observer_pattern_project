import { Goal } from "./goal-class";
import { IObserver } from "./observer-interface";

export class ScoreBoardLaCeramica implements IObserver{
    update(goal: Goal): void {
        this.display(goal)
    }
    display(goal: Goal): void {
        console.log("###################");
        console.log("Estadio La Cerámica");
        console.log("###################");
        console.log("¡¡¡Gooooooooooooool!!!");
        console.log("Marcó el " + goal.getTeam());
        console.log("Gol de " + goal.getScorer() + " en el minuto " + goal.getMinute());
        console.log("El resultado actual es de " + goal.getCurrentResult() + " a favor del " + goal.getTeam());
    }
}