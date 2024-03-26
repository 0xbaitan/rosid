#!/bin/bash

BOLD=$(tput bold)
UNDERLINE=$(tput smul)
RESET=$(tput sgr0)

CURRENT_DIR=$PWD
ROSID_ROOT="/home/tanish2509/Projects/rosid"

cd $ROSID_ROOT

echo "${BOLD}${UNDERLINE}BUILDING CONTAINERS${RESET}"
docker-compose build
echo
echo "${BOLD}${UNDERLINE}UPPING NETWORK${RESET}"
docker-compose --env-file .env up -d

