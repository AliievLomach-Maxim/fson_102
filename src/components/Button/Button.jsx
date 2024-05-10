import clsx from 'clsx'
import css from './Button.module.css'

const Button = ({ variant, children }) => {
	const classNames = clsx(css.btn, variant === 'primary' ? css.primary : css.secondary)

	return <button className={classNames}>{children}</button>
}

export default Button
