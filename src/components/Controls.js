import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Controls.css';

function Controls({ header, headerColor, footer, footerColor, imgUrl, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h1 className={styles.header}>
        MEME GENERATOR
      </h1>
      <div>
        <label>Header</label>
        <TextControl name="header" text={header} color={headerColor}  onChange={onChange} />

        <label>Footer</label>
        <TextControl name="footer" text={footer} color={footerColor}  onChange={onChange} />

        <label>Image URL</label>
        <input type="url" name="imgUrl" value={imgUrl} onChange={onChange} />

        <button type="submit">Create Meme</button>

      </div>
    </form>
  );
}
  
Controls.propTypes = {
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  headerColor: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
};

function TextControl({ name, text, color, onChange }) {
  return (
      <>
        <input type="text" name={name} value={text} onChange={onChange}/>
        <input type="color" name={`${name}Color`} value={color} onChange={onChange}/>
      </>
  );
}
  
TextControl.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Controls;
