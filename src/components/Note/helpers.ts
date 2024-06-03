import { INote } from '../../types/Note';

export type NoteProps = {
  note: INote;
  onRemove: (note: INote) => void;
};

export const responsiveProps = {
  note: {
    xs: 'w-36 h-36 text-sm',
    sm: 'sm:w-40 sm:h-40 sm:text-md',
    md: 'md:w-44 md:h-44',
    lg: 'lg:w-48 lg:h-48',
    xl: 'xl:w-52 xl:h-52 xl:text-lg',
    '2xl': '2xl:w-64 2xl:h-64'
  }
};
