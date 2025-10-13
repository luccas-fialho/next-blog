import { PostModel } from "./post-model";

export type PostModelDTO = Omit<PostModel, "updatedAt">;
