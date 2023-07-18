import React from 'react';
import './form.css';

const Form = () => {
  return (
    <div className="contact-form">
      <h3>Add Your Resuarant to the list</h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name of Restaurant</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Address</label>
          <input type="text" id="location" name="location" placeholder="location of restaurant" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Description:</label>
          <textarea id="message" name="message" placeholder="about your restaurant"></textarea>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
