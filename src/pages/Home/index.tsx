import { useMemo, useRef, useState } from 'react';

import Draft from '../../components/Draft';
import Note from '../../components/Note';

import useNotes from '../../hooks/useNote';

import PlusIcon from '../../svgs/Plus';

import { buttonStyle, responsiveProps } from './helpers';
import { getResponsiveProps } from '../../utils';

const Home = () => {
  const { notes, onAdd, onRemove, pagination } = useNotes();

  const [draft, setDraft] = useState(false);

  const noteRef = useRef<HTMLDivElement>(null);

  const pageGradient = useMemo(() => {
    const prevColor = pagination.canPrev ? 'from-blue-500' : 'from-blue-300';
    const nextColor = pagination.canNext ? 'to-blue-500' : 'to-blue-300';
    return `${prevColor} ${nextColor}`;
  }, [pagination.canNext, pagination.canPrev]);

  return (
    <main className="flex flex-col justify-between h-screen">
      <article
        className={`grid grid-cols-2 ${getResponsiveProps(
          responsiveProps.grid
        )}`}
      >
        {notes.map(note => (
          <Note key={note.id} note={note} onRemove={onRemove} />
        ))}

        {draft ? (
          <Draft setDraft={setDraft} onAdd={onAdd} noteRef={noteRef} />
        ) : (
          !pagination.canNext && (
            <PlusIcon
              tabIndex={0}
              className="fixed bottom-0 right-0 sm:relative bg-neutral-50 w-12 h-12 p-3 m-4 shadow-sm shadow-neutral-400 hover:bg-neutral-100 mx-3 rounded-md cursor-pointer"
              onClick={() => {
                setDraft(true);
                requestAnimationFrame(() => {
                  noteRef.current?.scrollIntoView({ behavior: 'smooth' });
                });
              }}
            />
          )
        )}
      </article>

      <footer className="p-2 text-lg w-full flex justify-center">
        <button
          disabled={pagination.page === 1}
          onClick={pagination.onFirst}
          className={`rounded-l-xl ${buttonStyle}`}
        >
          &lt;&lt; First
        </button>
        <button
          disabled={!pagination.canPrev}
          onClick={pagination.onPrev}
          className={buttonStyle}
        >
          &lt; Prev
        </button>

        <p className={`p-2 px-4 text-white bg-gradient-to-r ${pageGradient}`}>
          {pagination.page}
        </p>

        <button
          disabled={!pagination.canNext}
          onClick={pagination.onNext}
          className={buttonStyle}
        >
          Next &gt;
        </button>
        <button
          disabled={!pagination.canNext}
          onClick={pagination.onLast}
          className={`rounded-r-xl ${buttonStyle}`}
        >
          Last &gt;&gt;
        </button>
      </footer>
    </main>
  );
};

export default Home;
