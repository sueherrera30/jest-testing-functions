import { add } from './add';

// unit test
// it only tests one thing.

test('add', () => {
    expect(add(1,2)).toBe(3);
    //expect(add).toHaveBeenCalledTimes(1)
    //expect(add).toBeCalledWith(1,2)
    expect(add(5,2)).toBe(7)
});