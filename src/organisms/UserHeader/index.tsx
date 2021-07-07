import { useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom";
import { LinkOut, ArrowBackThick, Hashtag, Location, Star, ShippingBoxV1 } from 'akar-icons';

import Image from '../../components/Image';
import Button from "../../components/Button";
import Tag from "../../components/Tag";
import Loading from "../../components/Loading";
import { Title } from "../../components/Typography";

import { User } from "../../utils/types";

import { UserHeaderContainer } from "./styles"
interface ParamType {
  slug: string;
}

const UserHeader = () => {
  const history = useHistory();
  const { slug } = useParams<ParamType>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      const response = await fetch(`https://api.github.com/users/${slug}`)
      .then((response) => response.json())
      .catch(() => setError(true))
      
      setLoading(false)
      setUser(response)
    }

    fetchUser()
  }, [slug])

  return (
    <UserHeaderContainer>
      {loading ?
        <Loading />
      : (
        <>
          {error ?
            <>
              <div className="row">
                <div className="col-12">
                  <Title className="text-center" color="red">Houve um problema na requisição</Title>
                </div>
                <div className="col-12 text-center mt-5">
                  <Link to="/">
                    <Button>
                      Voltar para a home
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          : (
            <>
              <div className="main">
                <Title className="mb-2">{user?.name}</Title>

                <div className="main-items">
                  <Tag>
                    <Hashtag size={18} color="#ef52d1" />
                    {user?.login}
                  </Tag>
                  {user?.location && <Tag>
                    <Location size={18} color="#9c9c9b" />
                    {user?.location}
                  </Tag>}
                  <Tag>
                    <Star size={18} color="#9c9c9b" />
                    {user?.followers}
                  </Tag>
                  <Tag>
                    <ShippingBoxV1 size={18} color="#9c9c9b" />
                    {user?.public_repos}
                  </Tag>
                </div>
              </div>
              <div className="owner">
                <div className="avatar">
                  <Image image={{ src: user?.avatar_url, alt: 'avatar'}} />
                </div>
              </div>
              <div className="actions">
                <Button onClick={() => history.push('/')}>
                  <ArrowBackThick size={18} color="#9c9c9b" />
                </Button>
                <a href={user?.html_url} target="_blank" rel="noreferrer">
                  <Button label="Acessar Github">
                    <LinkOut size={18} color="#9c9c9b" />
                  </Button>
                </a>
              </div>
            </>
          )}
        </>
      )}
    </UserHeaderContainer>
  )
}

export default UserHeader