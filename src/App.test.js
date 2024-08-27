// import { fireEvent, render, screen, within } from "@testing-library/react";
import {availableTimesReducer, initializeTimes, updatedTimes} from "./App";
// import React from "react";

describe("availableTimesReducer", () => {
    const availableTimes = [
        { label: "17:00", value: "17:00" },
        { label: "18:00", value: "18:00" },
        { label: "19:00", value: "19:00" },
        { label: "20:00", value: "20:00" },
        { label: "21:00", value: "21:00" },
        { label: "22:00", value: "22:00" }
      ];
      it('should initialize times with the correct values', () => {
        const action = initializeTimes();
        const newState = availableTimesReducer([], action);
        expect(newState).toEqual(availableTimes);
      });

      it('should return the same available times when updateTimes is called', () => {
        const initialState = availableTimes;
        const action = updatedTimes('2024-08-27');
        const newState = availableTimesReducer(initialState, action);
        expect(newState).toEqual(availableTimes);
      });
})