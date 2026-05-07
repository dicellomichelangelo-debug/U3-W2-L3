import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const NotFound = function () {
  const navigate = useNavigate();
  return (
    <div className="text-center bg-dark">
      <h1>Errore 404</h1>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Torna in Home
      </Button>
    </div>
  );
};

export default NotFound;
