'use server';

import { cookies } from 'next/headers';
import { Account, Avatars, Client, Databases, Storage } from 'node-appwrite';
import { appwriteConfig } from './config';

export const createSessionClient = async () => {
  const client = new Client();
  client.setEndpoint(appwriteConfig.endpoint);
  client.setProject(appwriteConfig.projectId);

  const session = (await cookies()).get('appwrite-session');

  if (!session || !session.value) throw new Error('No Session Found');

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
  };
};

export const createAdminClient = async () => {
  const client = new Client();
  client.setEndpoint(appwriteConfig.endpoint);
  client.setProject(appwriteConfig.projectId);
  client.setKey(appwriteConfig.secretKey);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
    get avatars() {
      return new Avatars(client);
    },
  };
};
