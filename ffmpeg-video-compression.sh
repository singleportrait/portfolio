#! /bin/bash

file=$1

ffmpeg -i "$file" -vcodec h264 -strict -2 -an -movflags faststart "${file%.*}"-compressed.mp4
echo "All done!"
