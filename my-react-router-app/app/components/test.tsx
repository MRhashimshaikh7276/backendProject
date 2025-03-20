import React, { useState, useTransition } from 'react';

export default function Test() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    const [isPending, startTransition] = useTransition();

    const ITEMS = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);

        // Low-priority update handled by useTransition 
        startTransition(() => {
            const filteredItems = ITEMS.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setList(filteredItems);
        });
    };


    return (
        <>
            <div>
                <input type="text" value={input} onChange={handleChange} placeholder="Search Items..."
                />
                {isPending && <p>Loading filtered results...</p>}
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
