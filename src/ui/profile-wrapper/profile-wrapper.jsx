import "./profile-wrapper.css";
// components
import ProfileHeader from "../profile-header/profile-header";

export default async function ProfileWrapper({ userId }) {
  return (
    <section className="profile-wrapper">
      <ProfileHeader id={userId} />
    </section>
  );
}
