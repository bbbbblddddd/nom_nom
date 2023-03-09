const DeleteAccount = ({ profileToDelete, onDeleteAccount }) => {
  const handleclick = () => {
    onDeleteAccount(profileToDelete);
  };
  return (
    <button
      className="font-nunito text-red-500 hover:underline"
      onClick={handleclick}
    >
      Delete account
    </button>
  );
};

export default DeleteAccount;
