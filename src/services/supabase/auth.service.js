export async function login(supabase, userEmail, userPassword) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    });

    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    if (error === undefined) {
      return;
    }

    throw error;
  }
}

export async function logout(supabase) {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return error;
    }
  } catch (error) {
    return error;
  }
}

export async function register(supabase, userEmail, userPassword) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (error) {
      throw new Error(error.message); // Lanza un error con el mensaje de error recibido
    }
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getSession(supabase) {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw error;
  }
}

export async function recoveryPass(supabase, userEmail) {
  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      userEmail,
      {
        redirectTo: `${location.origin}/auth/recovery-password`,
      }
    );
    if (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

export async function updatePassword(supabase, newPassword) {
  try {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });
    if (error) {
      throw error;
    }
    console.log(data);
  } catch (error) {
    throw error;
  }
}

export async function deleteUserAuth(supabase, userId) {
  try {
    const { data, error } = await supabase.rpc("delete_user_auth", {
      user_id: userId,
    });
    if (error) {
      console.error("Error deleting user:", error.message);
    } else {
      console.log("User deleted successfully");
    }
  } catch (error) {
    console.error("Error deleting user:", error.message);
  }
}

export default { getSession, login, logout, register, deleteUserAuth };
