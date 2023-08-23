#!/bin/bash

# Start services
./GeneratorService/start_generator.sh
./ValidatorService/start_validator.sh
./FrontEnd/start_frontend.sh

echo "All services started!"