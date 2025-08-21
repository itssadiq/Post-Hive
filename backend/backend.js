const supabaseUrl = "https://idsckcbhzhfjtzvtwkai.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlkc2NrY2JoemhmanR6dnR3a2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3MTEyNjcsImV4cCI6MjA3MTI4NzI2N30.SuV8zZCLNx7K66MTqb4eJ0MYbPL7by-IBaAaaqe1WHk";
const client = supabase.createClient(supabaseUrl, supabaseKey);

export async function createNewUser(name, email, password) {
  const { data, error } = await client.auth.signUp({
    email,
    password,
    options: {
      data: {
        displayName: name,
      },
    },
  });

  if (error) {
    throw error;
    return null;
  } else {
    return data;
  }
}

export async function signInUser(email, password) {
  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  } else {
    return data;
  }
}

export async function retrieveSession() {
  const { data, error } = await client.auth.getSession();

  if (error) {
    throw error;

    return null;
  } else {
    return data;
  }
}

export async function signoutUser() {
  const { error } = await client.auth.signOut();

  if (error) {
    throw error;
  }
}
