#!/bin/bash

source "../../development.env"

pnpm env-cmd -f ../../development.env pnpm sanity dataset export production production.tar.gz --overwrite

if [ ! "$?" -eq 0 ]; then
    echo "Failed to export dataset 'production'"
    exit 1
fi

pnpm env-cmd -f ../../development.env pnpm sanity dataset delete development --force
pnpm env-cmd -f ../../development.env pnpm sanity dataset create development --visibility public
pnpm env-cmd -f ../../development.env pnpm sanity dataset import production.tar.gz development --replace

if [ ! "$?" -eq 0 ]; then
    echo "Failed to import dataset 'development'"
    exit 1
fi

rm -f production.tar.gz