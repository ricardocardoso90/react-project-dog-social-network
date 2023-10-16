import { useParams } from "react-router-dom";
import { Feed } from "../../../Components/Feed/Feed";
import { Head } from "../../../Components/Helpers/Head/Head";

export function UserProfile() {
  const { user } = useParams();

  return (
    <section className="container main-container">
      <Head title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  )
}