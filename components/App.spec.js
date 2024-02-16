import { duplicateCards } from './App.js';
import { webs } from "../data/webdev/webdev.js";

describe('duplicateCards', () => {
  it('should render without crashing', () => {
    const miArreglo = ["a", "e", "i", "o", "u"]
    const duplicateCard = duplicateCards(miArreglo); // [a, e, i, o, u, a, e, i o, u]
    expect(duplicateCard).toEqual(["a", "e", "i", "o", "u","a", "e", "i", "o", "u"]);
  });
  it('should render without crashing', () => {
    const webdevs = webs.items;
    const duplicateCard = duplicateCards(webdevs); // [...]
    expect(duplicateCard).toEqual(webdevs.concat(webdevs));
  });
});