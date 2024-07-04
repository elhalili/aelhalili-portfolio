declare namespace MyCustomTypes {
  type Education = {
    university: string;
    major: string;
    degree: string;
    startAt: string;
    endAt: string;
    details: [string, string][];
  };

  type About = {
    name: string;
    occupation: string;
    about: string;
  };

  type CellEntry = {
    title: string;
    description: string;
    link: string;
  };

  type ColumnEntry = {
    title: string;
    cells: CellEntry[];
  };

  type Interests = {
    header: string;
    content: string[];
  };

  type Media = {
    content: string;
    link: string;
  };

  type Contact = {
    header: string;
    startWith: string;
    contacts: Media[];
  };
}
