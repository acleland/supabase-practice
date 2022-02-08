const SUPABASE_URL = 'https://rkwuoifoqjtdyuamlqbt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrd3VvaWZvcWp0ZHl1YW1scWJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE2MTAsImV4cCI6MTk1OTkxNzYxMH0.0bzW8RqDL090ne0FvaYqJLDBsUCtpfGm0oN6I-xwziw';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
  return error ? console.error(error) : data;
}

export async function getMovies() {
  // return the list of all movies
  const resp = await client.from('movies').select('*');
  return checkError(resp);
}

export async function getMoviesWithDirector() {
  // return the list of all the movies with their director
  const resp = await client.from('movies').select(`title, directors (name)`);
  return checkError(resp);
}

export async function getDirectorNames() {
  // return the list of the director's names
  const resp = await client.from('directors').select('name');
  return checkError(resp);
}

export async function getMovieById(id) {
  // return the movie with the given id
  const resp = await client.from('movies').select('*').eq('id', id).single();
  console.log(resp)
  return checkError(resp);
}

export async function getMovieByTitle(title) {
  // return the movie with the given title
  const resp = await client.from('movies').select('*').eq('title', title).single();
  return checkError(resp);
}

export async function getOldestMovie() {
  // return the oldest movie (assume the database is not sorted)
}

export async function getMoviesAfter(year) {
  // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
}
