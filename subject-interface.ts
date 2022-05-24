import { Goal } from "./goal-class";
import { IObserver } from "./observer-interface";

export interface ISubject {
    registerObserver(observer: IObserver): void
    deleteObserver(observer: IObserver): void
    notifyObservers(goal: Goal): void
}