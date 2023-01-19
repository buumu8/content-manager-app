import Link from "next/link";
import ResourceLabel from "./ResourceLabel";
import moment from "moment";

export default function ResourceHighlight({ resources }) {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {resources.map((resource) => (
            <section key={resource.id} className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      {moment(resource.createdAt).format("LLL")}
                      <ResourceLabel status={resource.status} />
                    </h2>
                    <h1 className="title">{resource.title}</h1>
                    <p className="mb-2">{resource.description}</p>
                    <Link className="button is-light" href={`/resources/${resource.id}`}>
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
