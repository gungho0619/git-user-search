export interface User {
  id: number;
  login: string;
  gravatar_id: string;
  node_id: string;
  score: number;
  site_admin: boolean;
  type: string; // TODO: Maybe enum? Current value I see is "User"

  url: string;
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  html_url: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  starred_url: string;
  subscriptions_url: string;
}
