import React from 'react'
import styles from '../styles/scroll.module.scss'
type Props = {
	children: JSX.Element;
}
export default function PageLayout({ children }: Props): JSX.Element {
	return (
		<div className={styles.scroll}>
			{children}
		</div>
	)
}
