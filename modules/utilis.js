// Sanitize user input and clear white space
export const inputSanitiazer = (rawText) => {
  if (!rawText === 'string') return '';
  return rawText.trim().replace(/[^a-zA-Z ]/g, '');
}

// Helper function for latitude conversion
export const convertToLatlng = (coordinate) => {
  if (!coordinate) return '';
  const degrees = Math.floor(coordinate);
  const minutes = Math.floor((coordinate - degrees) * 60);
  const seconds = Math.round(((coordinate - degrees) * 60 - minutes) * 60);
  return `${degrees}° ${minutes}' ${seconds}"`;
}

// Message sanitizer
export const addMessage =  (message) => {
  return message;
}