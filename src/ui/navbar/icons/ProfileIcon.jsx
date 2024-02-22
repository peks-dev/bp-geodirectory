import styles from "@/ui/navbar/navbar.module.css";

const ProfileIcon = ({ pathName }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="666.667"
      height="666.667"
      viewBox="0 0 500 500"
      className={styles.navbarIcon}
    >
      <path d="M231.5 23.1c-62.5 9-108.2 70.4-99.4 133.5 2.3 16.9 11.2 39.1 21.1 53.2 13.6 19.2 38.5 37.4 60.1 44.1 33.9 10.4 71.7 5.8 99.5-12.2 21-13.6 35.5-30.4 45.4-52.7 5.9-13.2 8.5-23.4 10-38 3.5-36.1-12.6-76.2-40.1-99.7-19.4-16.6-38.7-25.4-61.6-28.2-10.3-1.3-26.2-1.3-35 0z" />
      <path d="M144.9 243.9c-15 5.8-44.4 31.7-61.2 53.8-21.3 28-36.7 66.8-40.7 102.7-1.3 11.2-.4 17.6 3.4 24.1 4.9 8.1 10.3 11.5 33.5 20.7 109.9 43.6 235.9 43.4 342.8-.5 20.5-8.4 26.1-12.1 30.8-20.2 4-6.8 4.8-13.3 3-26.7-5.2-40.4-23.9-82.1-50-111.9-15.5-17.7-40-37.6-51.6-42-5.8-2.3-13.8-2.4-20.2-.5-2.6.8-9.5 4.3-15.4 7.8-13.1 7.9-25.1 13-38 16.5-9.2 2.5-11.2 2.7-31.3 2.7s-22.1-.2-31.3-2.7c-12.9-3.5-24.9-8.6-37.7-16.2-5.8-3.5-12.7-7-15.3-7.9-6.2-2.1-15-2-20.8.3z" />
    </svg>
  );
};

export default ProfileIcon;
