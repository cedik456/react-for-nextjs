interface UserProps {
  name: string;
  age: number;
  gender: string;
}

function User({ name, age, gender }: UserProps) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Gender: {gender}</h1>
    </div>
  );
}

export default User;
