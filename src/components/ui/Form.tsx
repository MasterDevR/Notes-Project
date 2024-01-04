import React, { useState, ChangeEvent, FormEvent} from 'react';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/src/firebase/firebase';
import { ref, push, set } from 'firebase/database';

const Form = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      title: '',
      content: '',
    });
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, content } = formData;

    const newNote = {
      title: title,
      notes: content,
      Date: format(new Date(), 'MMM-dd-yyyy'),
      id: uuidv4(),
    };

    try {
      const notesRef = ref(db, 'notes');
      const newNoteRef = push(notesRef);

      await set(newNoteRef, [newNote]);

      console.log('Data successfully written to Realtime Database!');
      clearForm(); // Clear the form after successful submission
    } catch (error) {
      console.error('Error writing data:', error);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className="container m-auto flex flex-col w-72">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="h-10 resize-none border border-gray-300 p-2"
          value={formData.title}
          onChange={handleInputChange}
        />
        <textarea
          className="h-40 resize-none border border-gray-300 p-2"
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleInputChange}
        />

        <button type="submit" className="border-solid border-2 rounded-sm border-600 p-4">
          Add
        </button>
      </form>
    </>
  );
};

export default React.memo(Form);
