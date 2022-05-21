import { IObserver } from "./observer-interface";

interface ISubject{
    registerObserver(): void
    deleteObserver(): void
    notifyObservers(): void
}