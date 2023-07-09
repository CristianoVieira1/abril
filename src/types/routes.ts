export type ParamList = {
  Home: undefined;
  RepositoriesDetails:
    | {
        name: string;
        url: string | undefined;
      }
    | undefined;
};
