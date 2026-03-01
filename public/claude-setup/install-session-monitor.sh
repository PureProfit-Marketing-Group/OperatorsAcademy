#!/bin/bash
set -e

# Operators Academy — Session Monitor (Go TUI) Installer
# https://operators-academy.vercel.app/session-monitor
#
# Usage: curl -fsSL https://operators-academy.vercel.app/claude-setup/install-session-monitor.sh | bash

REPO_URL="https://github.com/ehoyos007/mission-control.git"
INSTALL_DIR="$HOME/.local/share/mission-control"
BIN_DIR="$HOME/.local/bin"
CONFIG_DIR="$HOME/.config/mission-control"

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
  echo -e "${CYAN}${BOLD}  Session Monitor${NC}"
  echo -e "${DIM}  Go-based TUI Terminal Dashboard${NC}"
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

if ! command -v git &> /dev/null; then
  print_error "git is required but not installed."
  exit 1
fi
print_success "git found"

if ! command -v go &> /dev/null; then
  echo ""
  print_error "Go is required but not installed."
  echo ""
  echo -e "  ${BOLD}Install Go 1.21+:${NC}"
  echo -e "  ${DIM}macOS:${NC}   brew install go"
  echo -e "  ${DIM}Linux:${NC}   https://go.dev/doc/install"
  echo ""
  exit 1
fi

GO_VERSION=$(go version | grep -oE '[0-9]+\.[0-9]+' | head -1)
GO_MAJOR=$(echo "$GO_VERSION" | cut -d. -f1)
GO_MINOR=$(echo "$GO_VERSION" | cut -d. -f2)
if [ "$GO_MAJOR" -lt 1 ] || ([ "$GO_MAJOR" -eq 1 ] && [ "$GO_MINOR" -lt 21 ]); then
  print_error "Go 1.21+ is required (found ${GO_VERSION})"
  echo -e "  ${DIM}Upgrade:${NC} brew upgrade go"
  exit 1
fi
print_success "Go ${GO_VERSION} found"

# ── Step 2: Clone or update repository ───────────────────────────────

print_step 2 "Fetching Session Monitor"

if [ -d "$INSTALL_DIR/.git" ]; then
  print_skip "Already installed — pulling latest"
  cd "$INSTALL_DIR"
  git pull --quiet origin main 2>/dev/null || git pull --quiet
  print_success "Updated to latest version"
else
  mkdir -p "$(dirname "$INSTALL_DIR")"
  git clone --quiet "$REPO_URL" "$INSTALL_DIR"
  print_success "Cloned to ~/.local/share/mission-control/"
fi

# ── Step 3: Build binary ─────────────────────────────────────────────

print_step 3 "Building binary"

cd "$INSTALL_DIR"

if [ -f Makefile ] && grep -q "build" Makefile 2>/dev/null; then
  make build 2>&1
else
  mkdir -p bin
  go build -o bin/mc ./cmd/mc
fi

print_success "Built bin/mc"

# ── Step 4: Install to PATH ──────────────────────────────────────────

print_step 4 "Installing to PATH"

mkdir -p "$BIN_DIR"
cp "$INSTALL_DIR/bin/mc" "$BIN_DIR/mc"
chmod +x "$BIN_DIR/mc"
print_success "Installed mc to ~/.local/bin/"

# Check if ~/.local/bin is in PATH
if ! echo "$PATH" | tr ':' '\n' | grep -q "$BIN_DIR"; then
  echo ""
  print_warn "~/.local/bin is not in your PATH"
  echo ""
  echo -e "  ${BOLD}Add to your shell profile:${NC}"
  echo -e "  ${CYAN}export PATH=\"\$HOME/.local/bin:\$PATH\"${NC}"
  echo ""
  echo -e "  ${DIM}Then restart your terminal or run:${NC}"
  echo -e "  ${CYAN}source ~/.zshrc${NC}  ${DIM}(or ~/.bashrc)${NC}"
  echo ""
fi

# ── Step 5: Create config template ───────────────────────────────────

print_step 5 "Setting up configuration"

if [ -f "$CONFIG_DIR/projects.yaml" ]; then
  print_skip "Config already exists — not overwriting"
else
  mkdir -p "$CONFIG_DIR"
  cat > "$CONFIG_DIR/projects.yaml" << 'YAML'
# Session Monitor — Project Configuration
# Add your projects below. Only name and path are required.
# Other fields enable additional panels (Vercel, Supabase, Sentry).

projects:
  # - name: my-project
  #   path: ~/Projects/my-project
  #   vercel_project_id: prj_xxxxx          # Optional — Deployments panel
  #   supabase_project_ref: abcdef          # Optional — Infrastructure panel
  #   sentry_project_slug: my-project       # Optional — Alerts panel
YAML
  print_success "Created config template at ~/.config/mission-control/projects.yaml"
fi

# ── Done ─────────────────────────────────────────────────────────────

echo ""
echo -e "  ${GREEN}${BOLD}Installation complete.${NC}"
echo ""
echo -e "  ${BOLD}What was installed:${NC}"
echo -e "  ${DIM}├─${NC} source code        ${DIM}~/.local/share/mission-control/${NC}"
echo -e "  ${DIM}├─${NC} binary             ${DIM}~/.local/bin/mc${NC}"
echo -e "  ${DIM}└─${NC} config             ${DIM}~/.config/mission-control/projects.yaml${NC}"
echo ""
echo -e "  ${BOLD}Quick start:${NC}"
echo -e "  ${DIM}1.${NC} Edit your projects: ${CYAN}nano ~/.config/mission-control/projects.yaml${NC}"
echo -e "  ${DIM}2.${NC} Launch the TUI:     ${CYAN}mc${NC}"
echo ""
echo -e "  ${BOLD}To update later:${NC}"
echo -e "  ${CYAN}curl -fsSL https://operators-academy.vercel.app/claude-setup/install-session-monitor.sh | bash${NC}"
echo ""
echo -e "  ${BOLD}To uninstall:${NC}"
echo -e "  ${CYAN}rm ~/.local/bin/mc && rm -rf ~/.local/share/mission-control${NC}"
echo ""
echo -e "  ${DIM}Learn more: https://operators-academy.vercel.app/session-monitor${NC}"
echo ""
