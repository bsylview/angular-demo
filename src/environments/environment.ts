// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  unsplash: {
    applicationId: '4e8a71fd34ab8a4eb0548c0c3a35a3beddd8203145ca89361c2eca4648c8bc6e',
    secret: 'f987ac0033f11c4a2239313b420447bcb5aa8b02342de89146d95769f1c6306c',
    callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
  },

  login: {
    username: 'Admin',
    password: 'Nimda123',
  }
};
