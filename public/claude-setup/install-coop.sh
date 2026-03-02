#!/bin/bash
set -e

# Operators Academy — Claude Co-Op Installer
# https://operators-academy.vercel.app/tools/coop
#
# Usage: curl -fsSL https://operators-academy.vercel.app/claude-setup/install-coop.sh | bash

REPO_URL="https://github.com/ehoyos007/claude-coop.git"
INSTALL_DIR="$HOME/.local/share/claude-coop"
BIN_DIR="$HOME/.local/bin"

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
  echo -e "${GREEN}${BOLD}  Claude Co-Op${NC}"
  echo -e "${DIM}  Multiplayer Plugin for Claude Code${NC}"
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

TOTAL_STEPS=5

print_header

# ── Step 1: Check prerequisites ──────────────────────────────────────

print_step 1 "Checking prerequisites"

if ! command -v go &> /dev/null; then
  echo ""
  print_error "Go is required but not installed."
  echo ""
  echo -e "  ${BOLD}Install Go 1.23+:${NC}"
  echo -e "  ${DIM}macOS:${NC}   brew install go"
  echo -e "  ${DIM}Linux:${NC}   https://go.dev/dl/"
  echo ""
  exit 1
fi

GO_VERSION=$(go version | grep -oE '[0-9]+\.[0-9]+' | head -1)
GO_MAJOR=$(echo "$GO_VERSION" | cut -d. -f1)
GO_MINOR=$(echo "$GO_VERSION" | cut -d. -f2)
if [ "$GO_MAJOR" -lt 1 ] || ([ "$GO_MAJOR" -eq 1 ] && [ "$GO_MINOR" -lt 23 ]); then
  print_error "Go 1.23+ is required (found go${GO_VERSION})"
  echo -e "  ${DIM}Upgrade:${NC} brew upgrade go"
  exit 1
fi
print_success "Go ${GO_VERSION} found"

if ! command -v git &> /dev/null; then
  print_error "git is required but not installed."
  exit 1
fi
print_success "git found"

if ! command -v curl &> /dev/null; then
  print_error "curl is required but not installed."
  exit 1
fi
print_success "curl found"

# ── Step 2: Clone or update repository ───────────────────────────────

print_step 2 "Fetching Claude Co-Op"

if [ -d "$INSTALL_DIR/.git" ]; then
  print_skip "Already installed — pulling latest"
  cd "$INSTALL_DIR"
  git pull --quiet origin main 2>/dev/null || git pull --quiet
  print_success "Updated to latest version"
else
  mkdir -p "$(dirname "$INSTALL_DIR")"
  git clone --quiet "$REPO_URL" "$INSTALL_DIR"
  print_success "Cloned to ~/.local/share/claude-coop/"
fi

# ── Step 3: Build the binary ─────────────────────────────────────────

print_step 3 "Building claude-coop binary"

cd "$INSTALL_DIR"
go build -o claude-coop . 2>&1
print_success "Binary built successfully"

# ── Step 4: Install binary to PATH ───────────────────────────────────

print_step 4 "Installing binary"

mkdir -p "$BIN_DIR"
cp "$INSTALL_DIR/claude-coop" "$BIN_DIR/claude-coop"
chmod +x "$BIN_DIR/claude-coop"
print_success "Installed to ~/.local/bin/claude-coop"

# Check if ~/.local/bin is in PATH
if ! echo "$PATH" | tr ':' '\n' | grep -q "$BIN_DIR"; then
  print_warn "~/.local/bin is not in your PATH"
  echo ""
  echo -e "  ${BOLD}Add to your shell profile:${NC}"
  echo -e "  ${CYAN}export PATH=\"\$HOME/.local/bin:\$PATH\"${NC}"
  echo ""
fi

# ── Step 5: Configure Supabase ───────────────────────────────────────

print_step 5 "Configuring Supabase connection"

if [ -n "$SUPABASE_URL" ] && [ -n "$SUPABASE_ANON_KEY" ]; then
  print_success "Supabase credentials found in environment"
  COOP_SUPABASE_URL="$SUPABASE_URL"
  COOP_SUPABASE_KEY="$SUPABASE_ANON_KEY"
else
  echo ""
  echo -e "  ${BOLD}Supabase project required for real-time sync.${NC}"
  echo -e "  ${DIM}Create a free project at https://supabase.com${NC}"
  echo ""
  read -p "  Supabase URL (https://xxx.supabase.co): " COOP_SUPABASE_URL
  read -p "  Supabase anon key: " COOP_SUPABASE_KEY

  if [ -z "$COOP_SUPABASE_URL" ] || [ -z "$COOP_SUPABASE_KEY" ]; then
    print_warn "Skipping Supabase config — run 'claude-coop init' later to configure"
    SKIP_INIT=true
  fi
fi

if [ "$SKIP_INIT" != "true" ] && [ -n "$COOP_SUPABASE_URL" ] && [ -n "$COOP_SUPABASE_KEY" ]; then
  # Store credentials for the init command
  export COOP_SUPABASE_URL
  export COOP_SUPABASE_KEY
  print_success "Supabase credentials saved"
fi

# ── Done ─────────────────────────────────────────────────────────────

echo ""
echo -e "  ${GREEN}${BOLD}Installation complete.${NC}"
echo ""
echo -e "  ${BOLD}What was installed:${NC}"
echo -e "  ${DIM}├─${NC} source code        ${DIM}~/.local/share/claude-coop/${NC}"
echo -e "  ${DIM}├─${NC} binary             ${DIM}~/.local/bin/claude-coop${NC}"
echo -e "  ${DIM}└─${NC} 10 MCP tools       ${DIM}Real-time multiplayer for Claude Code${NC}"
echo ""
echo -e "  ${BOLD}Quick start:${NC}"
echo -e "  ${DIM}1.${NC} ${CYAN}cd your-project/${NC}"
echo -e "  ${DIM}2.${NC} ${CYAN}claude-coop init${NC}             ${DIM}# Create .coop/ config${NC}"
echo -e "  ${DIM}3.${NC} ${CYAN}claude-coop join --name dev1${NC}  ${DIM}# Start a session${NC}"
echo -e "  ${DIM}4.${NC} Open Claude Code — co-op tools are available automatically"
echo ""
echo -e "  ${BOLD}In Claude Code, your teammates can:${NC}"
echo -e "  ${DIM}•${NC} See who's working on what via ${CYAN}coop_list_peers${NC}"
echo -e "  ${DIM}•${NC} Claim tasks from a shared queue via ${CYAN}coop_claim_task${NC}"
echo -e "  ${DIM}•${NC} Broadcast updates via ${CYAN}coop_announce${NC}"
echo ""
echo -e "  ${BOLD}To update later:${NC}"
echo -e "  ${CYAN}cd ~/.local/share/claude-coop && git pull && go build -o claude-coop . && cp claude-coop ~/.local/bin/${NC}"
echo ""
echo -e "  ${DIM}Learn more: https://operators-academy.vercel.app/tools/coop${NC}"
echo ""
