#!/bin/bash

mkdir -p ./test/resources/lib/

cp ./node_modules/mocha/mocha.css ./node_modules/mocha/mocha.js ./node_modules/chai/chai.js ./test/resources/lib

browserify ./test/acceptance/browser/*-spec.js > ./test/resources/test-bundle.js