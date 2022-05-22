import { Goal } from "./goal-class";

export class GoalGeneratorRandom {
    private goal: Goal;
    private scorerList = ['Joselu', 'Unal', 'Negredo', 'Benzema', 'Lucas Boyé']
    private teamList = ['Real Madrid', 'F.C Barcelona', 'Burgos', 'Unión Adarve', 'Andorra']
    private resultList = ['0-4', '3-1', '2-2', '2-6', '4-3']   
       
    constructor(goal: Goal) {
      this.goal = goal;
    }

    generateRandomGoal(): Goal{
        this.goal.setScorer(this.scorerList[this.randomIntFromInterval(0, this.scorerList.length-1)]);
        this.goal.setTeam(this.teamList[this.randomIntFromInterval(0, this.teamList.length-1)]);
        this.goal.setMinute(this.randomIntFromInterval(1, 105));
        this.goal.setCurrentResult(this.resultList[this.randomIntFromInterval(0, this.resultList.length-1)]);
        return this.goal;
    }

    randomIntFromInterval(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }