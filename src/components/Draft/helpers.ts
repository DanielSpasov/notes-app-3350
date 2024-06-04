import { Dispatch, RefObject, SetStateAction } from 'react';

import { INote } from '../../types/Note';

export type DraftProps = {
  setDraft: Dispatch<SetStateAction<boolean>>;
  onAdd: (note: INote) => void;
  noteRef: RefObject<HTMLDivElement>;
};
