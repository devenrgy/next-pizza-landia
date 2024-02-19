type PizzaItem = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

type PizzaList = PizzaItem[];

interface PizzaData {
  meta: Meta;
  items: PizzaList;
}

interface Meta {
  total_items: number;
  total_pages: number;
  current_page: number;
  per_page: number;
  remaining_count: number;
}
