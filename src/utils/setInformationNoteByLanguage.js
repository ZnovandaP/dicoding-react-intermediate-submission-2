const setInformationNoteByLanguage = (currentLanguage, { textID, TextEN }) => {
  if (currentLanguage === 'id') {
    return textID;
  }
  return TextEN;
};

export default setInformationNoteByLanguage;
