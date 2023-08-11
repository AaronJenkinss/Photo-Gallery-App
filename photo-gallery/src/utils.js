export const styleConcat = (...args) => {
    return args.reduce((i, j) => {
        return i + ' ' + j;
    });
}