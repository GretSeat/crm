function DeleteBlock() {
  const deleteTicket = () => {
    console.log("DELETED");
  };
  return (
    <div className="delete-block">
      <div className="delete-icon" onClick={deleteTicket}>
        🗙
      </div>
    </div>
  );
}

export default DeleteBlock;
