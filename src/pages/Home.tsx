import { useRef, useState } from 'react';

import DraftNote from '../components/DraftNote';
import Note from '../components/Note';

import useNotes from '../hooks/useNote';

import PlusIcon from '../svgs/Plus';

const Home = () => {
  const { notes, onAdd, onRemove } = useNotes();

  const [draft, setDraft] = useState(false);

  const noteRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <article className="flex flex-wrap">
        {notes.map(note => (
          <Note key={note.id} note={note} onRemove={onRemove} />
        ))}

        {draft ? (
          <DraftNote setDraft={setDraft} onAdd={onAdd} noteRef={noteRef} />
        ) : (
          <PlusIcon
            className="fixed bottom-0 right-0 sm:relative bg-neutral-50 w-12 h-12 p-3 m-3 shadow-sm shadow-neutral-400 hover:bg-neutral-100 mx-3 rounded-md cursor-pointer"
            onClick={() => {
              setDraft(true);
              requestAnimationFrame(() => {
                noteRef.current?.scrollIntoView({ behavior: 'smooth' });
              });
            }}
          />
        )}
      </article>
    </main>
  );
};

export default Home;
