import { FormEvent, useState } from "react";

interface IPerson {
  name: string;
  age: number;
}

const App = () => {
  const [user, setUser] = useState<IPerson>();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="Age"
          value={user?.age || ''}
          onChange={(e) =>
            setUser((prevVal) => ({ ...prevVal!, age: Number(e.target.value) }))
          }
        />
        <input
          type="text"
          placeholder="Name"
          value={user?.name || ''}
          onChange={(e) =>
            setUser((prevVal) => ({ ...prevVal!, name: e.target.value }))
          }
        />

        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default App;
