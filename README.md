<h1 align="center">Welcome to @treasure-chess/chess-achievements 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@treasure-chess/chess-achievements" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@treasure-chess/chess-achievements.svg">
  </a>
  <a href="https://twitter.com/niftychess" target="_blank">
    <img alt="Twitter: niftychess" src="https://img.shields.io/twitter/follow/niftychess.svg?style=social" />
  </a>
</p>

> Calculate achievements for a chess game.

## Install

```sh
yarn add @treasure-chess/chess-achievements

npm i @treasure-chess/chess-achievements
```

## Usage

> Note: only the "Standard" game rule variant is supported.

#### Arguments:

- `pgn` - pocket game notation for the game.
- `playerColor` - Either "white" or "black".

```js
import achievementsCalculator from "@treasure-chess/chess-achievements";

const { opening, achievements, score } = achievementsCalculator(
  pgn,
  playerColor
);
```

#### Returns:

- `opening` - See `/eco-codes.json` for the full list.
- `achievements` - Top 3 achievements earned by `playerColor`.
- `score` - Sum of points for the top 3 achievements earned by `playerColor`.

## Achievements and Tested Sample PGNs

| Achievements                                       | Example PGN | Color |
| -------------------------------------------------- | :---------: | :---: |
| Win a game                                         |     11      | Black |
| Play a game                                        |      8      | White |
| Win a game against opponent rated 750+             |      7      | Black |
| Play a game against opponent rated 750+            |     10      | White |
| Win a game against opponent rated 1500+            |      9      | Black |
| Play a game against opponent rated 1500+           |      6      | Black |
| Play a game against opponent rated 2000+           |     22      | White |
| Win a game against opponent rated 2000+            |     12      | Black |
| Play a game against opponent rated 2250+           |      2      | Black |
| Win a game against opponent rated 2250+            |      2      | White |
| Mate with a bishop                                 |     24      | Black |
| Mate with a knight                                 |      6      | White |
| Mate with a pawn                                   |     20      | White |
| Complete a game with more than 100 moves           |     23      | White |
| Complete a game with more than 150 moves           |     16      | White |
| Complete a game with more than 250 moves           |     15      | White |
| Win with checkmate in less than 10 moves           |     13      | Black |
| Win with checkmate in <5 moves                     |     14      | White |
| Win with checkmate in 2 moves                      |     12      | Black |
| Draw with a higher rated player                    |      3      | White |
| Queen side castle                                  |      3      | White |
| Under-promote to a knight                          |     17      | Black |
| Under-promote to a bishop                          |     18      | White |
| En Passant                                         |      5      | Black |
| Checkmate with an En Passant                       |      9      | Black |
| Draw when opponent has a queen, without one        |      8      | Black |
| Draw by repetition                                 |      3      | White |
| Defeat a higher rated player                       |     19      | White |
| Put opponent in check                              |      2      | White |
| Capture <4 pawns                                   |      3      | White |
| Capture all pawns                                  |     15      | White |
| Capture all knights and bishops without losing any |     24      | Black |
| Move king >20 times                                |      5      | White |
| Capture all pawns without losing any               |     21      | Black |

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Please adhere the rToken project community [code of conduct](https://github.com/rtoken-project/rtoken-monorepo/blob/master/code-of-conduct.md).

Add achievements, in order, to the list in `index.js`. Run tests with the command:

```sh
npm run test
```

## Show your support

Give a ⭐️ if this project helped you!

## Contributors ✨

👤 **Treasure Chess Community <maintainers@niftychess.com>**

- Website: https://niftychess.com
  - Twitter: [@https:\/\/twitter.com\/niftychess](https://twitter.com/https://twitter.com/niftychess)
  - GitHub: [@Treasure-Chess](https://github.com/Treasure-Chess)

## 📝 License

Copyright © 2021 [Treasure Chess <maintainers@niftychess.com>](https://github.com/Treasure-Chess).<br />
This project is [MIT](https://github.com/Treasure-Chess/chess-achievements/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
