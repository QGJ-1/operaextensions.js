#!/bin/sh

python build.py --include common --output ../build/operaextensions.min.js
python build.py --include wintabs --output ../build/operaextensions_wintabs.min.js
