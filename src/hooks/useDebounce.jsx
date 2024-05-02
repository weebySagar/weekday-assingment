import React, { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutRef = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timeoutRef);
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
