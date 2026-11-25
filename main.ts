import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One office joke, written to /output/entry.txt.
const ENTRY =
  "I opened an email with 'Per my last email,' and two colleagues quietly updated their wills.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
