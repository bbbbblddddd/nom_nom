const DeleteAccount = ({ profileToDelete, onDeleteAccount }) => {
  const handleclick = () => {
    onDeleteAccount(profileToDelete);
  };
  return <button onClick={handleclick}>Delete account</button>;
};

export default DeleteAccount;
