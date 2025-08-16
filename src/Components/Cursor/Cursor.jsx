'use client';
import React, { useEffect, useRef } from 'react';
import './Cursor.css';
import gsap from 'gsap';

const colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
]
export default function Cursor() {
    const size = 100;
    const circles = useRef([]);
    const mouse = useRef({
        x: 0,
        y: 0
    })

    const delayedMouse = useRef({
        x: 0,
        y: 0
    })

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.current = {
            x: clientX,
            y: clientY
        }
    }
    const lerp = (x, y, a) => x * (1 - a) + y * a

    const moveCircle = (x, y) => {
        circles.current.forEach((circle, i) => {
            gsap.set(circle, {x, y, xPercent: -50, yPercent: -50})
        })
    }

    const animate = () => {
        const {x, y} = delayedMouse.current;

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.075),
            y: lerp(y, mouse.current.y, 0.075)
        }

        moveCircle(delayedMouse.current.x, delayedMouse.current.y)
        window.requestAnimationFrame(animate);
    }

    useEffect( () => {
        animate();
        window.addEventListener("mousemove", manageMouseMove)
        return () => window.removeEventListener("mousemove", manageMouseMove)
    }, [])

    return (
        <>
            {
                colors.map( (color, i, array) => {
                    return <div 
                                ref = {ref => circles.current[i] =  ref}
                                key = {color}
                                className='cursor' 
                                style={{
                                    backgroundColor: color,
                                    width: size, 
                                    height: size,
                                    filter: 'blur(3px)',
                                    transition: `transform ${(array.length - i) * 0.08}s ease-out`
                                }}
                            />
                })
            }
        </>
        
    )
}