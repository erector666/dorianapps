#!/bin/bash
# Generate smooth frame-by-frame animation between stages
# Usage: ./generate-frames.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
FRAMES_DIR="$SCRIPT_DIR/frames"
mkdir -p "$FRAMES_DIR"

# Stage images (must exist)
STAGES=("stage-1.png" "stage-2.png" "stage-3.png" "stage-4.png")
FRAMES_PER_TRANSITION=30  # 30 frames between each stage
TOTAL_FRAMES=0

echo "Generating frames between stages..."

for ((i=0; i<${#STAGES[@]}-1; i++)); do
  STAGE_A="$SCRIPT_DIR/${STAGES[$i]}"
  STAGE_B="$SCRIPT_DIR/${STAGES[$i+1]}"
  
  if [ ! -f "$STAGE_A" ] || [ ! -f "$STAGE_B" ]; then
    echo "Skipping transition $((i+1))->$((i+2)): images not found"
    continue
  fi
  
  echo "  Transition $((i+1)) → $((i+2))"
  
  # Use ffmpeg to create a smooth crossfade + minterpolate
  ffmpeg -y -loop 1 -i "$STAGE_A" -loop 1 -i "$STAGE_B" \
    -filter_complex "
      [0:v]setpts=PTS-STARTPTS,scale=1344:768:force_original_aspect_ratio=decrease,pad=1344:768:(ow-iw)/2:(oh-ih)/2[img0];
      [1:v]setpts=PTS-STARTPTS,scale=1344:768:force_original_aspect_ratio=decrease,pad=1344:768:(ow-iw)/2:(oh-ih)/2[img1];
      [img0][img1]blend=temporal,crop=1344:768,
      minterpolate='mi_mode=blend:fps=30'
    " \
    -t 1 -r 30 \
    "$FRAMES_DIR/transition_$((i+1))_%04d.png" 2>/dev/null
  
  COUNT=$(ls "$FRAMES_DIR/transition_$((i+1))_"*.png 2>/dev/null | wc -l)
  echo "    → $COUNT frames"
  TOTAL_FRAMES=$((TOTAL_FRAMES + COUNT))
done

# Also add the stage images themselves as keyframes
echo "Copying stage images as keyframes..."
for ((i=0; i<${#STAGES[@]}; i++)); do
  cp "$SCRIPT_DIR/${STAGES[$i]}" "$FRAMES_DIR/keyframe_$(printf "%04d" $((i*FRAMES_PER_TRANSITION))).png"
done

echo ""
echo "Total frames generated: $(ls "$FRAMES_DIR"/*.png 2>/dev/null | wc -l)"
echo "Frames in: $FRAMES_DIR"
