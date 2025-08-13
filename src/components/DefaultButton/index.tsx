import styles from "./styles.module.css";


type DefaultButton = {
  color?: "green" | "red",
  icon: React.ReactNode
}


export function DefaultButton({color = "green", icon} : DefaultButton) {
  return <>
      <button className={`${styles.button} ${styles[color]}`}>{icon}</button>
  </>;
}