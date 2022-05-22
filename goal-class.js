"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goal = void 0;
class Goal {
    constructor(scorer, minute, team, currentResult) {
        this.scorer = scorer;
        this.minute = minute;
        this.team = team;
        this.currentResult = currentResult;
    }
    getScorer() {
        return this.scorer;
    }
    setScorer(value) {
        this.scorer = value;
    }
    getMinute() {
        return this.minute;
    }
    setMinute(value) {
        this.minute = value;
    }
    getTeam() {
        return this.team;
    }
    setTeam(value) {
        this.team = value;
    }
    getCurrentResult() {
        return this.currentResult;
    }
    setCurrentResult(value) {
        this.currentResult = value;
    }
    generateRandomGoal() {
        return this;
    }
}
exports.Goal = Goal;
