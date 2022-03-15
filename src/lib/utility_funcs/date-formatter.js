/* Use date-fns library to format dates throughout site */
import { parseISO, format } from 'date-fns';
export const formatDate = (dateString) => {
	const date = parseISO(dateString);
	return format(date, 'LLLL do, yyyy');
};
