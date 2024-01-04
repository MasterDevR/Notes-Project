import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    console.log(req)
  res.status(200)
}

//    try {
//       const notesRef = ref(db, 'notes');
//       const newNoteRef = push(notesRef);

//       await set(newNoteRef, [newNote]);

//       console.log('Data successfully written to Realtime Database!');
//       clearForm(); // Clear the form after successful submission
//     } catch (error) {
//       console.error('Error writing data:', error);
//     }