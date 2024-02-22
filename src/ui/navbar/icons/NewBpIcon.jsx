import styles from "@/ui/navbar/navbar.module.css";

const NewBpIcon = ({ pathName }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 90 90"
      className={styles.navbarIcon}
    >
      <path d="M36.4 10.4C18.3 14.8 6.4 33.1 10 51.2 12.9 66.5 23.4 77 38.8 80c14.6 2.9 30.3-4.6 37.4-17.7 11.3-20.9 0-46.5-23.1-51.9-6.7-1.6-10-1.6-16.7 0zm11.4 24.3.3 7.2 7.2.3c6.9.3 7.2.4 7.2 2.8s-.3 2.5-7.2 2.8l-7.2.3-.3 7.2c-.3 6.9-.4 7.2-2.8 7.2s-2.5-.3-2.8-7.2l-.3-7.2-7.2-.3c-6.9-.3-7.2-.4-7.2-2.8s.3-2.5 7.3-2.8l7.2-.3v-6.8c0-7.4.4-8.3 3.5-7.9 1.8.3 2 1.1 2.3 7.5z" />
    </svg>
  );
};

export default NewBpIcon;
