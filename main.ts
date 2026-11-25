// One Line, One Laugh — entry program.
//
// The entry is a single original one-liner. This program holds the line,
// checks it against the competition's gate (1-200 characters, not only
// whitespace), and writes it to /output/entry.txt for the judge.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my AI assistant to tell me a joke, so it reported me to HR for creating a hostile work environment — apparently I'm the toxic one here.";

function validate(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry line must not be blank");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (line.length > 200) {
    throw new Error(`entry line is ${line.length} characters, over the 200 cap`);
  }
}

function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
}

main();
