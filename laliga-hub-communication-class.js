"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaligaHubCommunication = void 0;
const goal_generator_class_1 = require("./goal-generator-class");
const goal_class_1 = require("./goal-class");
class LaligaHubCommunication {
    // default constructor
    constructor() {
        this.observersList = [];
    }
    registerObserver(observer) {
        if (!this.observersList.some(observerInList => observerInList
            === observer)) {
            this.observersList.push(observer);
        }
        else {
            throw new Error("The observer cannot be inserted. It already exists in the list.");
        }
    }
    deleteObserver(observer) {
        throw new Error("Method not implemented.");
    }
    notifyObservers() {
        throw new Error("Method not implemented.");
    }
    goalReceivedAtTheHub() {
        let mercObj = new goal_generator_class_1.GoalGeneratorRandom(new goal_class_1.Goal()).generateRandomGoal();
        console.log(mercObj);
    }
}
exports.LaligaHubCommunication = LaligaHubCommunication;
