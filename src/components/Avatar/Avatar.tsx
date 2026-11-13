import styles from './Avatar.module.scss'

type AvatarProps = {
    initials: string,
    className?: string,
    name: string,
}

const Avatar = ({ initials, className, name }: AvatarProps) => {
  return (
    <div className={`${styles.avatar} ${className ?? ''}`} aria-label={name} role='img'>{initials}</div>
  )
}

export default Avatar