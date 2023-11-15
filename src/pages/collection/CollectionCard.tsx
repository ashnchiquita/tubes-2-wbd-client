import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';

interface CollectionCardProps {
  title: string;
  total_recipe: number;
  created_at: Date;
  collection_id: number;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ title, total_recipe, created_at, collection_id }) => {
  return (
    <NavLink to={'./' + collection_id}>
      <Card className="w-full hover:bg-secondary">
        <CardHeader className="w-full h-40 m-0 p-3 mb-2">
          <img
            className="w-full h-full rounded-md object-cover"
            src="https://www.fourpaws.com/-/media/Project/OneWeb/FourPaws/Images/articles/cat-corner/small-cat-breeds/munchkin-cropped.jpg"
            alt="cat"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-left mb-2">{title}</CardTitle>
          <CardDescription className="flex flex-row justify-between">
            <p>{total_recipe ? `${total_recipe} Videos` : 'No Video'} </p>
            <p>{created_at.toLocaleDateString()}</p>
          </CardDescription>
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default CollectionCard;