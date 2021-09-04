import React from 'react'
import styles from '../styles/ItemJewelry.module.scss'
type Props = {
	img: string;
	name: string;
	url?: string;
}
export default function ItemJewelry(props: Props): JSX.Element {
	return (
		<div className={styles.container}>
			<a href={props.url && '#'} className={styles.image}>
				<img src={props.img} alt={props.name} />
			</a>
			<div className={styles.info}>
				<a href={props.url && '#'} className={styles.name}>
					{props.name}
				</a>
				<a className={styles.btn} href="#">Buy Now</a>
			</div>
		</div>
	)
}
