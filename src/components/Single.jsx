import { useLocation } from 'react-router-dom';

const Single = () => {
  const location = useLocation();
  const params = useParams();
  console.log("Location:" + location);

  console.log("Params: " + params);

  return <>
  <h2 className="text-3xl">ID: {params.id}</h2>
  </>
}

export default Single;
