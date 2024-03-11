// components
import ProfileHeader from "../profileHeader/ProfileHeader";

export default async function ProfileWrapper({ userId }) {
  return (
    <div>
      <ProfileHeader id={userId} />
    </div>
  );
}
