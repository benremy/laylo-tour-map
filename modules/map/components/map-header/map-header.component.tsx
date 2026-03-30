import styles from "./map-header.module.scss"
import { LogoutBtn } from '@/modules/auth/components/logoutBtn/logout-btn.component';

export default function MapHeader() {
    return (
        <div className={styles.container}>
            <LogoutBtn />
        </div>
    )
}
