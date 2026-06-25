#!/usr/bin/env node
'use strict';

// ai-product-starter — installs the planning skill into the current project so
// ANY AI assistant (Cursor, Copilot, Gemini, Codex, Claude, …) can use it.
// Zero dependencies; run via: npx ai-product-starter init

const fs = require('fs');
const path = require('path');

const PKG_ROOT = path.join(__dirname, '..');
const SKILL_SRC = path.join(PKG_ROOT, 'skills', 'ai-product-starter');
const CWD = process.cwd();
const SKILL_DEST = path.join(CWD, '.ai-product-starter', 'skill');

const POINTER =
  'When the user is starting or planning a **NEW** project (a new app, product, MVP, ' +
  'tool, library, or startup) — or asks to "set it up properly", draft a roadmap / ' +
  'spec / architecture / backlog, or "plan before coding" — read and follow ' +
  '`.ai-product-starter/skill/SKILL.md` and do what it says. It interviews the user ' +
  'step by step and produces a tailored plan (and, for developers, a working repo). ' +
  "It's for product people as much as engineers. Do not use it for routine changes " +
  'inside an existing, already-planned codebase.';

const MARKER = '<!-- ai-product-starter -->';

function copySkill() {
  fs.mkdirSync(path.dirname(SKILL_DEST), { recursive: true });
  fs.rmSync(SKILL_DEST, { recursive: true, force: true });
  fs.cpSync(SKILL_SRC, SKILL_DEST, { recursive: true });
}

// Append a markdown pointer block to an entry file, idempotently.
function wireMarkdown(file, headerIfNew) {
  let content = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
  if (content.includes(MARKER)) return false;
  const block = `\n${MARKER}\n## AI Product Starter\n\n${POINTER}\n`;
  const head = content ? content.replace(/\s*$/, '\n') : (headerIfNew ? headerIfNew + '\n' : '');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, head + block);
  return true;
}

// Cursor rule files need YAML frontmatter at the very top.
function wireCursor(file) {
  if (fs.existsSync(file)) return false;
  const body =
    '---\n' +
    'description: Plan a new project before coding — interview, roadmap, spec, timeline, budget, backlog\n' +
    'alwaysApply: false\n' +
    '---\n\n' +
    POINTER + '\n';
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, body);
  return true;
}

function init(opts) {
  console.log('Installing AI Product Starter…');
  copySkill();
  console.log('  ✓ skill → .ai-product-starter/skill/');

  const tool = opts.tool;
  const all = opts.all || !tool; // default: wire the universal AGENTS.md
  const wired = [];

  // AGENTS.md is read by most coding agents — always wire it.
  if (wireMarkdown(path.join(CWD, 'AGENTS.md'), '# AGENTS.md')) wired.push('AGENTS.md');

  const want = (t) => all || tool === t;
  if (want('claude') && wireMarkdown(path.join(CWD, 'CLAUDE.md'), '# CLAUDE.md')) wired.push('CLAUDE.md');
  if (want('gemini') && wireMarkdown(path.join(CWD, 'GEMINI.md'), '# GEMINI.md')) wired.push('GEMINI.md');
  if (want('copilot') && wireMarkdown(path.join(CWD, '.github', 'copilot-instructions.md'), '# Copilot instructions')) wired.push('.github/copilot-instructions.md');
  if (want('cursor') && wireCursor(path.join(CWD, '.cursor', 'rules', 'ai-product-starter.mdc'))) wired.push('.cursor/rules/ai-product-starter.mdc');

  console.log(wired.length ? '  ✓ wired: ' + wired.join(', ') : '  ✓ entry files already wired');
  console.log(
    '\nDone. Now tell your AI assistant:\n\n' +
    '  "I\'ve got an idea for <your project> — help me plan it."\n\n' +
    'It will interview you and write your plan.\n' +
    'Docs: https://github.com/bosznrt/ai-product-starter\n'
  );
}

function help() {
  console.log(
    '\nai-product-starter — give your AI assistant the skill to plan a new project before coding.\n\n' +
    'Usage:\n' +
    '  npx ai-product-starter init            install + wire entry files for common tools\n' +
    '                                         (AGENTS.md, CLAUDE.md, GEMINI.md, Copilot, Cursor)\n' +
    '  npx ai-product-starter init --tool cursor|copilot|gemini|claude   wire just one (+ AGENTS.md)\n' +
    '  npx ai-product-starter help\n\n' +
    'Works straight from GitHub before it is published to npm:\n' +
    '  npx github:bosznrt/ai-product-starter init\n\n' +
    'After install, tell your assistant: "help me plan my new project".\n'
  );
}

const argv = process.argv.slice(2);
const cmd = argv[0] || 'init';
const opts = { all: argv.includes('--all'), tool: null };
const ti = argv.indexOf('--tool');
if (ti !== -1 && argv[ti + 1]) opts.tool = argv[ti + 1];

switch (cmd) {
  case 'init':
    init(opts);
    break;
  case 'help':
  case '-h':
  case '--help':
    help();
    break;
  default:
    console.error('Unknown command: ' + cmd);
    help();
    process.exit(1);
}
