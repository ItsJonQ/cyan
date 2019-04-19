#!/bin/bash
echo "Cleaning dist...";

find ./dist -type f -name "*.test.*" -delete;
find ./dist -name "__tests__" -type d -exec rm -rf {} +;
find ./dist -name "__fixtures__" -type d -exec rm -rf {} +;

echo "";
echo "Post build complete!";