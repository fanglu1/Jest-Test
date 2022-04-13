import { player1 } from "../rps";
import { hands } from "../rps";
import { getHand } from "../rps";
import {expect, jest, test} from '@jest/globals';
// "toBe()"
test("Player 1's name is Kobe", () => {
    expect(player1.name).toBe('Kobe')
})

// "toHaveLength()"
test("how many hands can be played?", () => {
    expect(hands).toHaveLength(3)
})

// "toBeTruthy()"
test("there is 3 possible hands to play", () => {
    expect(hands).toBeTruthy()
})

toHaveBeenCalled()
test("rock is a hand", () => {
    const hand = jest.fn();
    getHand(hand, 'rock');
    expect(hand).not.toHaveBeenCalled()
})

toHaveReturned()
test("getHand returns a hand", () => {
    const hand = jest.fn(() => true)
    hand();
    expect(hand).toHaveReturned();
})