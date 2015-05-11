#!/bin/bash

mkdir -p ./dist/

browserify ./index.js -o ./dist/midi-js-utils.js
