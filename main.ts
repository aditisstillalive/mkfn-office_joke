import { mkdirSync, writeFileSync } from "node:fs";

// The entry: written to /output/entry.txt.
const ENTRY = "The office printer has jammed on every resignation letter I've tried to print. It's the only one here who wants me to stay.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
