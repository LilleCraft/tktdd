# Tennis Kata introducing algebric data Types Driven Design

_This Kata is an adaptation of [Mark Seeman's serie of articles about property-based testing](http://blog.ploeh.dk/2016/02/10/types-properties-software/). Most of his article's exemples are in F#. I highly recommand the reading of his blog if you're interested by functional programming._

## About this repository

The kata aims to be less language specific as possible. This project agregate a submodule for each programming language implementation. If you want to implement the kata in a new language, feel free to suggest a new one by creating an issue.

This repository use [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

How clone it :

```bash
git clone --recurse-submodules git@github.com:LilleCraft/tktdd.git 
```

## About type systems

[Hindley–Milner type systems](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system) implemented in ML languages such as ReasonML, OCaml, Haskell or F#, offers more safety from static typing alone.

With the algebraic data types available, you can design your types so that illegal states are unrepresentable. You can see this as "free" tests for your application.

We will illustrate how use it by the [Tennis Kata](http://codingdojo.org/kata/Tennis/).

## Tennis

A tennis match consists of multiple sets that again are played as several games, in the kata, you only have to implement the scoring system for a single game:

- Each player can have either of these points in one game: Love, 15, 30, 40.
- If you have 40 and you win the ball, you win the game. There are, however, special rules.
- If both have 40, the players are deuce.
- If the game is in deuce, the winner of a ball will have advantage and game ball.
- If the player with advantage wins the ball, (s)he wins the game.
- If the player without advantage wins, they are back at deuce.

This problem is easy enough that it's fun to play with, but difficult enough that it's fun to play with.
<br/>(∩ ｀-´)⊃━☆ﾟ.\*･｡ﾟ
