// Importer le fichier `../resources/cart.json`
import Cart from '../resources/cart.json';

type Cart = ReadonlyArray<CartItem>;

type CartItem = {
  id: number;
  product: string;
  created_at: string;
};

// Boucler sur le panier et utiliser le composant <Item>
// en lui passant les données du panier
export default function App() {
  return (
    <ul>
      {Cart.map((item) => (
        <Item2
          item={item}
        />
      ))}
    </ul>
  );
}

function Item({
  id,
  product,
  created_at,
}: {
  id: string;
  product: string;
  created_at: string;
}) {
  return (
    <li>
      {id} -- {product} -- {created_at}
    </li>
  );
}


function Item2({
item
}: {
  item: CartItem;
}) {
  return (
    <li>
      {item.id} -- {item.product} -- {item.created_at}
    </li>
  );
}
// Création d'un composant <Item>,
// récupère en props un élément du panier
