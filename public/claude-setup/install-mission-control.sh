#!/bin/bash
set -e

# Operators Academy — Mission Control Installer
# https://operators-academy.vercel.app/mission-control
#
# Usage: curl -fsSL https://operators-academy.vercel.app/claude-setup/install-mission-control.sh | bash

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
  echo -e "${CYAN}${BOLD}  Mission Control${NC}"
  echo -e "${DIM}  Multi-session Claude Code Dashboard${NC}"
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
  echo -e "  ${BOLD}Install Go:${NC}"
  echo -e "  ${DIM}macOS:${NC}   brew install go"
  echo -e "  ${DIM}Linux:${NC}   https://go.dev/dl/"
  echo -e "  ${DIM}Windows:${NC} https://go.dev/dl/"
  echo ""
  exit 1
fi

GO_VERSION=$(go version | grep -oP 'go\K[0-9]+\.[0-9]+' 2>/dev/null || go version | sed 's/.*go\([0-9]*\.[0-9]*\).*/\1/')
print_success "Go ${GO_VERSION} found"

# ── Step 2: Clone or update repository ───────────────────────────────

print_step 2 "Fetching Mission Control"

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
mkdir -p bin
go build -o bin/mc ./cmd/mc 2>&1

print_success "Built successfully"

# ── Step 4: Install to PATH ──────────────────────────────────────────

print_step 4 "Installing to PATH"

mkdir -p "$BIN_DIR"
cp bin/mc "$BIN_DIR/mc"
chmod +x "$BIN_DIR/mc"
print_success "Installed mc to ~/.local/bin/"

# Check if ~/.local/bin is in PATH
if ! echo "$PATH" | tr ':' '\n' | grep -q "$HOME/.local/bin"; then
  print_warn "~/.local/bin is not in your PATH"
  echo ""
  echo -e "  ${BOLD}Add to your shell profile:${NC}"

  SHELL_NAME=$(basename "$SHELL")
  case "$SHELL_NAME" in
    zsh)
      PROFILE_FILE="~/.zshrc"
      ;;
    bash)
      PROFILE_FILE="~/.bashrc"
      ;;
    fish)
      PROFILE_FILE="~/.config/fish/config.fish"
      ;;
    *)
      PROFILE_FILE="~/.profile"
      ;;
  esac

  if [ "$SHELL_NAME" = "fish" ]; then
    echo -e "  ${CYAN}fish_add_path ~/.local/bin${NC}"
  else
    echo -e "  ${CYAN}echo 'export PATH=\"\$HOME/.local/bin:\$PATH\"' >> ${PROFILE_FILE}${NC}"
  fi
  echo -e "  ${DIM}Then restart your terminal or run: source ${PROFILE_FILE}${NC}"
  echo ""
else
  print_success "~/.local/bin is in PATH"
fi

# ── Step 5: Set up config ────────────────────────────────────────────

print_step 5 "Setting up configuration"

mkdir -p "$CONFIG_DIR"

if [ -f "$CONFIG_DIR/projects.yaml" ]; then
  print_skip "projects.yaml already exists (preserved)"
else
  cat > "$CONFIG_DIR/projects.yaml" << 'YAML'
# Mission Control — Project Configuration
# Add your projects below. Only 'name' and 'path' are required.
# Vercel, Supabase, and Sentry fields are optional.
#
# Docs: https://operators-academy.vercel.app/mission-control

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
echo -e "  ${DIM}├─${NC} mc binary          ${DIM}~/.local/bin/mc${NC}"
echo -e "  ${DIM}├─${NC} source code        ${DIM}~/.local/share/mission-control/${NC}"
echo -e "  ${DIM}└─${NC} config template    ${DIM}~/.config/mission-control/projects.yaml${NC}"
echo ""
echo -e "  ${BOLD}Quick start:${NC}"
echo -e "  ${DIM}1.${NC} Edit ${CYAN}~/.config/mission-control/projects.yaml${NC}"
echo -e "     Add your project paths (name + path are all you need)"
echo -e "  ${DIM}2.${NC} Run ${CYAN}mc${NC} in any terminal"
echo -e "  ${DIM}3.${NC} Open Claude Code sessions — they appear automatically"
echo ""
echo -e "  ${BOLD}Optional env vars for extra panels:${NC}"
echo -e "  ${DIM}VERCEL_TOKEN${NC}       — Deployments panel"
echo -e "  ${DIM}SENTRY_AUTH_TOKEN${NC}  — Alerts panel"
echo -e "  ${DIM}SENTRY_ORG${NC}         — Sentry organization slug"
echo ""
echo -e "  ${BOLD}Keyboard shortcuts:${NC}"
echo -e "  ${CYAN}j/k${NC} scroll  ${CYAN}tab${NC} next panel  ${CYAN}1-5${NC} jump  ${CYAN}r${NC} refresh  ${CYAN}q${NC} quit"
echo ""
echo -e "  ${DIM}Learn more: https://operators-academy.vercel.app/mission-control${NC}"
echo ""
