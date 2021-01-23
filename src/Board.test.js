import { render, fireEvent } from '@testing-library/react';
import Board from './Board';


// Task 1
test('should render on each click and alternating X and O', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>); 
    const buttons = board.queryAllByRole('button'); 
    
    expect(buttons[0].innerHTML).toBe(''); 
    fireEvent.click(buttons[0]);
    expect(buttons[0].innerHTML).toBe('X');
    fireEvent.click(buttons[2]);
    expect(buttons[2].innerHTML).toBe('O');

  });

// Task 2
test('should alternate Next Player\'s status', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>); 
    const buttons = board.queryAllByRole('button'); 
    const playerStatus = board.getByText('Next player: X', {exact: false}); 

    expect(playerStatus.innerHTML).toBe('Next player: X');
    fireEvent.click(buttons[0]);
    expect(playerStatus.innerHTML).toBe('Next player: O');
    fireEvent.click(buttons[4]);
    expect(playerStatus.innerHTML).toBe('Next player: X');









});
