import { ErrorRepository } from "../errorRepository";

describe('Tests for the ErrorRepository class', () => {
    
    test('Error from Map', () => {
        const repository = new ErrorRepository();
        expect(repository.translate(400)).toBe('The server could not understand the request due to invalid syntax');
    })

    test('unknown error', () => {
        const repository = new ErrorRepository();
        expect(() => repository.translate(410)).toThrow('Unknown error');
    })
})
