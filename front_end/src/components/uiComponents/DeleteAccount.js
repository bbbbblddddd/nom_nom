const DeleteAccount = ({ profileToDelete, onDeleteAccount }) => {
  const handleclick = () => {
    onDeleteAccount(profileToDelete);
  };
  return (
    <button className="font-nunito hover:underline" onClick={handleclick}>
      Delete account
    </button>
  );
};

export default DeleteAccount;
