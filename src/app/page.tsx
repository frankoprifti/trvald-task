import CardsDisplay from "@/layout/CardsDisplay";
import { supabase } from "../lib/supabaseClient";

export default async function Home() {
  const { data, error } = await supabase.from("Table 1").select("*");

  if (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }

  return (
    <CardsDisplay
      data={data.map((item) => ({
        title: item.title,
        shortDescription: item["short description"],
        image: item?.image?.[0]?.url || "",
      }))}
    />
  );
}
