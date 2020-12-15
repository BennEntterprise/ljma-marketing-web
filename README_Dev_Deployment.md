# Squad Development and Deployment Patterns

## Development

Setting up a local environment

1. Clone the Repository from Github.
2. run `npm i` to get the server dependencies
3. run `cd ljma-client && cd npm i` to get the client side dependencies.

At the root of the project create a file called 'config.env' with the following entries **you should receive the values from a project manager or other person with credentials**

```bash
NODE_MAILER_USER=
NODE_MAILER_PASSWORD=
NODE_MAILER_TARGET_EMAIL=info@squadharmonix.com
NODE_ENV=development
```

<!-- The development environment will point towards credentials for [MailTrap](https://mailtrap.io) a service which ensure that during testing no real emails are sent out. You can obtain the credentials
for this account from kyle.bennett@betweenfiveandnine.com or else set up your own account. (It's free to do so). -->

You now should be set to run `npm run dev-client` in order to run just the client side code.
Conversely you can run `npm run rebuild` then `npm run start` to serve the project as a node file.

After deploying to heroku production, you will need to enter these environment variables directly via the heroku dashboard. Follow this tutorial to get that done: [Config Env Vars in Heroku](https://devcenter.heroku.com/articles/config-vars)

### A note about phone development

If you wish to test your local development on a mobile device (not just scaling the browser down) running `npm run ngrok` will utilize the [ngrok utility](https://ngrok.com/) to open your localhost port for testing on a mobile device.
_You must download ngrok on your own and ensure the ngrok.exe is within your path_
The command will provide a publicly available url that you can hit on your phone to test your local development. This removes the need to push to a staging area to see the changes on a mobile device. The URL is a randomized string which is not ideal, if you obtain an ngrok account (~60$/yr) you can feed the command a variable to set a custom domain name.

Ex:

```bash
npm run ngrok --subdomain=<your-easily-readable-domain-here>
```

This will mean you can then test your app at http://your-easily-readable-domain.ngrok.io.
Voila! Book mark that, and always run the same subdomain and you'll have an easy way to test on mobile.

### Git Workflow

Squad aims to utilize the [Gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) branching strategy. This utilizes several branches to remain organized.
Notably you can expect to almost always see the following branches:

- main --> Represents what is deployed in production. No Direct Commits.
- develop --> Represents the staging area. Minimal Direct Commits.

1. Pull a branch from develop `<your-feature-branch>`
2. Make changes, stage and commit those changes. [Build And Run Locally](#Local-Development)
3. Merge to develop.
4. Push to heroku test/staging area. (From branch develop)
5. Test features/updates in the browser on the test deployment.
6. Merge develop to main.
7. Push to heroku-prod, the production version of the app. (From branch main )
8. Verify features/update on the production version of the site.

### Local Development

To make changes to just the front end use, `npm run dev-client` this will spin up the webpack server that ships with CRA and will NOT start a backend server.

Once you are finished with this, run `npm run rebuild` to build a production grade package. Then run `npm run start` to test that all assets are being served correctly by the node process.

**If you run `npm run start` without building, you will be scratching your head wondering why the changes have not appeared! Node serves from the build folder so make sure you actually build!**

## Deployment

There are two deployments for this project

- [Production (ljma.herokuapp.com)](https://ljma.herokuapp.com)
- [Staging (ljma-develop.heroku.com)](https://ljma-develop.herokuapp.com)

When you are on the development branch you can push to the staging area with the following command:

```
git push heroku develop:master
```

When you are on the master branch you can push to the production area with the following command:

```
git push heroku-prod main
```

To view the latest logs from a deployment you can use.

```
heroku logs --tail
```
