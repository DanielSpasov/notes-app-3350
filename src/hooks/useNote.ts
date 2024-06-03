import { useCallback, useEffect, useState } from 'react';
import { INote } from '../types/Note';

const useNotes = () => {
  const [page, setPage] = useState(
    Number(JSON.parse(localStorage.getItem('page') || '1'))
  );

  const [allNotes, setAllNotes] = useState<INote[]>(
    JSON.parse(localStorage.getItem('notes') || '[]')
  );
  const [notes, setNotes] = useState<INote[]>(
    allNotes.slice(page * 15 - 15, page * 15)
  );

  useEffect(() => {
    setNotes(allNotes.slice(page * 15 - 15, page * 15));
  }, [page, allNotes]);

  // Local Storage Updates
  useEffect(() => {
    localStorage.setItem('page', JSON.stringify(page));
  }, [page]);
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(allNotes));
  }, [allNotes]);

  const onNext = useCallback(() => setPage(prev => prev + 1), []);
  const onPrev = useCallback(() => setPage(prev => prev - 1), []);

  const onAdd = useCallback(
    (note: INote) => {
      if (notes.length === 15) onNext();
      setAllNotes(prev => [...prev, note]);
    },
    [notes, onNext]
  );

  const onRemove = useCallback(
    (note: INote) => {
      if (notes.length === 1 && page > 1) onPrev();
      setAllNotes(prev => prev.filter(n => n.id !== note.id));
    },
    [notes, page, onPrev]
  );

  const get = useCallback(
    (id: string) => allNotes.find(note => note.id === id),
    [allNotes]
  );

  return {
    notes,
    get,
    onAdd,
    onRemove,
    pagination: {
      page,
      canNext: page * 15 < allNotes.length,
      canPrev: page > 1,
      onNext,
      onPrev,
      onFirst: () => setPage(1),
      onLast: () => setPage(Math.ceil(allNotes.length / 15))
    }
  };
};

export default useNotes;
