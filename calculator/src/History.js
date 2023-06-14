import { useEffect, useState} from 'react';

const History = ({ addHistoryRecord }) => {
  console.log("history")
  const [content, setContent] = useState([]);
  const databaseURL = "http://localhost:3500/history";

  const fetchData = async () => {
    try {
      const response = await fetch(`${databaseURL}?_limit=10`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData().then(setContent);
  }, [addHistoryRecord]);

  if (content.length === 0) {
    return <></>;
  }

  return content.map((record) => {
    return <p key={record.id}>{record.value}</p>;
  });
}

export default History;
