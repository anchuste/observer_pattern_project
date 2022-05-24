import { Goal } from "./goal-class"

export interface IObserver{
    update(goal: Goal): void
    display(goal: Goal): void
}