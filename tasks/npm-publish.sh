#!/bin/bash -e

D="$(dirname "$0")"

TAG="$1"
shift 2

echo "Publishing package @${TAG} to NPMJS registry"
$D/npmrc-use-npmjs.sh > .npmrc
npm publish --tag ${TAG} ./ "$@"