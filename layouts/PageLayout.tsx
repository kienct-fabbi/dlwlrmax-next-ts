import React, { useRef } from 'react'
import { useEffect } from 'react';
import useWindowSize from '../hooks/useWindowsSize'
import styles from '../styles/scroll.module.scss'
type Props = {
	children: JSX.Element;
}
interface SCROLL_CONFIG {
	ease: number,
	current: number,
	previous: number,
	rounded: number
}
export default function PageLayout({ children }: Props): JSX.Element {
	const size = useWindowSize();
	const scrollContainer = useRef<HTMLDivElement | null>(null);
	const scrollConfig: SCROLL_CONFIG = {
		ease: 0.1,
		current: 0,
		previous: 0,
		rounded: 0,
	}
	const scrolling = (): void => {
		if (size.width && scrollContainer && scrollContainer.current) {
			scrollConfig.current = window.scrollY;
			scrollConfig.previous += (scrollConfig.current - scrollConfig.previous) * scrollConfig.ease;
			scrollConfig.rounded = Math.round(scrollConfig.previous * 100) / 100;
			//style
			scrollContainer.current.style.transform = `translateY(-${scrollConfig.rounded}px)`;
		}
		requestAnimationFrame(() =>
			scrolling()
		)
	}
	useEffect(() => {
		document.body.style.height = scrollContainer.current?.getBoundingClientRect().height + 'px';
	}, [size.height])
	useEffect(() => {
		requestAnimationFrame(() =>
			scrolling()
		)
	}, [])
	return (
		<div className={styles.app}>
			<div ref={scrollContainer} className={styles.scroll}>
				{children}
			</div>
		</div>
	)
}
