# Gatsby Netlify Custom Starter

This is based largely off of the starter file found here. I just found that it came with things that I either didn't need or were a little too general purpose for how I like to work. Further I wanted an opportunity to learn the technology a little better.

## Requirements

`node` - `brew install nvm` and `nvm install && nvm use`
`yarn` - `brew install yarn --without-node`
`gatsby` - `yarn global add gatsby-cli`

## Setup

`yarn install`
`yarn start`

## deployment

Deployment is automated through netlify. Ideally, work will be done off of `develop` and then squashed when it is merged into `master`. CMS changes add commits onto the `master` branch, so make sure to merge those to `develop` frequently in order to keep up to date and avoid conflicts.
