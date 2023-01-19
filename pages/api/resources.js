import axios from "axios";

export default async function resources(req, res) {
  if (req.method === "GET") {
    const dataRes = await fetch(`${process.env.API_URL}/resources`);
    const data = await dataRes.json();
    return res.send(data);
  }

  if (req.method === "POST" || req.method === "PATCH") {
    const { id, title, description, link, timeToFinish, priority } = req.body.form;

    if (!title || !description || !link || isNaN(timeToFinish) || !priority) {
      return res.status(422).send("Data are missing!!!");
    }

    const url = `${process.env.API_URL}/resources/${req.method === "POST" ? "" : id}`;

    try {
      const axiosRes = await axios[req.method.toLowerCase()](url, req.body);

      return res.send(axiosRes.data);
    } catch (error) {
      return res.status(422).send(error.response.data);
    }
  }
}
