import { availableTimesReducer, initializeTimes, updatedTimes, fetchAPI } from "./App";


jest.mock('./App', () => ({
  ...jest.requireActual('./App'),
  fetchAPI: jest.fn(),
}));

describe("availableTimesReducer", () => {
  const mockInitAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockUpdatedAvailableTimes = ['17:00', '18:00', '19:00', '20:00'];

  test('should updates the state with available times from fetchAPI', async () => {      
    const initAction = {type: 'INITIALIZE_TIMES', payload:mockInitAvailableTimes}
    const initialState = [];
    const result = availableTimesReducer(initialState, initAction);
    expect(result).toEqual(mockInitAvailableTimes);
  });

  test('should return all available times when there are no reservations on selected date', async () => {
    const updatedAction = {type: 'UPDATED_TIMES', payload:mockUpdatedAvailableTimes}
    const initialState = [];
    const result = availableTimesReducer(initialState, updatedAction);
    expect(result).toEqual(mockUpdatedAvailableTimes);
  });
});

describe("initialize and updated times", () => {
  const mockReservations = [
    {date: '2024-09-04', time: '18:00'},
    {date: '2024-09-04', time: '19:00'}
  ];

  test('test initializeTimes', async () => {
    fetchAPI.mockReturnValue(['17:00', '17:30','20:30','22:30']);
    const expectedPayload = [
      { label: '17:00', value: '17:00' },
      { label: '17:30', value: '17:30' },
      { label: '20:30', value: '20:30' },
      { label: '22:30', value: '22:30' },
    ];

    const result = initializeTimes();
    expect(result.payload).toEqual(expectedPayload);
  });

  test('test updatedTimes', async () => {
    const selectedDate = '2024-09-04';
    fetchAPI.mockReturnValue(['17:00', '17:30', '19:30','21:00','21:30']);

    const expectedPayload = [
      { label: '17:00', value: '17:00' },
      { label: '17:30', value: '17:30' },
      { label: '19:30', value: '19:30' },
      { label: '21:00', value: '21:00' },
      { label: '21:30', value: '21:30' }
    ];

    const result = updatedTimes(mockReservations,selectedDate);
    expect(result.payload).toEqual(expectedPayload)
  });
});
