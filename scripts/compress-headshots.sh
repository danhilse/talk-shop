#!/bin/bash

# Batch compress headshot PNGs using ffmpeg
# Resizes to 128x128 (good for small icons, retina-ready) and optimizes

INPUT_DIR="public/headshots"
OUTPUT_DIR="public/headshots/compressed"
SIZE=256

mkdir -p "$OUTPUT_DIR"

echo "Compressing headshots to ${SIZE}x${SIZE}..."
echo ""

for file in "$INPUT_DIR"/*.png; do
  filename=$(basename "$file")

  # Skip if already in compressed folder
  if [[ "$file" == *"/compressed/"* ]]; then
    continue
  fi

  echo "Processing: $filename"

  # Resize and compress PNG
  # -vf scale: resize with high quality lanczos algorithm, crop to square
  # Uses palettegen for optimal PNG color palette
  ffmpeg -y -i "$file" \
    -vf "scale=${SIZE}:${SIZE}:force_original_aspect_ratio=increase,crop=${SIZE}:${SIZE},format=rgba" \
    -pred mixed \
    -compression_level 9 \
    "$OUTPUT_DIR/$filename" 2>/dev/null

  if [ $? -eq 0 ]; then
    original_size=$(stat -f%z "$file")
    new_size=$(stat -f%z "$OUTPUT_DIR/$filename")
    reduction=$(echo "scale=1; (1 - $new_size / $original_size) * 100" | bc)
    echo "  ✓ $(numfmt --to=iec $original_size 2>/dev/null || echo "${original_size}B") → $(numfmt --to=iec $new_size 2>/dev/null || echo "${new_size}B") (${reduction}% smaller)"
  else
    echo "  ✗ Failed"
  fi
done

echo ""
echo "Done! Compressed files saved to $OUTPUT_DIR"
echo ""
echo "To replace originals, run:"
echo "  mv $OUTPUT_DIR/*.png $INPUT_DIR/ && rmdir $OUTPUT_DIR"
