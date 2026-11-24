import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The meeting could have been an email, but the email would have needed a meeting to explain why it was an email.";

if (!TEXT.trim() || TEXT.length > 200) throw new Error("entry text out of range");
if (TEXT.includes("\n")) throw new Error("entry must be exactly one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
