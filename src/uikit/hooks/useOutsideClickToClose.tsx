import React, { useEffect } from 'react';

export function useOutsideClickToClose(refElement: React.RefObject<HTMLElement>, setState: React.Dispatch<React.SetStateAction<boolean>>) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (refElement.current && !refElement.current.contains(event.target as Node)) {
                setState(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refElement]);
}