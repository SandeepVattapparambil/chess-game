import React from 'react';
import ReactDOM from 'react-dom';
import ChessBoard from './ChessBoard';
import M from 'materialize-css';
window.M = M;

//simple mock without jest mock
window.Chess = function() {
    return null;
};
window.ChessUtils = {
    FEN: {},
};
window.ChessUtils.FEN.startId = '00';
window.Chessboard = function() {
    return null;
};

const spy = jest.spyOn(console, 'error').mockImplementation();
describe('functionUnderTest', () => {
    it('renders by throwing error', t => {
        const div = document.createElement('div');
        ReactDOM.render(<ChessBoard />, div);
        expect(t).toThrow(TypeError);
        expect(spy).toHaveBeenCalledTimes(1); 
        try {
            functionUnderTest();
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
        }
        ReactDOM.unmountComponentAtNode(div);
    });
});
