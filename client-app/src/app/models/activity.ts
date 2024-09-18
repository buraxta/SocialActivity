// We got this from the API, then used a json to ts converter to get the interface
export interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  city: string;
  venue: string;
}
