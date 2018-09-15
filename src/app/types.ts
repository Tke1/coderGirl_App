
  export interface Video {
    title: string;
    author: string;
    id: string;
    date: string;
    viewDetails: ViewDetail[];
  }

  export interface ViewDetail {
    age: number;
    region: string;
    date: string;
  }
