"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalGeneratorRandom = void 0;
class GoalGeneratorRandom {
    constructor(goal) {
        this.scorerList = ['Joselu', 'Unal', 'Negredo', 'Benzema', 'Lucas Boyé'];
        this.teamList = ['Real Madrid', 'F.C Barcelona', 'Burgos', 'Unión Adarve', 'Andorra'];
        this.resultList = ['0-4', '3-1', '2-2', '2-6', '4-3'];
        this.goal = goal;
    }
    generateRandomGoal() {
        this.goal.setScorer(this.scorerList[this.randomIntFromInterval(0, this.scorerList.length - 1)]);
        this.goal.setTeam(this.teamList[this.randomIntFromInterval(0, this.teamList.length - 1)]);
        this.goal.setMinute(this.randomIntFromInterval(1, 105));
        this.goal.setCurrentResult(this.resultList[this.randomIntFromInterval(0, this.resultList.length - 1)]);
        return this.goal;
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
exports.GoalGeneratorRandom = GoalGeneratorRandom;
