import blankAvatar from "../images/blank-profile-photo.webp";

const AvatarDisplay = ({ ticket }) => {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img
          src={ticket.avatar ? ticket.avatar : blankAvatar}
          alt={"Photo of " + ticket.owner}
        />
      </div>
    </div>
  );
};

export default AvatarDisplay;
