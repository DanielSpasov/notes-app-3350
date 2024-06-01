import { useState } from 'react';

import DraftNote from '../components/DraftNote';
import useNotes from '../hooks/useNote';
import Note from '../components/Note';
import Icon from '../components/Icon';

const Home = () => {
  const { notes, onAdd, onRemove } = useNotes();

  const [draft, setDraft] = useState(false);

  return (
    <main>
      <h1 className="text-lg p-2">Your Notes</h1>

      <article className="flex">
        {notes.map(note => (
          <Note note={note} onRemove={onRemove} />
        ))}

        {draft ? (
          <DraftNote setDraft={setDraft} onAdd={onAdd} />
        ) : (
          <Icon
            model="plus"
            onClick={() => setDraft(true)}
            className="w-12 h-12 p-3 shadow-sm shadow-neutral-400 hover:bg-neutral-100 mx-3 rounded-md cursor-pointer"
          />
        )}
      </article>
    </main>
  );
};

export default Home;
