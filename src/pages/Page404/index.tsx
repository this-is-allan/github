import { Link } from "react-router-dom";
import Lottie from 'react-lottie';

import Button from "../../components/Button";

import animationData from '../../lotties/404.json'

const defaultOptions = {
  loop: false,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function Page404() {
  return (
    <div className="row">
      <div className="col-4 col-offset-4">
        <Lottie options={defaultOptions}
          height={250}
          width="100%"
          isStopped={false}
          isPaused={false}
        />

        <div className="text-center">
          <Link to="/">
            <Button>
              Voltar para a home
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Page404;
