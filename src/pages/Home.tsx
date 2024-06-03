import { useState } from 'react';

import DraftNote from '../components/DraftNote';
import Note from '../components/Note';

import useNotes from '../hooks/useNote';

import PlusIcon from '../svgs/Plus';

const Home = () => {
  const { notes, onAdd, onRemove } = useNotes();

  const [draft, setDraft] = useState(false);

  return (
    <main>
      <article className="flex flex-wrap">
        {notes.map(note => (
          <Note key={note.id} note={note} onRemove={onRemove} />
        ))}

        {draft ? (
          <DraftNote setDraft={setDraft} onAdd={onAdd} />
        ) : (
          <PlusIcon
            className="w-12 h-12 p-3 m-3 shadow-sm shadow-neutral-400 hover:bg-neutral-100 mx-3 rounded-md cursor-pointer"
            onClick={() => setDraft(true)}
          />
        )}
      </article>
    </main>
  );
};

export default Home;
