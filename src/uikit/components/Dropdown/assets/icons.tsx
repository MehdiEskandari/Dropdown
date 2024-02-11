
import React from "react"
import Styles from "../dropdown.module.scss";

export const SelectedIcon = () => (
    <svg className={Styles.List_Item_Selected_Icon} xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.889 0.53423C13.1988 0.801081 13.2307 1.2652 12.9602 1.57086L5.63312 9.89134C5.49169 10.0512 5.28714 10.1429 5.07208 10.1429C4.85703 10.1429 4.65247 10.0512 4.51104 9.89134L0.841323 5.7619C0.570815 5.45624 0.602712 4.99212 0.912566 4.72527C1.22242 4.45842 1.6929 4.48988 1.9634 4.79555L5.07208 8.29103L11.8381 0.60451C12.1086 0.298844 12.5791 0.267379 12.889 0.53423Z" fill="#617ED8" />
    </svg>
);

export const ArrowIcon = ({ className }: { className?: string }) => (
    <svg className={`${Styles.Arrow} ${className}`} stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" /></svg>
);