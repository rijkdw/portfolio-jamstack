#!/bin/bash

function print-line() {
    echo "=============================================="
}

function run-test-command() {
    print-line
    echo "Testing $1:"
    print-line
    pnpm --filter $1 test
}

for package in ./packages/*; do
    run-test-command $package
done

for app in ./apps/*; do
    run-test-command $app
done
