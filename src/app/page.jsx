"use client"
import supabase from "../../utils/supabaseConfig";
import { useEffect, useState } from "react";
import AstarteList from "../components/AstarteList";


export default function Home() {
  const [astartesList, setAstartesList] = useState([]);

  useEffect(() => {
    // Function to fetch data from Supabase
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("astartes")
        .select()
        .order("allegiance", { ascending: true });
      if (error) { 
        console.log("error fetching data")
      }
      setAstartesList(data);
    };

    fetchData();
  }, []);

  return (
    <main className="flex">
      <div className="flex justify-center"> Astartes List </div>
      <div>
          <AstarteList astartesList={astartesList} />
      </div>
    </main>
  );
}
