<h1 align="center"><img width="600" style="border-radius: 30px;" src="https://github.com/treasure-chess/treasure-chess/blob/main/github-header.png?raw=true"/></h1>
<h1 align="center">Welcome to @treasure-chess/chess-achievements 👋</h1>

<p align="center">
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@treasure-chess/chess-achievements" target="_blank">
  <img alt="Version" src="https://img.shields.io/npm/v/@treasure-chess/chess-achievements.svg">
  </a>
  <a href="https://twitter.com/treasurechess_" target="_blank">
    <img alt="Twitter: treasurechess_" src="https://img.shields.io/twitter/follow/treasurechess_.svg?style=social" />
  </a>
</p>

> Calculate achievements for a chess game.

**Almost all of the code & tooling for Treasure Chess has been open sourced**. We hope you find these resources useful. Happy hacking!

- App tooling using RedwoodJs https://github.com/pi0neerpat/redwood-devops-example
- Code specific to Treasure Chess (smart contracts, achievements, card generation, etc.) is on our organization page: https://github.com/treasure-chess

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
import achievementsCalculator from '@treasure-chess/chess-achievements';

const {
  opening,
  score,
  achievements,
  allAchievements
} = achievementsCalculator(pgn, playerColor);
```

#### Returns:

- `opening` - See `/eco-codes.json` for the full list.
- `score` - Sum of points for the top 3 achievements earned by `playerColor`.
- `achievements` - Top 3 achievements earned by `playerColor`.
- `allAchievements` - All achievements earned by `playerColor`.

## Achievements and Tested Sample PGNs

| number | name               | description                                         | points |
| ------ | ------------------ | --------------------------------------------------- | ------ |
| 0      | n/a                | (empty achievement)                                 | 0      |
| 1      | Player             | Play a game                                         | 1      |
| 2      | 750+ Winner        | Win a game against opponent rated 750+              | 2      |
| 3      | Played 750+        | Play a game against opponent rated 750+             | 1      |
| 4      | 1500+ Winner       | Win a game against opponent rated 1500+             | 3      |
| 5      | Played 1500+       | Play a game against opponent rated 1500+            | 2      |
| 6      | Played 2000+       | Play a game against opponent rated 2000+            | 3      |
| 7      | Big Winner         | Win a game against opponent rated 2000+             | 4      |
| 8      | Strongest Opponent | Play a game against opponent rated 2250+            | 4      |
| 9      | Mythic Winner      | Win a game against opponent rated 2250+             | 5      |
| 10     | Defeat an IM       | Defeat an IM                                        | 4      |
| 11     | Defeat a NM        | Defeat a NM                                         | 3      |
| 12     | Defeat a GM        | Defeat a GM                                         | 5      |
| 13     | Criss Cross        | Mate with a bishop                                  | 4      |
| 14     | Jousting           | Mate with a knight                                  | 4      |
| 15     | Utter Disrespect   | Mate with a pawn                                    | 4      |
| 16     | Triple Digit Club  | Complete a game with more than 100 moves            | 3      |
| 17     | Excessive          | Complete a game with more than 150 moves            | 4      |
| 18     | Ultramarathoners   | Complete a game with more than 250 moves            | 5      |
| 19     | Opening Expert     | Win with checkmate in less than 10 moves            | 2      |
| 20     | Don't Blink        | Win with checkmate in <5 moves                      | 3      |
| 21     | Fool's Mate        | Win with checkmate in 2 moves                       | 5      |
| 22     | Leveled Field      | Draw with a higher rated player                     | 2      |
| 23     | Hello, m'lady      | Queen side castle                                   | 1      |
| 24     | Horse Farmer       | Under-promote to a knight                           | 3      |
| 25     | Holy Promotion     | Under-promote to a bishop                           | 5      |
| 26     | The Sneaky Pawn    | En Passant                                          | 2      |
| 27     | God-Mode Glitch    | Checkmate with an En Passant                        | 5      |
| 28     | Cutting it Close   | Draw when opponent has a queen, without one         | 4      |
| 29     | Déjà Vu            | Draw by repetition                                  | 1      |
| 30     | The Underdog       | Defeat a higher rated player                        | 3      |
| 31     | Checkin' You Out   | Put opponent in check                               | 1      |
| 32     | Pawn Shy           | Capture <4 pawns                                    | 1      |
| 33     | Pawn Shopper       | Capture all pawns                                   | 2      |
| 34     | A Minor Problem    | Capture all knights and bishops without losing any. | 5      |
| 35     | Mr. Marathon Man   | Move king >20 times                                 | 1      |
| 36     | Pawn Hoarder       | Capture all pawns without losing any                | 5      |
| 37     | Winner             | Win a game                                          | 2      |
| 38     | Mad Hatter         | Play a new opening                                  | 3      |
| 39     | No Chanc           | Win a game on time                                  | 1      |
| 40     | Winner             | Win a game with more time than was given at start   | 5      |

### This one is for testing, and verifying the achievements

|     Achievement      |                    Description                     | Example PGN | Color |
| :------------------: | :------------------------------------------------: | :---------: | :---: |
|      Scrub Dub       |                     Win a game                     |     11      | Black |
| Participation Medal  |                    Play a game                     |      8      | White |
|    Semi-Scrub Dub    |       Win a game against opponent rated 750+       |      7      | Black |
| Participation Medal  |      Play a game against opponent rated 750+       |     10      | White |
|     Mediocre Dub     |      Win a game against opponent rated 1500+       |      9      | Black |
| Participation Medal  |      Play a game against opponent rated 1500+      |      6      | Black |
| Participation Medal  |      Play a game against opponent rated 2000+      |     22      | White |
|      Decent Dub      |      Win a game against opponent rated 2000+       |     12      | Black |
| Participation Medal  |      Play a game against opponent rated 2250+      |      2      | Black |
|     Poggers Dub      |      Win a game against opponent rated 2250+       |      2      | White |
|     Criss Cross      |                 Mate with a bishop                 |     24      | Black |
|   Horsey Move in L   |                 Mate with a knight                 |      6      | White |
|   Utter Disrespect   |                  Mate with a pawn                  |     20      | White |
|  Triple Digit Club   |      Complete a game with more than 100 moves      |     23      | White |
|      Excessive       |      Complete a game with more than 150 moves      |     16      | White |
| Nothing Better to Do |      Complete a game with more than 250 moves      |     15      | White |
|    Yeah, I'm Good    |      Win with checkmate in less than 10 moves      |     13      | Black |
|    for real, bro?    |           Win with checkmate in <5 moves           |     14      | White |
|     Fool's Mate      |           Win with checkmate in 2 moves            |     12      | Black |
|    Emotional Dub     |          Draw with a higher rated player           |      3      | White |
|    Hello, m'lady     |                 Queen side castle                  |      3      | White |
|     Horse Farmer     |             Under-promote to a knight              |     17      | Black |
|   Troll Promotion    |             Under-promote to a bishop              |     18      | White |
|  The Game Glitched   |                     En Passant                     |      5      | Black |
|   God-Mode Glitch    |            Checkmate with an En Passant            |      9      | Black |
|   Cutting it Close   |    Draw when opponent has a queen, without one     |      8      | Black |
|       Déjà Vu        |                 Draw by repetition                 |      3      | White |
|   ELO is a Mindset   |            Defeat a higher rated player            |     19      | White |
|   Checkin' You Out   |               Put opponent in check                |      2      | White |
|       Pawn Shy       |                  Capture <4 pawns                  |      3      | White |
|     Pawn Shopper     |                 Capture all pawns                  |     15      | White |
|   A Minor Problem    | Capture all knights and bishops without losing any |     24      | Black |
|   Mr. Marathon Man   |                Move king >20 times                 |      5      | White |
|     Pawn Hoarder     |        Capture all pawns without losing any        |     21      | Black |

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Please adhere the rToken project community [code of conduct](https://github.com/rtoken-project/rtoken-monorepo/blob/master/code-of-conduct.md).

Add achievements, in order, to the list in `index.js`. Run tests with the command:

```sh
npm run test
```

## Show your support

Give a ⭐️ if this project helped you!

## Contributors ✨

👤 **Patrick Gallagher**

- Website: https://patrickgallagher.dev
- Twitter: [@pi0neerpat](https://twitter.com/pi0neerpat)
- GitHub: [@pi0neerpat](https://github.com/pi0neerpat)

👤 **Joseph Schiarizzi**

👤 **Andrew Young**

👤 **Treasure Chess Community <maintainers@niftychess.com>**

- Website: https://treasurechess.com
- Twitter: [@treasurechess\_](https://twitter.com/treasurechess_)
- GitHub: [@Treasure-Chess](https://github.com/Treasure-Chess)

## 📝 License

Copyright © 2022 Nifty Chess, Inc.<br />
This project is [MIT](https://github.com/Treasure-Chess/chess-achievements/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
