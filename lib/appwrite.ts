import { UserType } from "@/types/user-type";
import { Account, Client, ID } from "react-native-appwrite";

export const appWriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.luix.aora",
  projectId: "668d65ba0020e78a70d4",
  databaseId: "668d68a9001c4e9be96c",
  userCollectionId: "668d68c5000f40a978bb",
  videoCollectionId: "668d69c20032b99da8c2",
  storageId: "668d6f24002a10305fdf",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appWriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appWriteConfig.projectId) // Your project ID
  .setPlatform(appWriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = async (data: UserType) => {
  const { email, password, username } = data;
  try {
    const user = await account.create(ID.unique(), email, password, username);
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async () => {
  try {
    const users = await account.get();
    console.log(users);
    return users;
  } catch (error) {
    console.error(error);
  }
};
