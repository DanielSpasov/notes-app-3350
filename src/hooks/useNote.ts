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

  const onAdd = useCallback(
    (note: INote) => setAllNotes(prev => [...prev, note]),
    []
  );

  const onRemove = useCallback(
    (note: INote) => setAllNotes(prev => prev.filter(n => n.id !== note.id)),
    []
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
      onNext: () => setPage(prev => prev + 1),
      onPrev: () => setPage(prev => prev - 1),
      onFirst: () => setPage(1),
      onLast: () => setPage(Math.ceil(allNotes.length / 15))
    }
  };
};

export default useNotes;
