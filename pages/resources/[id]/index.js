import Layout from "components/Layout";
import axios from "axios";
import Link from "next/link";
import ResourceLabel from "components/ResourceLabel";
// import { useRouter } from "next/router";
import moment from "moment";

const ResourceDetail = ({ resource }) => {
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <div>Loading Data!</div>;
  // }
  const activeResource = () => {
    axios
      .patch("/api/resources", {
        form: {
          ...resource,
          status: "active",
        },
      })
      .then((_) => location.reload())
      .catch((err) => alert(err?.response?.data));
  };

  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      {moment(resource.createdAt).format("LLL")}
                      <ResourceLabel status={resource.status} />
                    </h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to finish: {resource.timeToFinish} min</p>
                    <p>Status: {resource.status}</p>
                    {resource.status === "inactive" && (
                      <>
                        <Link href={`${resource.id}/edit`} className="button is-warning">
                          Update
                        </Link>
                        <button className={`button is-success ml-1`} onClick={activeResource}>
                          Activate
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

//Execute both on server and client
// ResourceDetail.getInitialProps = async ({ query }) => {
//   const axiosRes = await axios.get(`http://localhost:3001/api/resources/${query.id}`);
//   const resource = await axiosRes.data;
//   return {
//     resource,
//   };
// };

// export async function getStaticPaths() {
//   const resData = await fetch("http://localhost:3001/api/resources");
//   const data = await resData.json();
//   const paths = data.map((resource) => ({ params: { id: resource.id } }));
//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const axiosRes = await axios.get(`http://localhost:3001/api/resources/${params.id}`);
//   const resource = await axiosRes.data;

//   return {
//     props: { resource },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps({ params }) {
  const axiosRes = await axios.get(`${process.env.API_URL}/resources/${params.id}`);
  const resource = await axiosRes.data;

  return {
    props: { resource },
  };
}

export default ResourceDetail;
