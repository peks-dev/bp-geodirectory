// components
import ProfileHeader from "../profile-header/profile-header";

export default async function ProfileWrapper({ userId }) {
  return (
    <div>
      <ProfileHeader id={userId} />
    </div>
  );
}
