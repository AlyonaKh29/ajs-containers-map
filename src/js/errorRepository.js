export class ErrorRepository{
    constructor() {
        this.errors = new Map([
            [ 400, 'The server could not understand the request due to invalid syntax' ],
            [ 401, 'There are not enough valid credentials for the target resource' ],
            [ 403, 'You have been denied access to the requested resource' ],
            [ 404, 'The server is unable to locate the requested resource' ],
        ]);
    }

    translate(code) {
        if (!this.errors.has(code)) {
            throw new Error('Unknown error');
        }
        return this.errors.get(code);
    }
}
