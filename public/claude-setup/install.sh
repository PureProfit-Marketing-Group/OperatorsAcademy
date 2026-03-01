#!/bin/bash
set -e

# Operators Academy — Claude Code Workflow Installer
# https://operators-academy.vercel.app/install
#
# Usage: curl -fsSL https://operators-academy.vercel.app/claude-setup/install.sh | bash

BASE_URL="https://operators-academy.vercel.app/claude-setup"
CLAUDE_DIR="$HOME/.claude"
AGENTS_DIR="$CLAUDE_DIR/agents"
BACKUP_DIR="$CLAUDE_DIR/backups/pre-install-$(date +%Y%m%d-%H%M%S)"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
DIM='\033[2m'
BOLD='\033[1m'
NC='\033[0m'

print_header() {
  echo ""
  echo -e "${PURPLE}${BOLD}  Operators Academy${NC}"
  echo -e "${DIM}  Claude Code Workflow Installer${NC}"
  echo -e "${DIM}  ─────────────────────────────────${NC}"
  echo ""
}

print_step() {
  echo -e "  ${BLUE}[${1}/${TOTAL_STEPS}]${NC} ${2}"
}

print_success() {
  echo -e "  ${GREEN}  +${NC} ${1}"
}

print_skip() {
  echo -e "  ${YELLOW}  ~${NC} ${1}"
}

print_warn() {
  echo -e "  ${YELLOW}  !${NC} ${1}"
}

print_done() {
  echo ""
  echo -e "  ${GREEN}${BOLD}Installation complete.${NC}"
  echo ""
}

TOTAL_STEPS=6

print_header

# ── Step 1: Check prerequisites ──────────────────────────────────────

print_step 1 "Checking prerequisites"

if ! command -v curl &> /dev/null; then
  echo -e "  ${RED}Error: curl is required but not installed.${NC}"
  exit 1
fi
print_success "curl found"

if ! command -v jq &> /dev/null; then
  print_warn "jq not found — status line will not work without it"
  print_warn "Install with: brew install jq (macOS) or apt install jq (Linux)"
  JQ_MISSING=true
else
  print_success "jq found"
fi

# ── Step 2: Create directory structure ───────────────────────────────

print_step 2 "Setting up directories"

mkdir -p "$CLAUDE_DIR" "$AGENTS_DIR"
print_success "~/.claude/"
print_success "~/.claude/agents/"

# ── Step 3: Backup existing config ───────────────────────────────────

print_step 3 "Backing up existing config"

BACKED_UP=false

if [ -f "$CLAUDE_DIR/CLAUDE.md" ]; then
  mkdir -p "$BACKUP_DIR"
  cp "$CLAUDE_DIR/CLAUDE.md" "$BACKUP_DIR/CLAUDE.md"
  print_success "CLAUDE.md backed up"
  BACKED_UP=true
fi

if [ -f "$CLAUDE_DIR/settings.json" ]; then
  mkdir -p "$BACKUP_DIR"
  cp "$CLAUDE_DIR/settings.json" "$BACKUP_DIR/settings.json"
  print_success "settings.json backed up"
  BACKED_UP=true
fi

if [ -f "$CLAUDE_DIR/statusline-command.sh" ]; then
  mkdir -p "$BACKUP_DIR"
  cp "$CLAUDE_DIR/statusline-command.sh" "$BACKUP_DIR/statusline-command.sh"
  print_success "statusline-command.sh backed up"
  BACKED_UP=true
fi

# Back up any existing agent files
if ls "$AGENTS_DIR"/*.md &> /dev/null 2>&1; then
  mkdir -p "$BACKUP_DIR/agents"
  cp "$AGENTS_DIR"/*.md "$BACKUP_DIR/agents/" 2>/dev/null
  print_success "Existing agents backed up"
  BACKED_UP=true
fi

if [ "$BACKED_UP" = true ]; then
  print_success "Backup saved to: ~/.claude/backups/"
else
  print_skip "No existing config to back up (fresh install)"
fi

# ── Step 4: Download config files ────────────────────────────────────

print_step 4 "Installing workflow files"

# Download CLAUDE.md
curl -fsSL "$BASE_URL/CLAUDE.md" -o "$CLAUDE_DIR/CLAUDE.md"
print_success "CLAUDE.md — Documentation system + trigger phrases"

# Download status line script
curl -fsSL "$BASE_URL/statusline-command.sh" -o "$CLAUDE_DIR/statusline-command.sh"
chmod +x "$CLAUDE_DIR/statusline-command.sh"
print_success "statusline-command.sh — Context bar (model, git, usage)"

# Download settings template (only if no existing settings.json)
if [ ! -f "$CLAUDE_DIR/settings.json" ]; then
  curl -fsSL "$BASE_URL/settings-template.json" -o "$CLAUDE_DIR/settings.json"
  print_success "settings.json — Base configuration"
else
  print_skip "settings.json already exists (preserved)"
fi

# ── Step 5: Download agents ──────────────────────────────────────────

print_step 5 "Installing agents"

AGENTS=(
  "backend-architect"
  "test-runner"
  "test-writer-fixer"
  "git-commit"
  "qa-orchestrator"
  "logger"
  "debugger"
  "feature-tester"
)

for agent in "${AGENTS[@]}"; do
  curl -fsSL "$BASE_URL/agents/${agent}.md" -o "$AGENTS_DIR/${agent}.md"
  print_success "${agent}"
done

# ── Step 6: Download skills ───────────────────────────────────────────

print_step 6 "Installing skills"

SKILLS_DIR="$CLAUDE_DIR/skills"

SKILLS=(
  "google-ads-research"
)

for skill in "${SKILLS[@]}"; do
  mkdir -p "$SKILLS_DIR/${skill}"
  curl -fsSL "$BASE_URL/skills/${skill}/SKILL.md" -o "$SKILLS_DIR/${skill}/SKILL.md"
  print_success "${skill}"
done

# ── Done ─────────────────────────────────────────────────────────────

print_done

echo -e "  ${BOLD}What was installed:${NC}"
echo -e "  ${DIM}├─${NC} CLAUDE.md          ${DIM}Global instructions (5-file doc system)${NC}"
echo -e "  ${DIM}├─${NC} statusline         ${DIM}Terminal status bar (model + context + git)${NC}"
echo -e "  ${DIM}├─${NC} settings.json      ${DIM}Base configuration with status line${NC}"
echo -e "  ${DIM}├─${NC} 8 agents           ${DIM}QA, testing, git, backend, debugging${NC}"
echo -e "  ${DIM}└─${NC} 1 skill            ${DIM}Google Ads competitor research${NC}"
echo ""

echo -e "  ${BOLD}Quick start:${NC}"
echo -e "  ${DIM}1.${NC} Open any project in Claude Code"
echo -e "  ${DIM}2.${NC} Say ${CYAN}\"initialize project\"${NC} to create doc files"
echo -e "  ${DIM}3.${NC} Say ${CYAN}\"let's continue\"${NC} at the start of each session"
echo -e "  ${DIM}4.${NC} Say ${CYAN}\"wrap up\"${NC} when you're done"
echo ""

echo -e "  ${DIM}Learn more: https://operators-academy.vercel.app/claude-code-guide${NC}"
echo ""
