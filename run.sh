#!/bin/bash

case "$1" in
    "start")
        ./run.sh build:shared
        ./run.sh lint-format
        docker-compose up
    ;;
    
    "lint-format")
        ./run.sh format
        ./run.sh lint
    ;;
    
    "lint")
        npm --prefix ./app run lint
        npm --prefix ./server run lint
        npm --prefix ./shared run lint
    ;;
    
    "format")
        npm --prefix ./app run format
        npm --prefix ./server run format
        npm --prefix ./shared run format
    ;;
    
    "build:shared")
        npm --prefix ./shared run format
        npm --prefix ./shared run format
        npm --prefix ./shared run build
    ;;
    
    "build:all")
        ./run.sh lint-format
        ./run.sh build:shared
        docker-compose build
    ;;
    
    "end")
        docker-compose down
    ;;
    
    *)
        echo "No valid option was chosen. Please select a valid choice from start, build, end"
    ;;
esac