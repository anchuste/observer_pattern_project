export class Goal {
    private scorer?: string;    
    private minute?: number;
    private team?: string;
    private currentResult?: string;
    
   
    constructor(scorer?: string, minute?: number, team?: string, currentResult?: string) {
      this.scorer = scorer;
      this.minute = minute;
      this.team = team;
      this.currentResult = currentResult;
    }

    public getScorer(): string {
        return this.scorer!;
    }
    public setScorer(value: string) {
        this.scorer = value;
    }

    public getMinute(): number {
        return this.minute!;
    }
    public setMinute(value: number) {
        this.minute = value;
    }

    public getTeam(): string {
        return this.team!;
    }

    public setTeam(value: string) {
     this.team = value;
    }
   
    public getCurrentResult(): string {
        return this.currentResult!;
    }
    
    public setCurrentResult(value: string) {
     this.currentResult = value;
    }

    public generateRandomGoal(){
        return this;
    }
    
  }