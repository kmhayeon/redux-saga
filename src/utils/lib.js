import {useCallback, useState} from "react";

export const useInput = (init = null) => {
	const [value ,setvalue] = useState(init);
	const handler = useCallback((e) => {
		setvalue(e.target.value)
	}, []);
	return [ value, handler];
}
