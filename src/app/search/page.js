import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function SearchPage() {
  const supabase = createServerComponentClient({ cookies });

  const { data: courts } = await supabase.from("courts").select("*");

  console.log(courts);
  return (
    <div>
      <h1>search page</h1>
    </div>
  );
}
