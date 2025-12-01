function Form() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="border" placeholder="Type anything.." />
      <button>Send</button>
    </form>
  );
}

export default Form;
