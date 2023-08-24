import { Card } from "../components";

export const MovieList = () => {
  const movieList = [{}];
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-star flex-wrap">
          {movieList.map((movie, i) => (
            <Card key={i} />
          ))}
        </div>
      </section>
    </main>
  );
};
