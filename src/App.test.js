import { total } from './App';
import { add } from './add';

jest.mock('./add', () => ({
    add: jest.fn(() => 25),
}))

// integration test, 
// test of things that work together
test('testing total function', () => {
    expect(total(5,20)).toBe("$25");
    expect(add).toHaveBeenCalledTimes(1);
    add.mockImplementation(() => 30);
    expect(total(5,25)).toBe("$30");
    expect(add).toHaveBeenCalledTimes(2);
});