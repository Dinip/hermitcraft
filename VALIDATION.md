# Markers Validation

Simple validation for `markers.js` files.

## What Gets Validated

✅ **JavaScript Syntax** - Uses `node -c` to check for syntax errors  
✅ **Icon Existence** - Ensures all referenced icons exist in `icons/` folder  

## Running Validation

### Local Testing
```bash
# Run validation on all markers.js files
./validate-markers.sh

# Or to validate a specific file
./validate-markers.sh season10/markers.js
```

### Automated CI/CD
- Automatically runs on pull requests to master
- Only validates changed `markers.js` files
- Fails PR if validation errors found

## How It Works

The `validate-markers.sh` script:

1. **Finds files to validate**
   - In CI: Gets changed files from workflow action
   - Locally: Finds all `season*/markers.js` files

2. **Checks JavaScript syntax**
   - Runs `node -c filename.js` on each file
   - Reports any syntax errors with line numbers

3. **Validates icon references**
   - Extracts all `"icon": "filename.png"` references
   - Checks if each icon file exists in `icons/` directory
   - Ignores commented-out lines and template examples

## Common Issues

### Syntax Errors
```bash
❌ Syntax error in ./season10/markers.js
   Run: node -c ./season10/markers.js
```
**Fix:** Check for missing commas, brackets, or quotes

### Missing Icons
```bash
❌ Missing icons in ./season9/markers.js:
    - newplayer.png
```
**Fix:** Add the icon file to `icons/` folder or fix the filename

## File Structure

Each `markers.js` should contain:
```javascript
var MAPCRAFTER_MARKERS = [
    {
        "id": "group-id",
        "name": "Group Name", 
        "markers": {
            "world": [
                {
                    "pos": [x, z, y],
                    "title": "Marker Title",
                    "icon": "player.png"  // Must exist in icons/
                }
            ]
        }
    }
];
```