import { INote } from '../../types/Note';

export type NoteProps = {
  note: INote;
  onRemove: (note: INote) => void;
};
