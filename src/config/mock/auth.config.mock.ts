/*
 * SPDX-FileCopyrightText: 2021 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { registerAs } from '@nestjs/config';

export default registerAs('authConfig', () => ({
  session: {
    secret: 'my_secret',
    lifetime: 1209600000,
  },
  local: {
    enableLogin: true,
    enableRegister: true,
  },
  facebook: {
    clientID: undefined,
    clientSecret: undefined,
  },
  twitter: {
    consumerKey: undefined,
    consumerSecret: undefined,
  },
  github: {
    clientID: undefined,
    clientSecret: undefined,
  },
  dropbox: {
    clientID: undefined,
    clientSecret: undefined,
    appKey: undefined,
  },
  google: {
    clientID: undefined,
    clientSecret: undefined,
    apiKey: undefined,
  },
  gitlab: [],
  ldap: [],
  saml: [],
  oauth2: [],
}));
