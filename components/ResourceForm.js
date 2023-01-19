import { useState } from "react";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
};

const ResourceForm = ({ initialData, onFormSubmit }) => {
  const [form, setForm] = useState(initialData || DEFAULT_DATA);

  const resetForm = () => {
    setForm(DEFAULT_DATA);
  };

  return (
    <div className="resource-form">
      <h1 className="title">{initialData ? "Edit Resource" : "Add New Resource"}</h1>
      <form>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              type="text"
              placeholder="Learn NextJS and Sanity IO"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Learn these technologies because they are very popular and enable better SEO"
            ></textarea>
          </div>
        </div>
        <div className="field">
          <label className="label">Link</label>
          <div className="control">
            <input
              className="input"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
              type="text"
              placeholder="https://www.abc.com"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Priority</label>
          <div className="control">
            <div className="select">
              <select value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Time to finish</label>
          <div className="control">
            <input
              className="input"
              value={form.timeToFinish}
              onChange={(e) => setForm({ ...form, timeToFinish: e.target.value })}
              type="number"
              placeholder="60 (time in minutes)"
            />
          </div>
          <p className="help">time in minutes</p>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="button" onClick={() => onFormSubmit(form)} className="button is-link">
              Submit
            </button>
          </div>
          <div className="control">
            <button type="button" onClick={resetForm} className="button is-link is-light">
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResourceForm;
