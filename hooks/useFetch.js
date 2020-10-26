import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
	const isMounted = useRef(true);

	const [state, setState] = useState({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (isMounted) {
					setTimeout(() => {
						setState({ data, loading: false, error: null });
					}, 4000);
				} else {
					console.log('setState no se llamo');
				}
			});
	}, [url]);

	return state;
};
