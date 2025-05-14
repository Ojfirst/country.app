// Sanitize user input and clear white space
export const inputSanitiazer = (rawText) => {
  if (!rawText === 'string') return '';
  return rawText.trim().replace(/[^a-zA-Z ]/g, '');
}




// Message sanitizer
export const addMessage =  (message) => {
  return message;
}