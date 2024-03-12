import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectUrl = formData.get("redirectUrl");
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  console.log(email, password);

  try {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // Redirigir al usuario a la URL de redirección después de iniciar sesión correctamente
    return NextResponse.redirect(redirectUrl, {
      status: 301,
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    // Manejar el error de inicio de sesión aquí
    return NextResponse.error(new Error("Error al iniciar sesión"));
  }
}
