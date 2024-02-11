
import React, { useEffect, useRef, useState } from "react"
import { useOutsideClickToClose } from "uikit";

import Styles from "./dropdown.module.scss";
import { ArrowIcon, SelectedIcon } from "./assets/icons";


// Types
export interface SelectItem {
    title: string
    value: string | number,
    icon: string
}

type MultipleSelectProps = {
    multiple: true
    value: SelectItem[];
    setValue: React.Dispatch<React.SetStateAction<SelectItem[]>>;
    onChange: (value: SelectItem[]) => void;
    data: SelectItem[];
}

type SingleSelectProps = {
    multiple?: false
    value: SelectItem | undefined;
    setValue: React.Dispatch<React.SetStateAction<SelectItem | undefined>>;
    onChange: (value: SelectItem | undefined) => void;
    data: SelectItem[];
}

type DropdownProps = MultipleSelectProps | SingleSelectProps;


// Main Component
export const Dropdown = ({ value, setValue, onChange, data, multiple }: DropdownProps) => {

    // States
    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [filteredItems, setFilteredItems] = useState<SelectItem[]>([])


    // Refs
    const elementRef = useRef(null);
    const searchRef = useRef<HTMLInputElement>(null)


    // Actions
    function clear() {
        multiple ? onChange([]) : onChange(undefined)
        setIsOpen(false);
        searchRef.current?.focus()
    }

    function selectItem(item: SelectItem) {
        if (multiple) {
            if (value.includes(item)) {
                onChange(value.filter(i => i !== item))
            } else {
                onChange([...value, item])
            }
        } else {
            if (item !== value) onChange(item)
        }
    }

    function isItemSelected(item: SelectItem) {
        return multiple ? value.includes(item) : item === value;
    }

    const addItem = (event: any) => {
        if (multiple) {
            if (event.key === 'Enter' || event.key === 'Return') {
                const searchText = searchRef.current?.value!
                const filtered = data.filter(item => item.title.toLocaleLowerCase() === searchText.toLocaleLowerCase());

                const item = {
                    title: searchText,
                    value: searchText,
                    icon: ""
                }

                console.log(searchText, filtered, item, searchText.trim().length > 0 && filtered.length === 0)

                if (searchText.trim().length > 0 && filtered.length === 0) {
                    data.push(item)
                    setValue(prev => [...prev, item]);

                    setIsOpen(false)
                    setSearchQuery('')
                    setFilteredItems([])
                } else {
                    // Exist
                }
            }
        }
    };


    // Effects
    useOutsideClickToClose(elementRef, setIsOpen);

    useEffect(() => {
        document.addEventListener('keydown', addItem);
        return () => {
            document.removeEventListener('keydown', addItem);
        };
    }, []);

    return (
        <div
            className={Styles.Container}
            ref={elementRef}
            onClick={() => {
                setIsOpen(prev => !prev)
                searchRef.current?.focus()
            }}
            tabIndex={0}
        >
            <div className={Styles.Selected_Item}>
                {multiple ? value.map((v, i) => (
                    <button
                        className={Styles.Selected_Item_Badge}
                        key={i} onClick={e => {
                            e.stopPropagation()
                            selectItem(v)
                        }}>{v.title} <span className={Styles.Selected_Item_Badge_Close}>&times;</span></button>
                )) : value?.title}

                {multiple ? <input
                    ref={searchRef}
                    className={Styles.Input}
                    type="text" placeholder="search..."
                    value={searchQuery}
                    onChange={e => {
                        e.stopPropagation();
                        setSearchQuery(e.target.value)
                        setIsOpen(true)
                        const result = data.filter(item => item.title.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase()));
                        setFilteredItems(result);
                    }}

                />: !value ? <span>Choose an item</span> : null}
            </div>
            {multiple ? (value.length > 0) ? <div className={Styles.Close}
                onClick={e => {
                    e.stopPropagation();
                    clear();
                }}
            >&times;</div> : null : value ? <div className={Styles.Close}
                onClick={e => {
                    e.stopPropagation();
                    clear();
                }}
            >&times;</div>: null}
            {isOpen ? <ArrowIcon className={Styles.Arrow__Open} /> : <ArrowIcon className={Styles.Arrow__Close} />}

            <ul
                className={`${Styles.List} ${isOpen ? Styles.List__Show : ''}`} onClick={() => setIsOpen(true)}>

                {(searchQuery.trim().length === 0 && filteredItems.length === 0) && data.map((item, index) => (
                    <li
                        onClick={e => {
                            e.stopPropagation()
                            selectItem(item)
                            setIsOpen(false)
                            setSearchQuery('')
                        }}
                        key={index}
                        className={`${Styles.List_Item} ${isItemSelected(item) ? Styles.List_Item__Selected : ''}`}>
                        <span className={Styles.List_Item_Content}>{item.title}
                            <span className={Styles.List_Item_Icon}>{item.icon}</span>
                        </span>

                        {isItemSelected(item) && <SelectedIcon />}
                    </li>
                ))}

                {(searchQuery.trim().length > 0 && filteredItems.length === 0) && <li>
                    <span className={Styles.List_Item_Content_NotFound}>Sorry, Not Found!  <br /> You can add it by pressing the Enter.
                    </span>
                </li>}

                {filteredItems.length > 0 && filteredItems.map((item, index) => (
                    <li
                        onClick={e => {
                            e.stopPropagation()
                            selectItem(item)
                            setIsOpen(false)
                            setSearchQuery('')
                        }}
                        key={index}
                        className={`${Styles.List_Item} ${isItemSelected(item) ? Styles.List_Item__Selected : ''}`}>
                        <span className={Styles.List_Item_Content}>{item.title}
                            <span className={Styles.List_Item_Icon}>{item.icon}</span>
                        </span>

                        {isItemSelected(item) && <SelectedIcon />}
                    </li>
                ))}
            </ul>
        </div>
    )
}