import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const addHover = () => setIsHovering(true);
        const removeHover = () => setIsHovering(false);

        // Track mouse movement and hover states
        window.addEventListener('mousemove', moveCursor);
        document.querySelectorAll('a, button').forEach((el) => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.querySelectorAll('a, button').forEach((el) => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
            });
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${isHovering ? 'custom-cursor-hover' : ''}`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default CustomCursor;
