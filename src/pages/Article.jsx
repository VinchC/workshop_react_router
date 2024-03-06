import { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";

function Article() {
  // const { id } = useParams();
  const data = useLoaderData();

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const someData = getSomeData(id);

  //   setData(someData);
  // }, [id]);

  return (
    // data != null && (
    <article>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </article>
  );
  // );
}

export default Article;
