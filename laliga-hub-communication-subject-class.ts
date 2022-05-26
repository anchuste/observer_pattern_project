import { ISubject } from "./subject-interface";
import { IObserver} from "./observer-interface"
import { GoalGeneratorRandom } from "./goal-generator-class";
import { Goal } from "./goal-class";

export class LaligaHubCommunication implements ISubject{

    observersList: Array<IObserver> = [];
    
    // default constructor
    constructor() {
        
    }

    public registerObserver(observer: IObserver): void{

        if (!this.observersList.some(observerInList => observerInList === observer)) {
                this.observersList.push(observer);
        }
        else{
            throw new Error("The observer cannot be inserted. It already exists in the list.");
        }
    }

    deleteObserver(observer: IObserver): void {
        const index = this.observersList.indexOf(observer, 0);
        if (index > -1) {
            this.observersList.splice(index, 1);
        }
    }

    notifyObservers(goal: Goal): void {
        this.observersList.forEach((observer) => {
            observer.update(goal);
        });
    }

    goalReceivedAtTheHub(){
        let mercObj = new GoalGeneratorRandom(new Goal()).generateRandomGoal();
        this.notifyObservers(mercObj);
        //console.log(mercObj);
    }
}