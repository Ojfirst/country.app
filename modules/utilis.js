// Sanitize user input and clear white space
export const inputSanitiazer = (rawText) => {
	if (!rawText === 'string') return '';
	return rawText.trim().replace(/[^a-zA-Z ]/g, '');
};

// Helper function for latitude conversion
export const convertToLatlng = (coordinate) => {
	if (!coordinate) return '';
	const degrees = Math.floor(coordinate);
	const minutes = Math.floor((coordinate - degrees) * 60);
	const seconds = Math.round(((coordinate - degrees) * 60 - minutes) * 60);
	return `${degrees}° ${minutes}' ${seconds}"`;
};

// Helper function for population conversion
export const convertToPopulation = (population) => {
	if (!population) return '';
	const number = parseInt(population);
	if (isNaN(number)) return '';
	return number.toLocaleString();
};

// Helper function for area in square kilometers with 2 decimal places and symbol
export const convertToArea = (area) => {
	if (!area) return '';
	const number = parseFloat(area);
	if (isNaN(number)) return '';
	return `${number.toFixed(2)} km²`;
};

// Message sanitizer
export const addMessage = (message) => {
	return message;
};
