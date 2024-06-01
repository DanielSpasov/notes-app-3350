import { useCallback, useEffect, useState } from 'react';
import { INote } from '../types/Note';

const useNotes = () => {
  const [notes, setNotes] = useState<INote[]>(
    JSON.parse(localStorage.getItem('notes') || '[]')
  );

  useEffect(
    () => localStorage.setItem('notes', JSON.stringify(notes)),
    [notes]
  );

  const onAdd = useCallback(
    (note: INote) => setNotes(prev => [...prev, note]),
    []
  );

  const onRemove = useCallback(
    (note: INote) => setNotes(prev => prev.filter(n => n.id !== note.id)),
    []
  );

  return {
    notes,
    onAdd,
    onRemove
  };
};

export default useNotes;
