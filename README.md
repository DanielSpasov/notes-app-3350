# Notes App

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/DanielSpasov/notes-app-3350
```

2. Install the required dependencies:

```bash
yarn
```

3. Start the application:

```bash
yarn dev
```

## Component Usage

##### To use the `Note` component in your project:

1. Import the Note component:

```typescript
import Note from './relative_path_to_component';
```

2. Render the component in your page:

```tsx
<Note note={note} onRemove={onRemove} />
```

Available props:

- `note`: `INote`: Note object that is about to be rendered in the component.
  - `id`: `string`: Id of the note.
  - `title`: `string`: Title of the note.
  - `content`: `string`: Content of the note.
- `onRemove` `(note: INote) => void`: Function that is going to be executed when the `X` in the top right corner of the component is clicked.

##### To use the `Draft` component in your project:

1. Import the Draft component:

```typescript
import Draft from './relative_path_to_component';
```

2. Render the component in your page:

```tsx
<Draft setDraft={setDraft} onAdd={onAdd} noteRef={noteRef} />
```

Available props:

- `setDraft`: `(Dispatch<SetStateAction<boolean>>)`: Set state function used for opening/closing the draft note.
- `onAdd`: `(note: INote) => void`: Function that is going to be executed when the `+` in the bottom right corner of the component is clicked.
- `noteRef`: `RefObject<HTMLDivElement>`: Ref used for scrolling to the Draft when being opened.

## Hook Usage

##### To use the `useNotes` hook in your component:

1. Import the useNotes hook in your component:

```typescript
import useNotes from './relative_path_to_hook';
```

2. Use the hook in the component

```tsx
const {
  get,
  notes,
  onAdd,
  onRemove,
  pagination: { canNext, canPrev, onFirst, onLast, onNext, onPrev, page }
} = useNotes();
```

Return props:

- `get`: `(id: string) => INote`: A function that returns a single Note.
- `notes`: `INote[]`: An array of all notes on the current page.
- `onAdd`: `(note: INote) => void`: A function that saves a draft note in the localStorage.
- `onRemove`: `(note: INote) => void`: A function that removes an existing note from the localStorage.
- `pagination`:
  - `canNext`: `boolean`: Used for disabling the `Next >` button on the pagination.
  - `canPrev`: `boolean`: Used for disabling the `< Prev` button on the pagination.
  - `onFirst`: `() => void`: Goes to the first page.
  - `onLast`: `() => void`: Goes to the last page.
  - `onNext`: `() => void`: Goes to the next page.
  - `onPrev`: `() => void`: Goes to the previous page.
  - `page`: `number`: The current page.
