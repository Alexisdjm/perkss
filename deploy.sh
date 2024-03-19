#!/bin/bash

# Assign command-line arguments to variables
ENV=$1
DEPLOY_TOKEN=$2

# Exit script if not all arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <ENV> <DEPLOY_TOKEN>"
    exit 1
fi

if [ "$ENV" != "production" ] && [ "$ENV" != "preview" ] && [ "$ENV" != "staging" ]; then
    echo "Invalid env <$ENV>. Use 'production', 'preview' or 'staging'"
    exit 1
fi
# Install dependencies
echo "INSTALLING DEPENDENCIES"
npm install

# Build 
echo "BUILDING APPLICATION"
if [ "$ENV" == "production" ]; then 
    npm run build:prod
elif [ "$ENV" == "preview" ]; then
    npm run build:prev
elif [ "$ENV" == "staging" ]; then
    npm run build:staging
else
    echo "Invalid env"
    exit 1
fi


# Deploy 
echo "DEPLOYING APPLICATION"
npx swa deploy ./build --deployment-token $DEPLOY_TOKEN --env $ENV

