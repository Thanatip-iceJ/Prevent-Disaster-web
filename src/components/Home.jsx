import React from "react";
import TableList from "./table/TableList";
import { useEffect } from "react";
import axios from "../config/axios";
import { useDisaster } from "../context/DisasterContext";
import AddBtn from "./buttons/AddBtn";
import { useState } from "react";
import dateFormat from "dateformat";

function Home() {
  const [loading, setLoading] = useState(false);
  const { setAllDisaster } = useDisaster();
  useEffect(() => {
    const getAll = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/disaster");
        console.log(res.data);
        setAllDisaster(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getAll();
  }, []);
  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div>
      <div className="flex w-full justify-end mb-2">
        <AddBtn />
      </div>
      <TableList />
    </div>
  );
}

export default Home;
