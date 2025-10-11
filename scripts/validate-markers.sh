#!/bin/bash

# Simple validation script for markers.js files
# 1. Check JavaScript syntax with node -c
# 2. Check if referenced icons exist in icons/ folder
#
# Usage: ./validate-markers.sh [file1.js file2.js ...]
# If no files specified, validates all season*/markers.js files

ICONS_DIR="icons"
ERRORS=0
TEMP_FILE="/tmp/validation_errors_$$"

echo "🔍 Starting markers validation..."

if [ $# -gt 0 ]; then
    # Files specified as parameters
    CHANGED_FILES=""
    for file in "$@"; do
        CHANGED_FILES="${CHANGED_FILES}${file}\n"
    done
    CHANGED_FILES=$(echo -e "$CHANGED_FILES" | grep -v '^$')
    echo "📋 Validating specified files:"
elif git rev-parse --git-dir > /dev/null 2>&1; then
    # Local git repo: check for uncommitted changes in markers.js files
    STAGED_FILES=$(git diff --cached --name-only | grep 'markers\.js$' || true)
    MODIFIED_FILES=$(git diff --name-only | grep 'markers\.js$' || true)
    CHANGED_FILES=$(echo -e "$STAGED_FILES\n$MODIFIED_FILES" | sort -u | grep -v '^$' || true)
    
    if [ -n "$CHANGED_FILES" ]; then
        echo "📋 Changed markers.js files (staged/modified):"
    else
        # No changes detected, validate all markers.js files
        CHANGED_FILES=$(find . -name 'markers.js' -type f | grep -E '^./season[0-9]+/markers\.js$' || true)
        echo "📋 No changes detected, validating all markers.js files:"
    fi
else
    # Not a git repo: validate all markers.js files
    CHANGED_FILES=$(find . -name 'markers.js' -type f | grep -E '^./season[0-9]+/markers\.js$' || true)
    echo "📋 All markers.js files:"
fi

if [ -z "$CHANGED_FILES" ]; then
    echo "✅ No markers.js files to validate"
    exit 0
fi

echo "$CHANGED_FILES" | while IFS= read -r file; do
    echo "  - $file"
done

echo ""

while IFS= read -r file; do
    SYNTAX_ERROR=$(node -c "$file" 2>&1)
    SYNTAX_EXIT_CODE=$?
    HAS_SYNTAX_ERROR=false
    
    if [ $SYNTAX_EXIT_CODE -ne 0 ]; then
        echo "❌ Syntax error in $file:"
        echo "$SYNTAX_ERROR" | sed -n '2,/^$/p' | head -n -1 | sed 's/^/   /'
        
        # Provide helpful suggestions for common errors
        if echo "$SYNTAX_ERROR" | grep -q "Unexpected token '{'"; then
            echo ""
            echo "   💡 Tip: This usually means a missing comma on the previous line."
            echo "   Example fix:"
            echo '      { "pos": [x, z, y], "title": "Marker in previous line", "icon": "icon.png" }  ← missing comma'
            echo '      { "pos": [x, z, y], "title": "Marker in previous line", "icon": "icon.png" }, ← add comma here'
        elif echo "$SYNTAX_ERROR" | grep -q "Unexpected token ']'"; then
            echo ""
            echo "   💡 Tip: This might be an extra comma before a closing bracket."
            echo "   Example fix: Remove trailing comma before ] or }"
        fi
        
        echo "1" >> "$TEMP_FILE"
        HAS_SYNTAX_ERROR=true
        echo ""
        echo "   ⚠️  Note: There may be additional syntax errors not shown here. Please double-check the entire file."
    else
        echo "  ✅ Syntax OK"
    fi
    echo ""
    
    REFERENCED_ICONS=$(grep -v '^[[:space:]]*\/\/' "$file" | grep -o '"icon"[[:space:]]*:[[:space:]]*"[^"]*\.png"' | sed 's/.*"icon"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/' | grep -v '^\.png$' | sort -u)
    
    if [ -z "$REFERENCED_ICONS" ]; then
        if [ "$HAS_SYNTAX_ERROR" = true ]; then
            echo "  ⚠️  No icon references found (possibly due to syntax error)"
        else
            echo "  ⚠️  No icon references found"
        fi
    else
        MISSING_ICONS=""
        FILE_ERRORS=0
        while IFS= read -r icon; do
            if [ -n "$icon" ] && [ ! -f "$ICONS_DIR/$icon" ]; then
                MISSING_ICONS="${MISSING_ICONS}    - $icon\n"
                FILE_ERRORS=$((FILE_ERRORS + 1))
            fi
        done <<< "$REFERENCED_ICONS"
        
        if [ -n "$MISSING_ICONS" ]; then
            echo "❌ Missing icons in $file:"
            echo -e "$MISSING_ICONS"
            echo "$FILE_ERRORS" >> "$TEMP_FILE"
        else
            echo "  ✅ All icons exist"
        fi
    fi
    
    echo ""
done <<< "$CHANGED_FILES"

if [ -f "$TEMP_FILE" ]; then
    ERRORS=$(awk '{sum += $1} END {print sum}' "$TEMP_FILE")
    rm -f "$TEMP_FILE"
fi

if [ "$ERRORS" -eq 0 ]; then
    echo "🎉 All validations passed!"
    
    if [ -n "$GITHUB_ACTIONS" ]; then
        echo "VALIDATION_STATUS=success" >> "$GITHUB_OUTPUT"
        echo "VALIDATION_SUMMARY=✅ All markers.js files validated successfully" >> "$GITHUB_OUTPUT"
    fi
    exit 0
else
    echo "💥 Validation failed with $ERRORS errors"
    
    if [ -n "$GITHUB_ACTIONS" ]; then
        echo "VALIDATION_STATUS=failure" >> "$GITHUB_OUTPUT"
        echo "VALIDATION_SUMMARY=❌ Validation failed with $ERRORS errors" >> "$GITHUB_OUTPUT"
    fi
    exit 1
fi