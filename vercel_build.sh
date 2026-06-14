#!/bin/bash
echo "Install dependencies..."
python3 -m pip install -r requirements.txt

echo "Collect static files..."
python3 manage.py collectstatic --noinput --clear