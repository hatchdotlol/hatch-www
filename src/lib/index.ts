export type ProjectRating = "E" | "7+" | "9+" | "13+" | "N/A";

export type Project = {
  id: number;
  author: {
    id: number;
    username: string;
    displayName: string;
  };
  uploadTs: number;
  title: string;
  description: string;
  rating: ProjectRating;
  commentCount: number;
  upvotes: number;
  downvotes: number;
};

export type Comment = {
  id: number;
  content: string;
  author: {
    id: number;
    username: string;
    displayName: string;
  };
  postDate: number;
  replyTo: number;
  hasReplies: false;
};

export type User = {
  id: number;
  name: string;
  displayName: string;
  country: string;
  bio: string;
  highlightedProjects: Project[];
  joinDate: string;
  bannerImage: string;
  followerCount: number;
  followingCount: number;
  theme: string;
  projectCount: number;
  hatchTeam: boolean;
  verified: boolean;
};
