import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import CourtCard from "@/ui/court-card/court-card";
import { courtPreview } from "@/lib/court-preview";

export const revalidate = 60;

export default async function SearchPage() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.from("courts").select("*");

  let courts = [];

  await Promise.all(
    data.map(async (court) => {
      const newCourt = await courtPreview(court);
      courts.push(newCourt);
    })
  );

  if (!courts.length) {
    return <div>no hay data</div>;
  }

  console.log(courts);
  return (
    <div>
      <h1>search page</h1>
      <ul>
        {courts.map((court) => {
          return (
            <li key={court.id}>
              <CourtCard
                name={court.name}
                id={court.id}
                level={court.game_level}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
