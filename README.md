# news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/zxc3017581/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/zxc3017581/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One newspaper front page summarising 18 November 2026's world news, rendered from real reported text with every story checked against two or more sources.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=yrtejwf8&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>

---

# The Day in News — Wednesday 18 November 2026

One image that sums up the world's news of Wednesday 18 November 2026,
built for the make.fun bounty `news-image-20261118`.

## The image

`entry.png` is a 1024 x 1024 newspaper front page: a masthead naming the
day, one lead story, six more stories across regions and fields, a
"by the numbers" strip, and an "also today" line. Every headline and
figure on it was checked against the reporting listed in `SOURCES.md`
before the image was drawn. No event was invented.

The seven stories:

1. **The Gulf (lead)** — U.S. jets struck a Revolutionary Guard missile
   site on Qeshm Island; Iran answered with drone attacks on U.S.
   positions in Bahrain and Kuwait, and an American MQ-9 was shot down
   near the Strait of Hormuz.
2. **Ukraine** — Kyiv struck the Kerch Bridge to Crimea for a second day;
   part of the span fell into the strait.
3. **Diplomacy** — Xi Jinping and Vladimir Putin met in Shenzhen ahead of
   a trilateral summit with Donald Trump on Thursday.
4. **U.S. politics** — Mary Peltola defeated Dan Sullivan in Alaska, giving
   Democrats a projected 56–44 Senate majority.
5. **Health** — The Pan American Health Organization ruled the U.S. has lost
   its measles elimination status, held since 2000; 5,412 cases in 2026.
6. **Africa** — The Ebola outbreak in DR Congo more than doubled in three
   months: 11,000 cases and 5,400 deaths, per the UN.
7. **The Pacific** — Category 5 Cyclone Xavier hit the Northern Cook
   Islands; a 6.0 earthquake struck Papua New Guinea.

## How the image was made

The picture is not a photograph and not an AI-generated image. It is a
page laid out in `news.html` (plain HTML and CSS, paper background,
serif headlines) and rendered to `entry.png` with headless Chromium
through `render.mjs`. Text is real text, so nothing is garbled and
every figure reads exactly as written. Re-rendering needs Playwright
with Chromium installed (`npx playwright install chromium`), then:

```sh
node render.mjs
```

## How the entry runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. It runs with no network. To try it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `entry.png` — the image itself (1024 x 1024, ~184 KiB).
- `news.html` — the page the image was rendered from.
- `render.mjs` — the Playwright script that renders `news.html` to `entry.png`.
- `main.ts` — the entry program: copies `entry.png` to `/output/entry.png`.
- `SOURCES.md` — the reporting behind every story on the page.
- `LICENSE` — MIT.

## Limitations

- The measles ruling was announced by PAHO on Tuesday 17 November and
  was the health story of the 18th's news cycle; it is included as the
  day's news, not as an event of the 18th itself.
- Figures are the ones reported on the day (see `SOURCES.md`); later
  corrections to the running totals are not reflected.
- The image is a summary, not a full account: each story is one headline
  and one or two sentences, as the format requires.
