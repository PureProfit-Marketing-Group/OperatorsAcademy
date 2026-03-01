#!/bin/bash
set -e

# Operators Academy — Clu Mission Control Installer
# https://operators-academy.vercel.app/mission-control
#
# Usage: curl -fsSL https://operators-academy.vercel.app/claude-setup/install-mission-control.sh | bash

REPO_URL="https://github.com/ehoyos007/clu-mission-control.git"
INSTALL_DIR="$HOME/.local/share/clu-mission-control"

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
  echo -e "${CYAN}${BOLD}  Clu Mission Control${NC}"
  echo -e "${DIM}  Web-based Claude Code Dashboard${NC}"
  echo -e "${DIM}  ─────────────────────────────────────${NC}"
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

print_error() {
  echo -e "  ${RED}  x${NC} ${1}"
}

TOTAL_STEPS=3

print_header

# ── Step 1: Check prerequisites ──────────────────────────────────────

print_step 1 "Checking prerequisites"

if ! command -v git &> /dev/null; then
  print_error "git is required but not installed."
  exit 1
fi
print_success "git found"

if ! command -v node &> /dev/null; then
  echo ""
  print_error "Node.js is required but not installed."
  echo ""
  echo -e "  ${BOLD}Install Node.js 18+:${NC}"
  echo -e "  ${DIM}macOS:${NC}   brew install node"
  echo -e "  ${DIM}Linux:${NC}   https://nodejs.org/en/download/"
  echo -e "  ${DIM}nvm:${NC}     nvm install 18"
  echo ""
  exit 1
fi

NODE_VERSION=$(node --version | sed 's/v//')
NODE_MAJOR=$(echo "$NODE_VERSION" | cut -d. -f1)
if [ "$NODE_MAJOR" -lt 18 ]; then
  print_error "Node.js 18+ is required (found v${NODE_VERSION})"
  echo -e "  ${DIM}Upgrade:${NC} brew upgrade node ${DIM}or${NC} nvm install 18"
  exit 1
fi
print_success "Node.js v${NODE_VERSION} found"

if ! command -v pnpm &> /dev/null; then
  echo ""
  print_error "pnpm is required but not installed."
  echo ""
  echo -e "  ${BOLD}Install pnpm:${NC}"
  echo -e "  ${CYAN}npm install -g pnpm${NC}"
  echo -e "  ${DIM}or: https://pnpm.io/installation${NC}"
  echo ""
  exit 1
fi
print_success "pnpm found"

# ── Step 2: Clone or update repository ───────────────────────────────

print_step 2 "Fetching Clu Mission Control"

if [ -d "$INSTALL_DIR/.git" ]; then
  print_skip "Already installed — pulling latest"
  cd "$INSTALL_DIR"
  git pull --quiet origin main 2>/dev/null || git pull --quiet
  print_success "Updated to latest version"
else
  mkdir -p "$(dirname "$INSTALL_DIR")"
  git clone --quiet "$REPO_URL" "$INSTALL_DIR"
  print_success "Cloned to ~/.local/share/clu-mission-control/"
fi

# ── Step 3: Install dependencies ─────────────────────────────────────

print_step 3 "Installing dependencies"

cd "$INSTALL_DIR"
pnpm install --silent 2>&1

print_success "Dependencies installed"

# ── Done ─────────────────────────────────────────────────────────────

echo ""
echo -e "  ${GREEN}${BOLD}Installation complete.${NC}"
echo ""
echo -e "  ${BOLD}What was installed:${NC}"
echo -e "  ${DIM}├─${NC} source code        ${DIM}~/.local/share/clu-mission-control/${NC}"
echo -e "  ${DIM}└─${NC} node_modules       ${DIM}~/.local/share/clu-mission-control/node_modules/${NC}"
echo ""
echo -e "  ${BOLD}Quick start:${NC}"
echo -e "  ${DIM}1.${NC} ${CYAN}cd ~/.local/share/clu-mission-control${NC}"
echo -e "  ${DIM}2.${NC} ${CYAN}pnpm dev${NC}"
echo -e "  ${DIM}3.${NC} Open ${CYAN}http://localhost:5173${NC} in your browser"
echo ""
echo -e "  ${BOLD}Or run from anywhere:${NC}"
echo -e "  ${CYAN}cd ~/.local/share/clu-mission-control && pnpm dev${NC}"
echo ""
echo -e "  ${BOLD}To update later:${NC}"
echo -e "  ${CYAN}cd ~/.local/share/clu-mission-control && git pull && pnpm install${NC}"
echo ""
echo -e "  ${DIM}Learn more: https://operators-academy.vercel.app/mission-control${NC}"
echo ""
