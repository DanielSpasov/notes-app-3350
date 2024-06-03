import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMemo } from 'react';

import useNotes from '../hooks/useNote';

import BackIcon from '../svgs/Back';

const Note = () => {
  const { id = '0' } = useParams();

  const { get } = useNotes();

  const navigate = useNavigate();

  const note = useMemo(() => get(id), [get, id]);

  if (!note) {
    return (
      <main>
        <header className="flex flex-col items-center">
          <h1 className="relative p-4 text-xl">404: Note not found</h1>
          <Link className="hover:underline hover:text-blue-500" to="/">
            All notes
          </Link>
        </header>
      </main>
    );
  }

  return (
    <main>
      <BackIcon
        className="w-8 h-8 m-3 cursor-pointer [&>path]:hover:stroke-blue-500"
        onClick={() => navigate(-1)}
      />

      <article className="mx-14">
        <h1 className="rounded-t-md p-3 text-lg bg-yellow-300">{note.title}</h1>
        <p className="h-full bg-neutral-100 break-words p-3 rounded-b-md">
          {note.content}
        </p>
      </article>
    </main>
  );
};

export default Note;
