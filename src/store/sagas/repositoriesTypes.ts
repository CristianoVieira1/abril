export interface IRepositoriesResponseDTO {
  items: {
    id: number;
    name: string;
    owner: {
      login: string;
      avatar_url: string;
    };
    stargazers_count: number;
    html_url?: string;
  }[];
}
