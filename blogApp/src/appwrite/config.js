import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, content, fimage, status, userid, slug }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          fimage,
          status,
          userid,
        },
      );
    } catch (error) {
      console.log("Appwrite create post error: ", error);
      throw error;
    }
  }

  async updatePost(slug, { title, content, fimage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          fimage,
          status,
        },
      );
    } catch (error) {
      console.log("Appwrite update post error: ", error);
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      );
    } catch (error) {
      console.log("Appwrite delete post error: ", error);
      throw error;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      );
    } catch (error) {
      console.log("Appwrite get posts error: ", error);
      throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      );
    } catch (error) {
      console.log("Appwrite get posts error: ", error);
      throw error;
    }
  }

  //file upload service

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
      );
    } catch (error) {
      console.log("Appwrite file upload error: ", error);
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.storage.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite file delete error: ", error);
      throw error;
    }
  }

 getFileView(fileId) {
    try {
   
     if (!fileId) return null
    return this.storage.getFileView(conf.appwriteBucketId, fileId).toString()


    } catch (error) {
      console.log("Appwrite file preview error: ", error);
      throw error;
    }
  }
}
const service = new Service();

export default service;
