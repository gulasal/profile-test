import React, { useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';

const EditableImage = () => {
  const [image, setImage] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setEditing(true);
  };

  const handleSave = () => {
    // Save the edited image
    setEditing(false);
  };

  return (
    <NextUIProvider>
      {!editing ? (
        <div>
          {!image ? (
            <div>
              <label htmlFor="image-upload">Upload an Image</label>
              <input type="file" id="image-upload" onChange={handleImageChange} />
            </div>
          ) : (
            <img src={image} alt="Uploaded" />
          )}
        </div>
      ) : (
        <div>
          <label htmlFor="image-edit">Edit Image</label>
          <br />
          <img src={image} alt="Editing" />
          <br />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </NextUIProvider>
  );
};

export default EditableImage;
