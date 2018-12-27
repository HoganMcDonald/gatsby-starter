# Gatsby Netlify Custom Starter

This is based largely off of the starter file found [here](https://github.com/robertcoopercode/gatsby-netlify-cms). I just found that it came with things that I either didn't need or were a little too general purpose for how I like to work. Further I wanted an opportunity to learn the technology a little better.

---

## Setup

### Requirements

`node` - `brew install nvm` and `nvm install && nvm use`

`yarn` - `brew install yarn --without-node`

`gatsby` - `yarn global add gatsby-cli`

### Development

1. grep codebase for any instance of `changeme` and replace with relevent data.
1. `yarn install`
1. `yarn start`

---

## Deployment

### First Time

1. Fork this repository on github.
1. Login or create an account on [Netlify](https://app.netlify.com/).
1. Select "New site from git"
1. Follow instructions to authenticate through Github.
1. Select the forked repository. Make sure that it runs the `gatsby build` command on the `master` branch.
1. Ensure that the site builds successfully.
1. Follow the steps [here](https://www.netlifycms.org/docs/add-to-your-site/#enable-identity-and-git-gateway) to enable Git Gateway and Identity Service on your Netlify site.
1. Once those services are set up, go to the "Identity" tab and create a new user. This will send an email to that user to create their account on the deployed site (This email may end up in your spam folder). Follow the link in the email and create an account.
1. Navigate to `/admin` to make changes to the site's content.

### Continuous Deployment

Deployment is automated through netlify. Ideally, work will be done off of `develop` and then squashed when it is merged into `master`. CMS changes add commits onto the `master` branch, so make sure to merge those to `develop` frequently in order to keep up to date and avoid conflicts.
