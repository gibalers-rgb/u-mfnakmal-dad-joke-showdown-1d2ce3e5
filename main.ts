// Dad Joke Showdown — make.fun entry
// The program writes exactly one dad joke (1-200 chars) to /output/entry.txt.
// No network, no secrets, deterministic: the same joke every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The joke. Dad voice, told at the table: the setup names the subject
// (stairs), and the punchline turns on "step" twice at once —
// a step-by-step guide is both how you write a how-to book
// and literally how you climb stairs. Short, clean, one breath aloud.
const JOKE =
  "I told my kids I'm writing a book about stairs. It's a step-by-step guide.";

const OUT_PATH = "/output/entry.txt";

function main(): void {
  // The sealed scorer gates on 1-200 UTF-8 characters, not only whitespace.
  // Refuse to write anything invalid rather than shipping a broken entry.
  // The joke is pure ASCII, so the code-point count below and the scorer's
  // UTF-8 character count can never disagree.
  if (!/^[\x00-\x7F]*$/.test(JOKE)) {
    throw new Error("joke must be pure ASCII");
  }
  const length = [...JOKE].length;
  if (length < 1 || length > 200) {
    throw new Error(`joke is ${length} characters, must be 1-200`);
  }
  if (JOKE.trim().length === 0) {
    throw new Error("joke is only whitespace");
  }

  mkdirSync("/output", { recursive: true });
  // No trailing newline: the gate counts every character in the file,
  // so the file must hold exactly the joke and nothing else.
  writeFileSync(OUT_PATH, JOKE, "utf8");

  // Verify what actually landed on disk, byte for byte. A run that
  // silently writes the wrong text is worse than a run that fails loud.
  const written = readFileSync(OUT_PATH, "utf8");
  if (written !== JOKE) {
    throw new Error(`wrote ${[...written].length} chars, expected ${length}`);
  }
  console.log(`wrote ${length} characters to ${OUT_PATH}`);
}

main();
