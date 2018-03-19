const units = {
    // tslint:disable-next-line:no-empty
    0: { is: 'component', config: { type: 'x' }, x () {} },
    // tslint:disable-next-line:no-empty
    1: { is: 'plugin', config: { type: 'x' }, x () {} },
    // tslint:disable-next-line:no-empty
    2: { is: 'middleware', config: { type: 'x' }, x () {} },
    // tslint:disable-next-line:no-empty
    3: { is: 'service', config: { name: 'x' }, x () {} },
};

// tslint:disable-next-line:no-empty
const requireAll = jest.fn().mockReturnValue(units);

requireAll.__units__ = units;

module.exports = requireAll;
