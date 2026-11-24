# Dad Joke Showdown

[![make.fun](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5/badge.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![make.fun rank](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![make.fun reward](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

Entry for the [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty on make.fun ($5 pot).

## The joke

> I told my kids I'm writing a book about stairs. It's a step-by-step guide.

## How it works

`main.ts` (Node 22+, TypeScript run as-is, standard library only) writes the
single dad joke to `/output/entry.txt`. It is deterministic — the same joke on
every run — uses no network and no secrets, and refuses to write anything
outside the 1–200 character gate the sealed scorer enforces.

## Run

```sh
node main.ts
cat /output/entry.txt
```
